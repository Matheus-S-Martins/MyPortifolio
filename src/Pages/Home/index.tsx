import styles from './styles.module.css'

function Home() {

  const downloadPDF = async (url, filename = "arquivo.pdf") => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/pdf",
        },
      });
  
      if (!response.ok) {
        throw new Error("Erro ao baixar o arquivo");
      }
  
      const blob = await response.blob();
      const urlBlob = window.URL.createObjectURL(new Blob([blob]));
  
      const link = document.createElement("a");
      link.href = urlBlob;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
  
      // Limpa depois do download
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(urlBlob);
    } catch (error) {
      console.error("Erro no download:", error);
    }
  };

  const handleDownload = () => {
    downloadPDF("src/assets/files/Currículo_Matheus.pdf", "Currículo_Matheus.pdf");
  };

  return (
    <div className={styles.container_page}>
      <div className={styles.container_presentation}>
        <h1>Desenvlvedor web</h1>
        <h2>Matheus Da Silva Martins</h2>
        <p>Olá! Meu nome é Matheus Martins e sou apaixonado por tecnologia e desenvolvimento de software. Atualmente atuo como <strong>Desenvolvedor Web</strong>, com foco em <strong>front-end</strong> e na criação de interfaces modernas, intuitivas e integradas com <strong>inteligência artificial</strong>.</p>

        <div>
          <div className={styles.button_download} onClick={handleDownload}>
            Download CV
          </div>
        </div>
      </div>
      <div>
        <img className={styles.avatar} src="https://i.pinimg.com/originals/d5/4d/49/d54d49aff6b7ec1257928646dac88b0f.jpg" alt="Avatar" />
      </div>
    </div>
  )
}

export default Home