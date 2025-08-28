import styles from './styles.module.css'
import perfil from '../../assets/images/perfil.jpg';

function Home() {

  const downloadPdf = () => {
    try {
      const link = document.createElement("a");
      link.href = "/files/curriculo.pdf"; // caminho relativo ao public/
      link.download = "Curriculo_Matheus.pdf";    // nome do arquivo baixado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro no download:", error);
    }
  };

  return (
    <div className={styles.container_page} id="inicio">
      <div className={styles.container_presentation}>
        <h1>Desenvlvedor web</h1>
        <h2>Matheus Da Silva Martins</h2>
        <p style={{maxWidth: '690px'}}>Olá! Meu nome é Matheus Martins e sou apaixonado por tecnologia e desenvolvimento de software. Atualmente atuo como <strong>Desenvolvedor Web</strong>, com foco em <strong>front-end</strong> e na criação de interfaces modernas, intuitivas e integradas com <strong>inteligência artificial</strong>.</p>

        <div>
          <div className={styles.button_download} onClick={downloadPdf}>
            Download CV
          </div>
        </div>
      </div>
      <div>
        <img className={styles.avatar} src={perfil} alt="Avatar" />
      </div>
    </div>
  )
}

export default Home