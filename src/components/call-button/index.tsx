import './index.css'

export default function CallButton () {
  return (
    <div className="call-button__container">
      <p className='hidden md:inline'>¿Tienes alguna duda?</p>
      <button className="call-button__button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.82997 13.3334C8.05561 10.7868 7.40608 9.33539 9.03955 8.18605C10.4444 7.19744 10.3514 7.08734 9.08794 4.63343C7.92049 2.36623 7.43417 1.77996 5.82702 3.08199C2.25275 5.57822 3.2041 9.62914 7.09173 15.2089C10.9794 20.7888 14.5852 23.0744 18.0462 20.62C19.8132 19.5475 19.4315 18.8877 17.7108 17.01C15.8484 14.9776 15.7592 14.8768 14.3781 15.8488C12.7687 16.9813 11.6043 15.88 9.82997 13.3334Z" fill="#6464FA" />
        </svg>
        <span className='md:hidden'>Llámanos</span>
        <span className='hidden md:inline'>(01) 411 6001</span>
      </button>
    </div>
  )
}
