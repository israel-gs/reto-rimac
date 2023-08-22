import { useState } from 'react'
import './index.css'

interface Tab {
  title: string
  content: React.ReactNode
}

interface TabsProps {
  initialTab: number
  tabs: Tab[]
}

export default function Tabs ({ initialTab, tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(initialTab)

  const handleTabChange = (index: number) => {
    setCurrentTab(index)
  }

  return (
    <div className="tabs">
      <div className="tabs__tab-container">
        <div className='tabs__bottom-border'></div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabs__tab-button ${currentTab === index ? 'tabs__tab-button--active' : ''}`}
            onClick={() => { handleTabChange(index) }}
          >
            <div className="tabs__tab-text">
              <span>{tab.title}</span>
            </div>
            <div className={'tabs__button-indicator'}></div>
          </button>
        ))}
      </div>
      <div className="">
        {tabs[currentTab].content}
      </div>
    </div>
  )
}
