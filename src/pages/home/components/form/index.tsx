import { type FormEvent } from 'react'
import { useForm } from '../../hooks/useForm'
import CellphoneInput from '../cellphone-input'
import DocumentInput from '../document-input'
import PlateInput from '../plate-input'
import TermsCheck from '../terms-check'
import './index.css'

export default function Form () {
  const {
    setDocument,
    setDocumentValue,
    setCellphoneValue,
    setPlateValue,
    setTermsChecked,
    documentError,
    cellphoneError,
    plateError,
    handleSubmit: onSubmit
  } = useForm()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <section className="form" onSubmit={handleSubmit}>
      <h2 className='form__title'>Déjanos tus datos</h2>
      <form>
        <DocumentInput
          onChange={(document, value) => {
            setDocument(document)
            setDocumentValue(value)
          }}
         error={documentError}
        />
        <CellphoneInput
          onChange={(value) => {
            setCellphoneValue(value)
          }}
          error={cellphoneError}
        />
        <PlateInput
          onChange={(value) => {
            setPlateValue(value)
          }}
          error={plateError}
        />
        <TermsCheck
          onChange={(value) => {
            setTermsChecked(value)
          }}
        />
        <button className="w-full primary-button" type="submit">Cotízalo</button>
      </form>
    </section>
  )
}
