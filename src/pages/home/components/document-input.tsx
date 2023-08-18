import { useClickAway } from '@uidotdev/usehooks'
import { useEffect, useState, type ChangeEvent } from 'react'
import { type DocumentType } from '../../../models/DocumentType'

const documentTypes: DocumentType[] = [
  { value: 'dni', label: 'DNI', length: 8, regex: /^\d{0,8}$/ },
  { value: 'ce', label: 'CE', length: 12, regex: /^[a-zA-Z0-9]{0,12}$/ }
]

interface DocumentInputProps {
  onChange: (document: DocumentType, value: string) => void
  error?: string
}

export default function DocumentInput ({ onChange, error }: DocumentInputProps) {
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>(documentTypes[0])
  const [value, setValue] = useState('')
  const [expanded, setExpanded] = useState(false)

  const ref = useClickAway<HTMLDivElement>(() => {
    setExpanded(false)
  })

  const onChangeDocument = (document: DocumentType) => {
    setExpanded(false)
    setValue('')
    setSelectedDocument(document)
  }

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = e.target
    if (newValue.length <= selectedDocument.length && selectedDocument.regex.test(newValue)) {
      setValue(newValue)
    }
  }

  useEffect(() => {
    onChange(selectedDocument, value)
  }, [selectedDocument, value])

  return (
    <div className="form-group">
      <div className={`document-input__container ${error !== '' ? 'document-input__items-container--error' : ''}`}>
        <button
          className="document-input__select"
          type='button'
          onClick={() => {
            setExpanded(!expanded)
          }}>
          {selectedDocument.label}

          <svg className={`document-input__select-arrow ${expanded ? 'document-input__select-arrow--up' : ''}`} xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2943 6.23418C13.6148 6.56556 13.6148 7.097 13.2943 7.42837L9.09867 11.766C8.76988 12.1059 8.23001 12.1059 7.90122 11.766L3.70562 7.42837C3.38509 7.097 3.38509 6.56556 3.70562 6.23418C4.03441 5.89427 4.57428 5.89427 4.90307 6.23418L8.49995 9.9528L12.0968 6.23418C12.4256 5.89427 12.9655 5.89427 13.2943 6.23418Z" fill="#FF1C44" />
          </svg>

          <div className={`document-input__items-container ${expanded ? '' : 'document-input__items-container--hidden'}`} ref={ref}>
            {documentTypes.map((documentType) => (
              <div
                key={documentType.value}
                onClick={() => {
                  onChangeDocument(documentType)
                }}
                className='document-input__item'
              >
                {documentType.label}
              </div>
            ))}
          </div>
        </button>

        <div className="w-full form-group">
          <input
            className="w-full input"
            type="text"
            id="document"
            value={value}
            onChange={onChangeValue}
          />
          <label htmlFor="plate" className={`input-placeholder ${value ? 'input-placeholder--filled' : ''}`}>Nro. de doc</label>
        </div>
      </div>
      <div className="document-input__error-container">
        {error !== '' && <span className="error-message">{error}</span>}
      </div>
    </div>
  )
}
