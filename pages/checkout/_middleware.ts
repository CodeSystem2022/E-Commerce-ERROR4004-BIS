import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { jwt } from '../../utils'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

  // TODO: check if it checked from NEXT v12 to NEXT v13
  //TODO: Check if we need : let token = req.cookies.get('token')
  const { token = '' } = req.cookies

  try {
    await jwt.isValidToken(token)
    return NextResponse.next()

  } catch (error) {
    // TODO: check if it checked from NEXT v12 to NEXT v13
    const requestedPage = req.page.name
    return NextResponse.redirect(`/auth/login?p=${ requestedPage }`)
  }
}