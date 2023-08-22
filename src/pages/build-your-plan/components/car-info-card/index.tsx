import ManImage from '@assets/car-info-man.png'
import './index.css'

interface CarInfoCardProps {
  plate: string | null
  brand: string
  model: string
  year: string
}

export default function CarInfoCard ({ plate, brand, model, year }: CarInfoCardProps) {
  const formatPlate = (plate: string) => {
    const plateArray = plate.split('')
    const plateArrayLength = plateArray.length
    const plateArrayFirstHalf = plateArray.slice(0, plateArrayLength / 2)
    const plateArraySecondHalf = plateArray.slice(plateArrayLength / 2, plateArrayLength)
    const plateFirstHalf = plateArrayFirstHalf.join('')
    const plateSecondHalf = plateArraySecondHalf.join('')
    return `${plateFirstHalf}-${plateSecondHalf}`
  }

  return (
    <div className='car-info__container'>
      <div className='car-info__data'>
        <span className='car-info__plate'>
          Placa: { plate ? formatPlate(plate) : ''}
        </span>
        <span className='text-[20px] car-info__brand'>
          {brand} {year} {model}
        </span>
      </div>
      <div className='car-info__image-container'>
        <img src={ManImage} />
      </div>
    </div>
  )
}
