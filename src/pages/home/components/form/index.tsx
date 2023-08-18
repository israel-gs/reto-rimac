import DocumentInput from '../document-input'
import TermsCheck from '../terms-check'
import './index.css'

export default function Form () {
  return (
    <section className="form">
      <h2 className='form__title'>Déjanos tus datos</h2>
      <form>
        <div className="form-group">
          <DocumentInput />
        </div>
        <div className="form-group">
          <input className="input w-full" type="text" id="phone" />
          <label htmlFor="phone" className="input-placeholder">Celular</label>
        </div>
        <div className="form-group">
          <input className="input w-full" type="text" id="plate" />
          <label htmlFor="plate" className="input-placeholder">Placa</label>
        </div>
        <TermsCheck />
        <button className="primary-button w-full" type="submit">Cotízalo</button>
      </form>
    </section>
  )
}
