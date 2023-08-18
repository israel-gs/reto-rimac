import { useEffect, useState, type ChangeEvent } from 'react'
import { cellphoneMaxLength, cellphoneRegex } from '../constants/form-constants'

interface CellphoneInputProps {
  onChange: (value: string) => void
  error?: string
}

export default function CellphoneInput ({ onChange, error }: CellphoneInputProps) {
  const [value, setValue] = useState('')

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target
    if (newValue.length <= cellphoneMaxLength && cellphoneRegex.test(newValue)) {
      setValue(newValue)
    }
  }

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <div className="form-group">
      <input className={`w-full input ${error !== '' ? 'input--error' : ''}`} type="text" id="phone" value={value}
        onChange={onChangeValue} />
      <label htmlFor="phone" className={`input-placeholder ${value ? 'input-placeholder--filled' : ''}`}>Celular</label>
      <div className="input__error-container">
        {error !== '' && <span className="error-message">{error}</span>}
      </div>
    </div>
  )
}
