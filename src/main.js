import './style.css'

const IMG = 'https://html.awaikenthemes.com/petronus/images'

// Mobile menu
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden')
  menuBtn.setAttribute('aria-expanded', mobileMenu?.classList.contains('hidden') ? 'false' : 'true')
})

// Sticky header
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
  header?.classList.toggle('shadow-md', window.scrollY > 40)
})

// Portfolio filter
const filterBtns = document.querySelectorAll('[data-filter]')
const projectItems = document.querySelectorAll('[data-category]')

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const filter = btn.dataset.filter

    filterBtns.forEach((b) => {
      b.classList.remove('bg-accent', 'text-white')
      b.classList.add('bg-white', 'text-primary')
    })
    btn.classList.add('bg-accent', 'text-white')
    btn.classList.remove('bg-white', 'text-primary')

    projectItems.forEach((item) => {
      const show = filter === 'all' || item.dataset.category === filter
      item.classList.toggle('hidden', !show)
    })
  })
})

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-trigger')
  trigger?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')
    document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'))
    if (!isOpen) item.classList.add('open')
  })
})

// Testimonials slider
const track = document.getElementById('testimonial-track')
const dots = document.querySelectorAll('.testimonial-dot')
let currentSlide = 0
const totalSlides = dots.length

function goToSlide(index) {
  currentSlide = index
  track?.style.setProperty('transform', `translateX(-${index * 100}%)`)
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index))
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)))

if (totalSlides > 1) {
  setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000)
}

// Services horizontal scroll buttons
const servicesTrack = document.getElementById('services-track')
document.getElementById('services-prev')?.addEventListener('click', () => {
  servicesTrack?.scrollBy({ left: -340, behavior: 'smooth' })
})
document.getElementById('services-next')?.addEventListener('click', () => {
  servicesTrack?.scrollBy({ left: 340, behavior: 'smooth' })
})

// Export IMG for potential dynamic use
export { IMG }
