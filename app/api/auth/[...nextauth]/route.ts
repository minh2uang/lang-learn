import NextAuth, { AuthOptions } from "next-auth";
import { MongoClient } from "mongodb";
import { EmailClient } from "@azure/communication-email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
const url = process.env["DATABASE_CONNECTION_STRING"] as string;
const client = new MongoClient(url);

// This code retrieves your connection string from an environment variable.
const connectionString =
  "endpoint=https://m2projectsemailer.australia.communication.azure.com/;accesskey=6zoWmD6gsDfPSvaoNFDpPEMnBXYGSDGC9cnjdaxhBejoxpR0QbUg2ekF4xvGfD96oF078UGzqo837jUlCFi46Q==";
const emailClient = new EmailClient(connectionString);

export const authConfigs: AuthOptions = {
  adapter: MongoDBAdapter(client.connect(), { databaseName: "authen" }),
  session: {
    strategy: "jwt",
  },

  providers: [
    {
      id: "link",
      type: "email",
      sendVerificationRequest: async ({
        identifier,
        url,
      }: {
        identifier: string;
        url: string;
      }) => {
        const emailMessage = {
          senderAddress:
            "DoNotReply@f37a3997-dc08-4080-9e1c-e145846433be.azurecomm.net",
          content: {
            subject: "Login Link",
            plainText: url,
          },
          recipients: {
            to: [{ address: identifier }],
          },
        };
        const poller = await emailClient.beginSend(emailMessage);
        const result = await poller.pollUntilDone();
      },
    } as any,
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async redirect({ url }) {
      return url;
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
};
const handler = NextAuth(authConfigs);

export { handler as GET, handler as POST };
