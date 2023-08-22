import { IconArrowLeft } from '@components/icons'
import { useLocation } from 'wouter'
import './index.css'

interface StepperProps {
  currentStep: number
  steps: string[]
}

export default function Stepper ({ currentStep, steps }: StepperProps) {
  const [, navigate] = useLocation()

  const buildSeparator = (index: number) => {
    if (index === steps.length - 1) {
      return null
    }
    return (
      <div className='stepper__desktop-item-separator'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1" height="40" viewBox="0 0 1 40" fill="none">
          <line x1="0.5" y1="39.5" x2="0.500001" y2="0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 8" />
        </svg>
      </div>
    )
  }

  const handleGoBack = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="stepper__main-container">
      <div className='stepper__mobile-container'>
        <button className='stepper__mobile-back-button' onClick={handleGoBack}>
          <IconArrowLeft className="stepper__mobile-back-icon" />
        </button>
        <span className='stepper__mobile-label'>
          Paso {currentStep} de {steps.length}
        </span>
        <div className='stepper__mobile-loader'>
          <div className='stepper__mobile-loader-indicator' style={{ width: `${(currentStep / steps.length) * 100}%` }} />
        </div>
      </div>
      <div className='stepper__desktop-container'>
        {
          steps.map((step, index) => (
            <div key={index}>
              <div className={`stepper__desktop-item  ${currentStep === index + 1 ? 'stepper__desktop-item--selected' : 'stepper__desktop-item--unselected'}`}>
                <div className={'stepper__desktop-number'}>
                  {
                    index + 1
                  }
                </div>
                <span className={'stepper__desktop-label'}>
                  {step}
                </span>
              </div>
              {
                buildSeparator(index)
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}
