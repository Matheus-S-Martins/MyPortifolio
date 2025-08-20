import styles from './styles.module.css'


function Contact() {

  const handleSendEmail = (e) =>{
    e.preventDefault();

    console.log('teste')
  }

  return (
    <div className={styles.container_contact}>
      <h1>Entre em contato comigo</h1>
      <div className={styles.container_content}>
        <form action="" className={styles.formulario}>
          <div className={styles.formulario_camp}>
            <p>Nome:</p>
            <input type="text"  placeholder='Digite Seu Nome'/>
          </div>

          <div className={styles.formulario_camp}>
            <p>Email</p>
            <input type="text" placeholder='Digite Seu Email' />
          </div>

          <div className={styles.formulario_camp}>
            <p>Motivo do contato</p>
            <textarea name="" id="" className={styles.textarea}></textarea>
          </div>

          <button className={styles.button_send} onClick={(e) => handleSendEmail(e)}>
            Enviar
          </button>
        </form>


        <div>
        <p>
        Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores.
        Se você deseja conversar sobre tecnologia, desenvolvimento de software ou possíveis parcerias, entre em contato:
        </p>

        </div>
      </div>
    </div>
  )
}

export default Contact
