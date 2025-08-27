import { useState } from 'react';
import styles from './styles.module.css'
import emailjs from '@emailjs/browser'
import Loading from '../../Components/Loading';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendEmail = (e) =>{
    e.preventDefault();
    setLoading(true)

    if(name === '' || email === '' || message === ''){
      alert("Preencha todos os campos")
      setLoading(false)
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_i5m16gn","template_tifuqsu",templateParams, "_vMFkUmu0uZldmfSq")
    .then((response) => {
      alert("Email enviado com sucesso.")
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO", err)
    })
    setLoading(false)
  }

  return (
    <div className={styles.container_contact} id="contato">
      <Loading enable={loading} />
      <h1>Entre em contato comigo</h1>
      <div className={styles.container_content}>
        <form action="" className={styles.formulario} onSubmit={(e) => handleSendEmail(e)}>
          <div className={styles.formulario_camp}>
            <p>Nome:</p>
            <input 
              type="text"  
              placeholder='Digite Seu Nome' 
              onChange={(e) => setName(e.target.value)}
              value={name}
              />
          </div>

          <div className={styles.formulario_camp}>
            <p>Email</p>
            <input type="text" placeholder='Digite Seu Email' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.formulario_camp}>
            <p>Motivo do contato</p>
            <textarea name="" id="" className={styles.textarea}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>

          <button className={styles.button_send} onClick={(e) => handleSendEmail(e)}>
            Enviar
          </button>
        </form>


        <div>
          <h3>
            Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores.
            Se você deseja conversar sobre tecnologia, desenvolvimento de software ou possíveis parcerias, entre em contato:
          </h3>

        </div>
      </div>
    </div>
  )
}

export default Contact
