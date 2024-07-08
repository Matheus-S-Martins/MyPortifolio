import styles from './styles.module.css'

function Home() {

  return (
    <div className={styles.container_page}>
      <div className={styles.container_presentation}>
        <h1>Desenvlvedor web</h1>
        <h2>Matheus Da Silva Martins</h2>
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como</p>
      </div>
      <div>
        <img className={styles.avatar} src="https://i.pinimg.com/originals/d5/4d/49/d54d49aff6b7ec1257928646dac88b0f.jpg" alt="Avatar" />
      </div>
    </div>
  )
}

export default Home