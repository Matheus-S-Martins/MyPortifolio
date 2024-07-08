import styles from './styles.module.css'


function AboutMe() {

  return (
    <div className={styles.container_about_me}>
      <div className={styles.container_image}>
        <img className={styles.image_abaout_me} src="src\assets\code1.jpg" alt="AboutMe" />
      </div>
      <div className={styles.container_info}>
        <div className={styles.container_presentation}>
          <h1>Sobre Mim</h1>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
