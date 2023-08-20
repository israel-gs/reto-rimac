import { useEffect, type FormEvent } from 'react'
import { useLocation } from 'wouter'
import Button from '../../../../components/button'
import { useForm } from '../../hooks/useForm'
import { useUser } from '../../hooks/useUser'
import CellphoneInput from '../cellphone-input'
import DocumentInput from '../document-input'
import PlateInput from '../plate-input'
import TermsCheck from '../terms-check'
import './index.css'

export default function Form () {
  const {
    document,
    setDocument,
    documentValue,
    setDocumentValue,
    cellphoneValue,
    setCellphoneValue,
    plateValue,
    setPlateValue,
    setTermsChecked,
    documentError,
    cellphoneError,
    plateError,
    validateForm
  } = useForm()

  const { loading, fetchUser, user } = useUser()

  const [location, navigate] = useLocation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formValid = validateForm()
    if (formValid) {
      fetchUser(documentValue, document?.value ?? '')
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/arma-tu-plan')
    }
  }, [user])

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
        <Button className="w-full" type="submit" loading={loading}>
          Cotízalo
        </Button>
      </form>
    </section>
  )
}
