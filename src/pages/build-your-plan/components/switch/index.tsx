import './index.css'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch ({ checked, onChange }: SwitchProps) {
  return (
    <div className='switch__container'>
      <label className='switch'>
        <input type='checkbox' checked={checked} onChange={() => { onChange(!checked) }} />
        <span className='slider round' />
      </label>
    </div>
  )
}
