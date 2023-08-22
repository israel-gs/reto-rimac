import { currencyFormat } from '@utils/utils'
import { useState } from 'react'
import './index.css'

interface PriceSelectorProps {
  min: number
  max: number
  onChange: (value: number) => void
  increment: number
  currency: string
}

export default function PriceSelector ({ min, max, onChange, increment, currency }: PriceSelectorProps) {
  const [value, setValue] = useState(min)

  const increase = () => {
    if (value + increment <= max) {
      setValue(value + increment)
      onChange(value + increment)
    }
  }

  const decrease = () => {
    if (value - increment >= min) {
      setValue(value - increment)
      onChange(value - increment)
    }
  }

  return (
    <div className='price-selector__container'>
      <div className='price-selector__amounts-container'>
        <span className='price-selector__amounts-title'>Indica la suma asegurada</span>
        <div className='price-selector__min-max-container'>
          <span>MIN {currency}{currencyFormat(min, 0)}</span>
          <div className="price-selector__min-max-separator"></div>
          <span>MAX {currency}{currencyFormat(max, 0)}</span>
        </div>
      </div>
      <div className='price-selector__button-container'>
        <button className="price-selector__button" onClick={decrease}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.0001 8L3.00012 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="price-selector__button-text">{currency} {currencyFormat(value, 0)}</span>
        <button className="price-selector__button" onClick={increase}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.00012 3V13" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.0001 8L3.00012 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
