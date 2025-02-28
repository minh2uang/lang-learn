import NextAuth from 'next-auth'

import authConfigs from './authConfigs'

const handler = NextAuth(authConfigs)

export { handler as GET, handler as POST }
