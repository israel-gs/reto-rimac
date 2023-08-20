import Header from '@components/header'
import Form from './components/form/index'
import Hero from './components/hero'
import './index.css'

export default function Home () {
  return (
    <>
      <Header />
      <div className='home__container'>
        <div className='home__left'>
          <Hero />
        </div>
        <div className='home__right'>
          <Form />
        </div>
      </div>
    </>
  )
}
