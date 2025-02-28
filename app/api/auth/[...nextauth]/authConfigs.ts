import NextAuth, { AuthOptions } from 'next-auth'
import { MongoClient } from 'mongodb'
import { EmailClient } from '@azure/communication-email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

const url = process.env['DATABASE_CONNECTION_STRING'] as string

const client = new MongoClient(url)

const emailServer = process.env['EMAIL_SERVER'] as string
const emailClient = new EmailClient(emailServer)
const authConfigs: AuthOptions = {
  adapter: MongoDBAdapter(client.connect(), { databaseName: 'authen' }),
  session: {
    strategy: 'jwt'
  },

  providers: [
    {
      id: 'link',
      type: 'email',
      sendVerificationRequest: async ({
        identifier,
        url
      }: {
        identifier: string
        url: string
      }) => {
        const emailMessage = {
          senderAddress:
            'DoNotReply@f37a3997-dc08-4080-9e1c-e145846433be.azurecomm.net',
          content: {
            subject: 'Login Link',
            plainText: url
          },
          recipients: {
            to: [{ address: identifier }]
          }
        }
        const poller = await emailClient.beginSend(emailMessage)
        const result = await poller.pollUntilDone()
      }
    } as any
  ],
  callbacks: {
    async signIn() {
      return true
    },
    async redirect({ url }) {
      return url
    },
    async session({ session }) {
      return session
    },
    async jwt({ token }) {
      return token
    }
  }
}
export default authConfigs
