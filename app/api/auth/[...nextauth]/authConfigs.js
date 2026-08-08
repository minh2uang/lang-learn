"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const communication_email_1 = require("@azure/communication-email");
const mongodb_adapter_1 = require("@next-auth/mongodb-adapter");
const url = process.env['DATABASE_CONNECTION_STRING'];
const client = new mongodb_1.MongoClient(url);
const emailServer = process.env['EMAIL_SERVER'];
const emailClient = new communication_email_1.EmailClient(emailServer);
const authConfigs = {
    adapter: (0, mongodb_adapter_1.MongoDBAdapter)(client.connect(), { databaseName: 'authen' }),
    session: {
        strategy: 'jwt'
    },
    providers: [
        {
            id: 'link',
            type: 'email',
            sendVerificationRequest: async ({ identifier, url }) => {
                const emailMessage = {
                    senderAddress: 'DoNotReply@f37a3997-dc08-4080-9e1c-e145846433be.azurecomm.net',
                    content: {
                        subject: 'Login Link',
                        plainText: url
                    },
                    recipients: {
                        to: [{ address: identifier }]
                    }
                };
                const poller = await emailClient.beginSend(emailMessage);
                const result = await poller.pollUntilDone();
            }
        }
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
        }
    }
};
exports.default = authConfigs;
