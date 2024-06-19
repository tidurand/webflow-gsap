import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const checkbox = document.getElementById('markers') as HTMLInputElement

checkbox?.addEventListener('change', function () {
  const markers = this.checked

  ScrollTrigger.getAll().forEach((st) => {
    st.kill()
    if (st.trigger) gsap.set(st.trigger, { clearProps: 'all' })
  })
  createScrollAnimations(markers)
})

export function createScrollAnimations(markers: boolean = false) {
  const baseScrollTriggerConfig = {
    start: 'top 70%',
    end: 'bottom 30%',
    toggleActions: 'restart pause reverse pause',
    markers: markers,
  }

  const baseAnimationConfig = {
    x: '20rem',
    duration: 1,
    ease: 'power2.inOut',
    backgroundColor: 'blue',
  }

  // Animations
  gsap.to('#cube_scroll', {
    scrollTrigger: {
      trigger: '#cube_scroll',

      ...baseScrollTriggerConfig,
    },
    ...baseAnimationConfig,
  })

  gsap.to('#cube_scrub', {
    scrollTrigger: {
      trigger: '#cube_scrub',
      scrub: 3,

      ...baseScrollTriggerConfig,
    },
    ...baseAnimationConfig,
  })

  gsap.to('#cube_pin', {
    scrollTrigger: {
      trigger: '#cube_pin',
      scrub: true,
      pin: true,

      ...baseScrollTriggerConfig,
    },
    ...baseAnimationConfig,
  })

  gsap.to('#cube_scroll_callbacks', {
    scrollTrigger: {
      trigger: '#cube_scroll_callbacks',

      onEnter: () =>
        gsap.to('#cube_scroll_callbacks', { backgroundColor: 'red' }),
      onLeave: () =>
        gsap.to('#cube_scroll_callbacks', { backgroundColor: 'blue' }),
      onEnterBack: () =>
        gsap.to('#cube_scroll_callbacks', { backgroundColor: 'green' }),
      onLeaveBack: () =>
        gsap.to('#cube_scroll_callbacks', { backgroundColor: 'yellow' }),

      ...baseScrollTriggerConfig,
    },
  })
}
