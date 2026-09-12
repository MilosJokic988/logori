import Map from './Map'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span>✦</span>
          <div>
            <h1>СТРАТИШТА</h1>
            <p>Логори • стратишта • јаме</p>
          </div>
        </div>

        <nav>
          <a href="#mapa">Мапа</a>
          <a href="#lokacije">Локације</a>
          <a href="#izvori">Извори</a>
          <a href="#projekat">О пројекту</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            ДИГИТАЛНИ МЕМОРИЈАЛНИ РЕГИСТАР
          </p>

          <h2>
            Да се
            <br />
            <span>Не заборави.</span>
          </h2>

          <p className="description">
            Интерактивна карта логора, стратишта и јама.
            Историјски подаци, сведочанства, документа и извори
            на једном месту.
          </p>

          <button
            className="main-button"
            onClick={() => {
              document
                .getElementById('mapa')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            ИСТРАЖИ МАПУ <span>→</span>
          </button>
        </div>

        <div className="map-preview" id="mapa">
          <Map />
        </div>
      </main>

      <section className="intro" id="lokacije">
        <div>
          <span className="section-number">01</span>
          <h3>Места која памтимо.</h3>
        </div>

        <p>
          Пројекат обједињује документоване локације страдања
          и представља их кроз историјске изворе, архивску грађу
          и сведочанства.
        </p>
      </section>

      <section className="categories">
        <div className="category">
          <span>01</span>
          ЛОГОРИ
        </div>

        <div className="category">
          <span>02</span>
          СТРАТИШТА
        </div>

        <div className="category">
          <span>03</span>
          ЈАМЕ
        </div>

        <div className="category">
          <span>04</span>
          ДЕЧЈИ ЛОГОРИ
        </div>
      </section>

      <section className="sources" id="izvori">
        <div>
          <span className="section-number">02</span>
          <h3>Документовано.</h3>
        </div>

        <p>
          Свака локација биће представљена уз проверљиве историјске
          изворе, архивску грађу и литературу.
        </p>
      </section>

      <footer id="projekat">
        <p>СТРАТИШТА</p>
        <span>Не да се мрзи. Већ да се памти.</span>
      </footer>
    </div>
  )
}

export default App