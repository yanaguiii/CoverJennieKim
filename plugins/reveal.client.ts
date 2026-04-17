export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
  )

  const attach = () => {
    document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => observer.observe(el))
  }

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', () => {
    setTimeout(attach, 50)
  })

  window.addEventListener('load', attach)
  setTimeout(attach, 200)
})
