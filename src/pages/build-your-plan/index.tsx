import Header from '@components/header'
import { useContext } from 'react'
import { GlobalContext } from '../../context/global'

export default function BuildYourPlan () {
  const { user, plate } = useContext(GlobalContext)

  return (
    <div>
      <Header hasBorder />
      {
        JSON.stringify(user)
      }
      {
        JSON.stringify(plate)
      }
    </div>
  )
}
