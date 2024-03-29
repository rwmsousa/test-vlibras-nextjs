import styles from '@/styles/Home.module.scss'
import AccToolbar from '../components/AccToolbar'

export default function Home() {

  return (
    <>
      <AccToolbar />
      <div className={ styles.section }>
        <h1><a href="">Teste de ferramentas de acessibilidade - NextJS</a></h1>
        <h1>Teste h1</h1>
        <h2>Teste h2</h2>
        <p>Libras é a sigla da Língua Brasileira de Sinais, uma língua de modalidade gestual-visual onde é possível se comunicar através de gestos, expressões faciais e corporais. É reconhecida como meio legal de comunicação e expressão desde 24 de Abril de 2002, através da Lei nº 10.436. A Libras é muito utilizada na comunicação com pessoas surdas, sendo, portanto, uma importante ferramenta de inclusão social.</p>
        <button>Button</button>
        <a href="">LINK</a>
        <div>Div1</div>
        <div>Div2
          <div>Div interna</div>
        </div>
        <img src='/img/a11y-symbol.webp'></img>
      </div>
    </>
  )
}
