import { GlobalContext } from '@context/global'
import { coverageAV, coverageCP, coverageLR, limitCoverage } from '@pages/build-your-plan/constants/coverages'
import { useContext, useEffect, useMemo, useState } from 'react'
import Tabs from '../tabs'
import CoverageItem from './coverage-item'
import './index.css'

export default function Coverages () {
  const { setAmount, baseAmount, insuredAmount } = useContext(GlobalContext)

  const [selectedLR, setSelectedLR] = useState(false)
  const [selectedCP, setSelectedCP] = useState(false)
  const [selectedAV, setSelectedAV] = useState(false)

  const calculatedAmount = useMemo(() => {
    let newAmount = 0
    if (selectedLR) {
      newAmount += coverageLR.price
    }
    if (selectedCP) {
      newAmount += coverageCP.price
    }
    if (selectedAV) {
      newAmount += coverageAV.price
    }
    return newAmount
  }, [selectedLR, selectedCP, selectedAV])

  useEffect(() => {
    setAmount(calculatedAmount + baseAmount)
  }, [calculatedAmount])

  useEffect(() => {
    if (insuredAmount > limitCoverage) {
      setSelectedCP(false)
    } else {
      setSelectedCP(true)
    }
  }, [insuredAmount])

  return (
    <div>
      <span className='coverages__title'>Agrega o quita coberturas</span>
      <Tabs
        initialTab={0}
        tabs={[
          {
            title: 'Protege a tu auto',
            content: (
              <div className='coverage__container'>
                <CoverageItem item={coverageLR} selected={selectedLR} setSelected={setSelectedLR} />
                <CoverageItem item={coverageCP} selected={selectedCP} setSelected={setSelectedCP} />
                <CoverageItem item={coverageAV} selected={selectedAV} setSelected={setSelectedAV} />
              </div>
            )
          },
          {
            title: 'Protege a los que te rodean',
            content: <div />
          },
          {
            title: 'Mejora tu plan',
            content: <div />
          }
        ]}
      />
    </div>
  )
}
