import { type DocumentType } from '@models/DocumentType'
import { useState } from 'react'
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

  const validateForm = () => {
    let documentError = ''
    let cellphoneError = ''
    let plateError = ''
    if (document && documentValue.length < document.length) {
      documentError = 'Debe seleccionar un tipo de documento'
    } else {
      documentError = ''
    }

    if (cellphoneValue.length < cellphoneMaxLength) {
      cellphoneError = `El celular debe tener ${cellphoneMaxLength} caracteres`
    } else {
      cellphoneError = ''
    }

    if (plateValue.length < plateMaxLength) {
      plateError = `La placa debe tener ${plateMaxLength} caracteres`
    } else {
      plateError = ''
    }

    setDocumentError(documentError)
    setCellphoneError(cellphoneError)
    setPlateError(plateError)

    return !(documentError || cellphoneError || plateError)
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
    validateForm
  }
}
