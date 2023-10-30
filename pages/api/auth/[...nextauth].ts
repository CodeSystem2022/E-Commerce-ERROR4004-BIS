import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

import { dbUsers } from '../../../database'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [

    Credentials({
      name: 'Custom login',
      credentials: {
        email: { label: 'Email: ', type: 'email', placeholder: 'example@email.com' },
        password: { label: 'Password:', type: 'password', placeholder: 'Type your password here' },
      },
      async authorize(credentials) {
        console.log({ credentials })
        // return { name: 'Pedro Rodriguez', email: 'p-rodriguez@google.com', role: 'admin' }

        return await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password)

        return null
      }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

  ],

  // Callbacks
  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // deprecated
  },

  callbacks: {
    async jwt({ token, account, user }) {

      if (account) {
        token.accessToken = account.access_token

        switch (account.type) {

          case 'oauth':
            token.user = await dbUsers.oAUthToDbUser(user?.email || '', user?.name || '')
            break

          case 'credentials':
            token.user = user
            break
        }
      }

      return token
    },

    async session({ session, token, user }) {

      session.accessToken = token.accessToken
      session.user = token.user as any

      return session
    }
  }
})