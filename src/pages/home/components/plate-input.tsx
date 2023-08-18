import { useEffect, useState, type ChangeEvent } from 'react'
import { plateMaxLength, plateRegex } from '../constants/form-constants'

interface PlateInputProps {
  onChange: (value: string) => void
  error?: string
}

export default function PlateInput ({ onChange, error }: PlateInputProps) {
  const [value, setValue] = useState('')

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target
    if (newValue.length <= plateMaxLength && plateRegex.test(newValue)) {
      setValue(newValue.toUpperCase())
    }
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <div className="form-group">
      <input className={`w-full input ${error !== '' ? 'input--error' : ''}`} type="text" id="plate" value={value} onChange={onChangeValue} />
      <label htmlFor="plate" className={`input-placeholder ${value ? 'input-placeholder--filled' : ''}`}>Placa</label>
      <div className="input__error-container">
        {error !== '' && <span className="error-message">{error}</span>}
      </div>
    </div>
  )
}
