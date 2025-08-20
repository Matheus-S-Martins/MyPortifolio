import styles from './styles.module.css'

function NavBar() {

  return (
    <div className={styles.container_component}>
        <div className={styles.box_nav_bar}>
          <div className={styles.module}>
            <p>
              Inicio            
            </p>
          </div>
          <div className={styles.module}>
            <p>
              Sobre Mim
            </p>
          </div>
          {/* <div className={styles.module}>
            <p>
              Meu Trabalho
            </p>
          </div> */}
          <div className={styles.module}>
            <p>
              Contato
            </p>
          </div>
        </div>
    </div>
  )
}

export default NavBar