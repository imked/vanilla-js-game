import Entity from './Entity'
export default class Hunter extends Entity {
  //damit erhält Hunter alle methoden die wir in Entity haben
  position = window.innerWidth / 2 // damit wir in der Mitte starten
  speed = 0 // new
  constructor(config) {
    super() //ruft den Constructor von Entity auf
    const { onShoot } = config
    this.onShoot = onShoot
    this.el = this.render('hunter')
    this.setupMovement()
  }

  update() {
    this.position += this.speed
    this.el.style.left = this.position + 'px'
  }

  setupMovement() {
    document.body.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.speed = -10
      } else if (event.key === 'ArrowRight') {
        this.speed = 10
      } else if (event.key === ' ') {
        this.onShoot(this.position) // Das ist die Pos. von dem Hunter, die an die Bullet übergeben wird.
      }
    })

    document.body.addEventListener('keyup', event => {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.speed = 0
      }
    })
  }
}
