import { useState } from 'react'
import { type DocumentType } from '../../../models/DocumentType'
import { cellphoneMaxLength, plateMaxLength } from '../constants/form-constants'

export const useForm = () => {
  const [document, setDocument] = useState<DocumentType | null>(null)
  const [documentValue, setDocumentValue] = useState('')
  const [documentError, setDocumentError] = useState<string>('')
  const [cellphoneValue, setCellphoneValue] = useState('')
  const [cellphoneError, setCellphoneError] = useState<string>('')
  const [plateValue, setPlateValue] = useState('')
  const [plateError, setPlateError] = useState<string>('')
  const [termsChecked, setTermsChecked] = useState(false)

  const handleSubmit = () => {
    if (document && documentValue.length < document.length) {
      setDocumentError('Debe seleccionar un tipo de documento')
    } else {
      setDocumentError('')
    }

    if (cellphoneValue.length < cellphoneMaxLength) {
      setCellphoneError(`El celular debe tener ${cellphoneMaxLength} caracteres`)
    } else {
      setCellphoneError('')
    }

    if (plateValue.length < plateMaxLength) {
      setPlateError(`La placa debe tener ${plateMaxLength} caracteres`)
    } else {
      setPlateError('')
    }
  }

  return {
    document,
    setDocument,
    documentValue,
    setDocumentValue,
    cellphoneValue,
    setCellphoneValue,
    plateValue,
    setPlateValue,
    termsChecked,
    setTermsChecked,
    documentError,
    cellphoneError,
    plateError,
    handleSubmit
  }
}
