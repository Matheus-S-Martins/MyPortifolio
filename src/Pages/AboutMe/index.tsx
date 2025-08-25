import styles from './styles.module.css'
import code1 from '../../assets/code1.jpg';


function AboutMe() {

  return (
    <div className={styles.container_about_me}>
      <div className={styles.container_image}>
        <img className={styles.image_abaout_me} src={code1} alt="AboutMe" />
      </div>
      <div className={styles.container_info}>
        <div className={styles.container_presentation}>
          <h1>Sobre Mim</h1>
          <p>Sou formado em ciência da computação desde 2023 pela Universidade Paulista (UNIP) e comecei minha carreira de desenvolvedor em 2018.</p>

          <p>Já tive a oportunidade de participar de projetos desafiadores, como o desenvolvimento de uma <strong>rede social para geração de artes com IA</strong>, que contou com integrações avançadas usando <strong>React.js, Docker, ChatGPT e Leonardo AI</strong>, alcançando mais de <strong>1.000 usuários ativos</strong>.</p>

          <p>Minha experiência também inclui trabalhos com <strong>Moodle, WordPress, BI, PHP, MySQL, C#, Xamarin e SQL Server</strong>, sempre buscando unir boas práticas, usabilidade e desempenho.</p>

          <p>Sou movido por aprendizado constante e gosto de explorar novas tecnologias para criar soluções inovadoras. Além disso, valorizo muito o trabalho em equipe, a troca de conhecimento e o impacto que a tecnologia pode ter na vida das pessoas.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
