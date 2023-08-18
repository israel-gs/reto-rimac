import HeroDesktop from '../../../../assets/hero_desktop.svg'
import HeroMobile from '../../../../assets/hero_mobile.svg'
import './index.css'

export default function Hero () {
  return (
    <section className="hero__container">
      <img className="hero__image hidden md:inline" src={HeroDesktop} alt="hero" />
      <div className='hero__text-container'>
        <p className="hero__new-tag">¡NUEVO!</p>
        <h1 className="hero__title">
          Seguro <span className='hero__title--desktop-red'>Vehicular</span> <span className='hero__title--always-red'>Tracking</span>
        </h1>
        <p className="hero__subtitle">Cuentanos donde le haras seguimiento a tu seguro</p>
      </div>
      <img className="hero__image md:hidden" src={HeroMobile} alt="hero" />
    </section>
  )
}
