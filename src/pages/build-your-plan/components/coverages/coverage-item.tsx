import { useState } from 'react'
import Switch from '../switch'

export interface Coverage {
  name: string
  description: string
  price: number
  code: string
  icon: () => JSX.Element
}

interface CoverageItemProps {
  item: Coverage
}

export default function CoverageItem ({ item }: CoverageItemProps) {
  const [expanded, setExpanded] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const handleAdd = () => {
    setChecked(!checked)
  }

  return (
    <div className='coverage-item__main-container'>
      <div className='coverage-item__image-container'>
        <item.icon />
      </div>
      <div className="coverage-item__info-container">
        <div className="coverage-item__title-container">
          <span className='coverage-item__title'>{item.name}</span>
          <div className='coverage-item__switch-container'>
            <Switch checked={checked} onChange={handleAdd} />
          </div>
        </div>
        <div className='coverage-item__desktop-switch-container'>
          <button className="coverage-item__add-button" onClick={handleAdd}>
            {
              checked
                ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.6" d="M12 0C5.38338 0 0 5.38292 0 12C0 18.6171 5.38338 24 12 24C18.6166 24 24 18.6171 24 12C24 5.38292 18.6166 0 12 0ZM12 23.0769C5.89246 23.0769 0.923077 18.1075 0.923077 12C0.923077 5.89246 5.89246 0.923077 12 0.923077C18.1075 0.923077 23.0769 5.89246 23.0769 12C23.0769 18.1075 18.1075 23.0769 12 23.0769Z" fill="#939DFF" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.0515 11.5154C16.3804 11.5154 16.6475 11.7818 16.6475 12.1113C16.6475 12.4409 16.3804 12.7073 16.0515 12.7073C10.7459 12.7073 12.8946 12.7073 7.97072 12.7073C7.64185 12.7073 7.37476 12.4409 7.37476 12.1113C7.37476 11.7818 7.64185 11.5154 7.97072 11.5154C12.681 11.5154 10.998 11.5154 16.0515 11.5154Z" fill="#6F7DFF" />
              </svg>)
                : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.6" d="M12 0C5.38338 0 0 5.38292 0 12C0 18.6171 5.38338 24 12 24C18.6166 24 24 18.6171 24 12C24 5.38292 18.6166 0 12 0ZM12 23.0769C5.89246 23.0769 0.923077 18.1075 0.923077 12C0.923077 5.89246 5.89246 0.923077 12 0.923077C18.1075 0.923077 23.0769 5.89246 23.0769 12C23.0769 18.1075 18.1075 23.0769 12 23.0769Z" fill="#939DFF" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4148 8.23268C11.4148 7.90313 11.6819 7.63672 12.0108 7.63672C12.3396 7.63672 12.6067 7.90313 12.6067 8.23268V11.5155H16.0512C16.38 11.5155 16.6471 11.7819 16.6471 12.1115C16.6471 12.441 16.38 12.7074 16.0512 12.7074H12.6067V16.3135C12.6067 16.643 12.3396 16.9094 12.0108 16.9094C11.6819 16.9094 11.4148 16.643 11.4148 16.3135V12.7074H7.97035C7.64148 12.7074 7.37439 12.441 7.37439 12.1115C7.37439 11.7819 7.64148 11.5155 7.97035 11.5155H11.4148V8.23268Z" fill="#6F7DFF" />
                </svg>

                  )
            }
            {
              checked ? 'Quitar' : 'Agregar'
            }
          </button>
        </div>
        <div className={`${expanded ? '' : 'coverage-item__description-container--hidden'} coverage-item__description-container`}>
          <p>
            {item.description}
          </p>
        </div>
        <div className='coverage-item__mobile-button-container'>
          <button onClick={handleExpand} className={`coverage-item__mobile-button ${expanded ? 'coverage-item__mobile-button--expanded' : ''}`}>
            {
              expanded ? 'Ver menos' : 'Ver más'
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05837 14.4507C4.65929 14.0405 4.65739 13.3808 5.0541 12.9683L10.2469 7.5687C10.6538 7.14556 11.324 7.14363 11.7334 7.56441L16.9572 12.934C17.3563 13.3442 17.3582 14.0039 16.9615 14.4164C16.5545 14.8396 15.8844 14.8415 15.475 14.4207L10.9966 9.81738L6.54486 14.4464C6.13792 14.8696 5.46774 14.8715 5.05837 14.4507Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      <div className='coverage-item__button-container'>
        <button onClick={handleExpand} className={`coverage-item__button ${expanded ? 'coverage-item__button--expanded' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05837 14.4507C4.65929 14.0405 4.65739 13.3808 5.0541 12.9683L10.2469 7.5687C10.6538 7.14556 11.324 7.14363 11.7334 7.56441L16.9572 12.934C17.3563 13.3442 17.3582 14.0039 16.9615 14.4164C16.5545 14.8396 15.8844 14.8415 15.475 14.4207L10.9966 9.81738L6.54486 14.4464C6.13792 14.8696 5.46774 14.8715 5.05837 14.4507Z" fill="#FF1C44" />
          </svg>
        </button>
      </div>
    </div>
  )
}
