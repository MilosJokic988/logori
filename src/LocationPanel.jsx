import PhotoSlider from './PhotoSlider'

function LocationPanel({ location, onClose, onShowOnMap }) {
  if (!location) return null

  return (
    <div className="location-panel">

      {/* ЗАТВАРАЊЕ */}
      <button
        className="location-panel-close"
        onClick={onClose}
        aria-label="Затвори"
      >
        ×
      </button>

      {/* ФОТОГРАФИЈЕ */}
      <PhotoSlider photos={location.photos} />

      {/* ОСНОВНИ ПОДАЦИ */}
      <div className="location-panel-category">
        {location.category}
      </div>

      <h2>{location.name}</h2>

      <div className="location-meta">
        <span>ПЕРИОД</span>
        <strong>{location.period}</strong>

        <span>ЛОКАЦИЈА</span>
        <strong>{location.location}</strong>
      </div>

      <div className="location-panel-line"></div>

      {/* БРОЈ ЖРТАВА */}
      {location.victims?.total && (
        <div className="main-victim-stat">
          <span>ПОИМЕНИЧНО ДОКУМЕНТОВАНЕ ЖРТВЕ</span>

          <strong>{location.victims.total}</strong>

          <p>
            {location.victimNote ||
              'Подаци су наведени према доступним историјским изворима.'}
          </p>
        </div>
      )}

      {/* УВОДНИ ОПИС */}
      {location.description?.map((text, index) => (
        <p
          className="location-panel-lead"
          key={index}
        >
          {text}
        </p>
      ))}

      {/* 01 — ИСТОРИЈСКИ ПРЕГЛЕД */}
      {location.history?.length > 0 && (
        <section className="panel-section">
          <div className="panel-section-number">01</div>

          <div>
            <h3>Историјски преглед</h3>

            {location.history.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* 02 — СТРАДАЊЕ И БРОЈ ЖРТАВА */}
      {location.victims?.total && (
        <section className="panel-section">
          <div className="panel-section-number">02</div>

          <div>
            <h3>Страдање и број жртава</h3>

            <p>
              Подаци о жртвама приказани су на основу
              доступне документоване грађе и наведених извора.
            </p>

            <div className="victim-stat-grid">

              {location.victims.total && (
                <div className="victim-stat">
                  <span>УКУПНО</span>
                  <strong>{location.victims.total}</strong>
                </div>
              )}

              {location.victims.men && (
                <div className="victim-stat">
                  <span>МУШКАРЦИ</span>
                  <strong>{location.victims.men}</strong>
                </div>
              )}

              {location.victims.women && (
                <div className="victim-stat">
                  <span>ЖЕНЕ</span>
                  <strong>{location.victims.women}</strong>
                </div>
              )}

              {location.victims.children && (
                <div className="victim-stat">
                  <span>ДЕЦА ДО 14 Г.</span>
                  <strong>{location.victims.children}</strong>
                </div>
              )}

            </div>

            {location.victimNote && (
              <div className="fact-box">
                <span>ВАЖНА НАПОМЕНА</span>

                <strong>
                  {location.victimNote}
                </strong>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 03 — НАЦИОНАЛНА СТРУКТУРА */}
      {location.nationalities?.length > 0 && (
        <section className="panel-section">
          <div className="panel-section-number">03</div>

          <div>
            <h3>Поименично документоване жртве</h3>

            <p>
              Према доступним подацима, структура
              по националној припадности обухвата:
            </p>

            <div className="nationality-list">
              {location.nationalities.map((item, index) => (
                <div key={index}>
                  <span>{item.name}</span>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 — СВЕДОЧАНСТВА
          Приказује се само ако стварно постоје
          у locations.js */}
      {location.testimonies?.length > 0 && (
        <section className="panel-section">
          <div className="panel-section-number">04</div>

          <div>
            <h3>Сведочанства</h3>

            {location.testimonies.map((item, index) => (
              <div
                className="testimony-card"
                key={index}
              >
                <blockquote>
                  „{item.text}“
                </blockquote>

                <span className="quote-source">
                  {item.source}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* АРХИВСКА ГРАЂА */}
      <section className="panel-section">
        <div className="panel-section-number">
          {location.testimonies?.length > 0 ? '05' : '04'}
        </div>

        <div>
          <h3>Архивска грађа</h3>

          <p>
            Фотографије и друга документа у регистру
            представљена су уз податке о њиховом извору
            када су они доступни.
          </p>

          <div className="document-card">
            <div className="document-icon">▣</div>

            <div>
              <strong>Архивска документација</strong>

              <span>
                Фотографије • документи • карте • записи
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* МЕСТО ДАНАС */}
      {location.today?.length > 0 && (
        <section className="panel-section">
          <div className="panel-section-number">
            {location.testimonies?.length > 0 ? '06' : '05'}
          </div>

          <div>
            <h3>Место данас</h3>

            {location.today.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* КООРДИНАТЕ */}
      <section className="coordinates-box">

        <div>
          <span>ГЕОГРАФСКА ШИРИНА</span>

          <strong>
            {location.coordinates[1].toFixed(5)}° N
          </strong>
        </div>

        <div>
          <span>ГЕОГРАФСКА ДУЖИНА</span>

          <strong>
            {location.coordinates[0].toFixed(5)}° E
          </strong>
        </div>

      </section>

      {/* ПРИКАЖИ НА МАПИ */}
      <button
        className="panel-map-button"
        onClick={onShowOnMap}
      >
        📍 ПРИКАЖИ ЛОКАЦИЈУ НА МАПИ
      </button>

      {/* ИЗВОРИ */}
      {location.sources?.length > 0 && (
        <section className="sources-section">

          <div className="panel-section-number">
            {location.testimonies?.length > 0
              ? '07'
              : '06'}
          </div>

          <div>
            <h3>Извори и литература</h3>

            <ol>
              {location.sources.map((source, index) => (
                <li key={index}>
                  {source}
                </li>
              ))}
            </ol>
          </div>

        </section>
      )}

      {/* ФУТЕР */}
      <div className="location-panel-footer">
        <span>СТРАТИШТА</span>

        <small>
          Не да се мрзи. Већ да се памти.
        </small>
      </div>

    </div>
  )
}

export default LocationPanel