import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  if (username === 'admin' && password === '123') {
    const res = NextResponse.json({ message: 'Login success' })

    res.cookies.set('user', username, {
      httpOnly: true,


      
      path: '/',
    })

    return res
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}