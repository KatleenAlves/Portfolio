const typewriter = document.getElementById('typewriter')
const text = typewriter.innerHTML
let index = 0

function type() {
  typewriter.innerHTML = text.slice(0, index++)
  if (index > text.length) {
    index = 0
  }
}

setInterval(type, 100)

const sections = document.querySelectorAll('.animate-on-scroll')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fadeInUp')
    }
  })
})

sections.forEach(section => {
  observer.observe(section)
})
