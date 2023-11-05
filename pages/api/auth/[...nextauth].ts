import NextAuth, { AuthOptions, DefaultSession, Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { checkUserEmailPassword, oAUthToDbUser } from './../../../database/dbUsers';

// export interface SessionExtension extends DefaultSession {
//   accessToken: string;
//   apiToken: string;
//   refreshToken: string;
// }

declare module 'next-auth' {
  interface DefaultSession {
    accessToken: string
    // apiToken: string;
    // refreshToken: string;
  }
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [

    Credentials({
      name: 'Custom Login',
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'Example: example@email.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Type your password here'
        },
      },
      async authorize(credentials): Promise<any> {
       
        return await checkUserEmailPassword(credentials!.email, credentials!.password);
      }
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    // STUB ...add more providers here

  ],

  // Custom pages to login and register
  pages: {
    signIn: '/auth/login',
    newUser: 'auth/register'
  },

  // Callbacks
  jwt: {
    // secret: process.env.JWT_SECRET_SEED, // STUB - DEPRECATED
  },

  // Expiration sesion (opcional me funciono bien sin esto)
  session: {
    maxAge: 2592000, // 30d
    strategy: 'jwt',
    updateAge: 86400, // c/dia
  },

  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case 'oauth':
            token.user = await oAUthToDbUser(user?.email!, user?.name!)
            break

          case 'credentials':
            token.user = user
            break
        }
      }
      return token
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string
      session.user = token.user as any

      return session
    }
  }

}

export default NextAuth(authOptions)


// import NextAuth from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
// import Credentials from 'next-auth/providers/credentials'
// import { dbUsers } from '../../../database'

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [

//     Credentials({
//       name: 'Custom login',
//       credentials: {
//         email: {
//           label: 'Email: ',
//           type: 'email',
//           placeholder: 'example@email.com'
//         },
//         password: {
//           label: 'Password:',
//           type: 'password',
//           placeholder: 'Type your password here'
//         },
//       },
//       async authorize(credentials): Promise<any> {

//         return await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password)
//       }
//     }),

//     GithubProvider({
//       clientId: process.env.GITHUB_ID!!,
//       clientSecret: process.env.GITHUB_SECRET!!,
//     }),

//   ],

//   // Custom Pages
//   pages: {
//     signIn: '/auth/login',
//     newUser: '/auth/register'
//   },


//   jwt: {
//     // secret: process.env.JWT_SECRET_SEED, // deprecated
//   },

//   session: {
//     maxAge: 2592000, // 30 days
//     strategy: 'jwt',
//     updateAge: 86400, // every day
//   },

//   // Callbacks
//   callbacks: {
//     async jwt({ token, account, user }) {

//       if (account) {
//         token.accessToken = account.access_token

//         switch (account.type) {

//           case 'oauth':
//             token.user = await dbUsers.oAUthToDbUser(user?.email || '', user?.name || '')
//             break

//           case 'credentials':
//             token.user = user
//             break
//         }
//       }

//       return token
//     },

//     async session({ session, token, user }) {

//       // TODO: en el build sale este error: Property 'accessToken' does not exist on type 'Session'
//       console.log('session: ', session)
//       session.accessToken = token.accessToken
//       session.user = token.user as any

//       return session
//     }
//   }
// })