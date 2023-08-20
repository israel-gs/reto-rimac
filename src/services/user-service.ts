import { type UserType } from '@models/UserType'

export const getUserByDocument = async (document: string, documentType: string): Promise<UserType> => {
  try {
    console.log(document, documentType)
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json() as UserType
    return user
  } catch (error) {
    throw new Error('Error fetching user')
  }
}
