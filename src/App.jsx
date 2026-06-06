import { useState } from 'react'
import Exercicio01 from './exercicios/Exercicio01'
import Exercicio02 from './exercicios/Exercicio02'
import Exercicio03 from './exercicios/Exercicio03'
import Exercicio04 from './exercicios/Exercicio04'
import Exercicio05 from './exercicios/Exercicio05'
import Exercicio06 from './exercicios/Exercicio06'
import Exercicio07 from './exercicios/Exercicio07'
import Exercicio08 from './exercicios/Exercicio08'
import Exercicio09 from './exercicios/Exercicio09'
import Exercicio10 from './exercicios/Exercicio10'
import Exercicio11 from './exercicios/Exercicio11'
import Exercicio12 from './exercicios/Exercicio12'
import Exercicio13 from './exercicios/Exercicio13'
import Exercicio14 from './exercicios/Exercicio14'
import Exercicio15 from './exercicios/Exercicio15'

const exercicios = [
  { num: 1,  titulo: 'Array de frutas',             sub: 'frutas[0]',                    componente: <Exercicio01 /> },
  { num: 2,  titulo: 'Mostrar duas frutas',          sub: 'frutas[1] e frutas[2]',         componente: <Exercicio02 /> },
  { num: 3,  titulo: 'Array de números',             sub: 'numeros[0], numeros[1]',        componente: <Exercicio03 /> },
  { num: 4,  titulo: 'Soma do array',                sub: 'numeros[0+1+2]',                componente: <Exercicio04 /> },
  { num: 5,  titulo: 'Array de nomes',               sub: 'nomes[0], [1], [2]',            componente: <Exercicio05 /> },
  { num: 6,  titulo: 'Cidade favorita',              sub: 'cidades[1]',                    componente: <Exercicio06 /> },
  { num: 7,  titulo: 'Array de preços',              sub: 'precos[0], precos[1]',          componente: <Exercicio07 /> },
  { num: 8,  titulo: 'Lista de cores',               sub: 'cores[0], [1] e [2]',           componente: <Exercicio08 /> },
  { num: 9,  titulo: 'Soma de idades',               sub: 'idades[0] + idades[1]',         componente: <Exercicio09 /> },
  { num: 10, titulo: 'Jogo favorito',                sub: 'jogos[2]',                      componente: <Exercicio10 /> },
  { num: 11, titulo: 'Comida do dia',                sub: 'comidas[0]',                    componente: <Exercicio11 /> },
  { num: 12, titulo: 'Tamanho do array',             sub: 'filmes.length',                 componente: <Exercicio12 /> },
  { num: 13, titulo: 'Primeiro e último item',       sub: 'linguagens[length - 1]',        componente: <Exercicio13 /> },
  { num: 14, titulo: 'Soma de três valores',         sub: 'valores[0+1+2]',                componente: <Exercicio14 /> },
  { num: 15, titulo: 'Mini lista de tarefas',        sub: 'tarefas[0], [1], [2]',          componente: <Exercicio15 /> },
]

function App() {
  const [ativo, setAtivo] = useState(0)
  const ex = exercicios[ativo]

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo-badge">[ ]</span>
          <div>
            <p className="logo-title">Nível 2</p>
            <p className="logo-sub">Arrays · ReactJS</p>
          </div>
        </div>
        <nav className="nav-list">
          {exercicios.map((e, i) => (
            <button
              key={e.num}
              className={`nav-item ${ativo === i ? 'nav-item--active' : ''}`}
              onClick={() => setAtivo(i)}
            >
              <span className="nav-num">{String(e.num).padStart(2, '0')}</span>
              <div className="nav-info">
                <span className="nav-label">{e.titulo}</span>
                <span className="nav-hint">{e.sub}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <div className="content-inner">
          <div className="ex-header">
            <div className="ex-tags">
              <span className="ex-badge">Exercício {String(ex.num).padStart(2, '0')}</span>
              <span className="ex-tag-array">Array</span>
            </div>
            <h1 className="ex-title">{ex.titulo}</h1>
            <p className="ex-hint-code">{ex.sub}</p>
          </div>

          <div className="ex-output">
            <div className="output-topbar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="output-label">saída do componente</span>
            </div>
            <div className="output-body">
              {ex.componente}
            </div>
          </div>

          <div className="ex-nav">
            <button
              className="btn-nav"
              disabled={ativo === 0}
              onClick={() => setAtivo(a => a - 1)}
            >
              ← Anterior
            </button>
            <div className="progress-dots">
              {exercicios.map((_, i) => (
                <span
                  key={i}
                  className={`dot-nav ${i === ativo ? 'dot-nav--active' : ''}`}
                  onClick={() => setAtivo(i)}
                />
              ))}
            </div>
            <button
              className="btn-nav"
              disabled={ativo === exercicios.length - 1}
              onClick={() => setAtivo(a => a + 1)}
            >
              Próximo →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
