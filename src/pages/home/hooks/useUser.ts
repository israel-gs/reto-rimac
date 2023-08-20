import { type UserType } from '@models/UserType'
import { getUserByDocument } from '@services/user-service'
import { useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchUser = async (document: string, documentType: string) => {
    try {
      setLoading(true)
      const user = await getUserByDocument(document, documentType)
      setUser(user)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    loading,
    error,
    fetchUser
  }
}
