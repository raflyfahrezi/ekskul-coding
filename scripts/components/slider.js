class Carousel extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render(h) {
    this.innerHTML = `
        <div style="width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20;" class="text-center">
          <div class="wrapper">
            <ul class="carousel">
                <li class="card" style="background-image: url('../assets/image-1.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-3.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-2.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-4.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-8.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-5.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-6.jpeg');"></li>
                <li class="card" style="background-image: url('../assets/image-7.jpeg');"></li>
            </ul>
          </div>
        </div>
    `
  }
}

customElements.define('my-carousel', Carousel)
