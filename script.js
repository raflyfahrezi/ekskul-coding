import './scripts/components/slider.js'
import sliderScript from './scripts/slider.js'

document.addEventListener('DOMContentLoaded', () => {
  sliderScript()

  const backsoundAudio = document.getElementById('backsoundAudio')
  const buttonplay = document.getElementById('buttonplay')

  buttonplay.addEventListener('click', () => {
    backsoundAudio.play()
  })

  const c = setTimeout(() => {
    document.body.classList.remove('not-loaded')
    clearTimeout(c)
  }, 1000)
})
