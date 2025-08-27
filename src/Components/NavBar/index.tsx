import styles from './styles.module.css'

function NavBar() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.container_component}>
        <div className={styles.box_nav_bar}>
          <div className={styles.module} onClick={() => handleScroll("inicio")}>
            <p>
              Inicio            
            </p>
          </div>
          <div className={styles.module} onClick={() => handleScroll("sobre")}>
            <p>
              Sobre Mim
            </p>
          </div>
          {/* <div className={styles.module}>
            <p>
              Meu Trabalho
            </p>
          </div> */}
          <div className={styles.module} onClick={() => handleScroll("contato")}>
            <p>
              Contato
            </p>
          </div>
        </div>
    </div>
  )
}

export default NavBar