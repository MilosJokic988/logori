import { useState } from 'react'

function PhotoSlider({ photos }) {
  const [current, setCurrent] = useState(0)

  if (!photos || photos.length === 0) {
    return null
  }

  const nextPhoto = () => {
    setCurrent((current + 1) % photos.length)
  }

  const previousPhoto = () => {
    setCurrent(
      (current - 1 + photos.length) % photos.length
    )
  }

  return (
    <div className="photo-slider">

      <div className="photo-slider-image">

        <img
          src={photos[current].image}
          alt={photos[current].caption}
        />

        <div className="photo-slider-label">
          АРХИВСКА ГРАЂА
        </div>

        <button
          className="photo-slider-arrow photo-slider-left"
          onClick={previousPhoto}
        >
          ←
        </button>

        <button
          className="photo-slider-arrow photo-slider-right"
          onClick={nextPhoto}
        >
          →
        </button>

      </div>

      <div className="photo-slider-info">

        <p>
          {photos[current].caption}
        </p>

        <span>
          Извор: {photos[current].source}
        </span>

      </div>

      <div className="photo-slider-dots">

        {photos.map((_, index) => (
          <button
            key={index}
            className={
              index === current
                ? 'active'
                : ''
            }
            onClick={() => setCurrent(index)}
          />
        ))}

      </div>

    </div>
  )
}

export default PhotoSlider