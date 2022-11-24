import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(83) 98657-0820</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>lucas.araujo1999@outlook.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>João Pessoa - PB</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer