import styles from './styles.module.css'


function MyWork() {

  return (
    <div className={styles.container_myWork}>
      <h1>Meu Trabalho</h1>

      <p>Alguns projetos que realizei</p>

      <div className={styles.container_projects}>
        <div className={styles.card_project}>
          <img src="https://cbpce.org.br/wp-content/uploads/2021/02/4-Saude-mental-e-saude-organizacional-Onde-esses-caminhos-se-cruzam.png" alt="dev" />

          <div className={styles.box_info_project}>
            <h2>Titulo do projeto</h2>

            <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork
