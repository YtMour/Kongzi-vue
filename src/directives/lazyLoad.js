export default {
  mounted(el) {
    function loadImage() {
      const imageElement = Array.from(el.children).find((el) => el.nodeName === 'IMG')
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          el.classList.add('loaded')
          imageElement.classList.add('image-loaded')
        })
        imageElement.addEventListener('error', () => {
          console.error('Image load failed:', imageElement.dataset.src)
          el.classList.add('error')
        })
        imageElement.src = imageElement.dataset.src
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
        rootMargin: '50px'
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }

    if (window['IntersectionObserver']) {
      createObserver()
    } else {
      loadImage()
    }
  },

  unmounted(el) {
    const imageElement = Array.from(el.children).find((el) => el.nodeName === 'IMG')
    if (imageElement) {
      imageElement.removeEventListener('load', () => {})
      imageElement.removeEventListener('error', () => {})
    }
  }
}
