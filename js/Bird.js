import Entity from './Entity'
export default class Bird extends Entity {
  defaultConfig = {
    color: 'white',
    speed: 1 + Math.random() * 8,
    position: { x: 0, y: 100 + Math.random() * 200 },
  }

  constructor(config) {
    super()
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, onRemove, onClick, onEscape } = config

    this.onClick = onClick
    this.color = color
    this.position = position
    this.onRemove = onRemove
    this.onEscape = onEscape
    this.speed = speed
    this.el = this.render('bird', { background: this.color })
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      this.el.classList.add('hit')
      this.onClick()
      this.remove()
    })
  }

  update() {
    this.position.x += this.speed
    if (this.position.x > window.innerWidth) {
      this.remove()
      this.onEscape()
    } else {
      this.el.style.left = this.position.x + 'px'
      this.el.style.top =
        this.position.y + Math.sin(this.position.x / 100) * 100 + 'px'
    }
  }
}
