import bcrypt from 'bcryptjs'
import { User } from '../models'
import { db } from './'

export const checkUserEmailPassword = async (email: string, password: string) => {

  await db.connect()
  const user = await User.findOne({ email })
  await db.disconnect()

  // If the user does not exist
  if (!user) {
    return null
  }

  // If the user exist -> check password
  if (!bcrypt.compareSync(password, user.password!)) {
    return null
  }

  // If the user exist and it's ok password
  const { role, name, _id } = user


  return {
    _id,
    email: email.toLocaleLowerCase(),
    role,
    name,
  }
}


// Create or verify an  OAuth user
export const oAUthToDbUser = async (oAuthEmail: string, oAuthName: string) => {

  await db.connect()
  const user = await User.findOne({ email: oAuthEmail })

  if (user) {
    await db.disconnect()
    const { _id, name, email, role } = user
    return { _id, name, email, role }
  }

  const newUser = new User({
    email: oAuthEmail,
    name: oAuthName,
    password: '@',
    role: 'client'
  })
  await newUser.save()
  await db.disconnect()

  const { _id, name, email, role } = newUser

  return { _id, name, email, role }
}
