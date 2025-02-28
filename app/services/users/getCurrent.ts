'use server'

import authConfigs from '@/app/api/auth/[...nextauth]/authConfigs'
import { getServerSession } from 'next-auth'

export interface IUser {
  email: string
}

export interface ISession {
  user?: {
    email: string
  }
  expires?: string
}

const usersGetCurrentService = async ({}): Promise<IUser | null> => {
  const session = await getServerSession(authConfigs)
  return session?.user?.email ? (session.user as IUser) : null
}

export default usersGetCurrentService
