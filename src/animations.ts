import gsap from 'gsap'

export const to_animation = gsap.to('#cube_to', {
  x: '10rem',
  duration: 1,
  ease: 'power2.inOut',
  backgroundColor: 'blue',
  paused: true,
})

export const from_animation = gsap.from('#cube_from', {
  x: '10rem',
  duration: 1,
  ease: 'power2.inOut',
  backgroundColor: 'blue',
  paused: true,
})

export const fromTo_animation = gsap.fromTo(
  '#cube_fromTo',
  {
    x: '10rem',
    duration: 1,
    ease: 'power2.inOut',
    backgroundColor: 'blue',
    paused: true,
  },
  {
    x: '-10rem',
    duration: 1,
    ease: 'power2.inOut',
    backgroundColor: 'red',
    paused: true,
  },
)

export const parameters_animation = gsap.to('#cube_parameters', {
  x: '10rem',
  width: '8rem',
  duration: 1,
  ease: 'power2.inOut',
  repeat: 3,
  repeatDelay: 0.5,
  yoyo: true,
  paused: true,
  onComplete: () => alert('Animation Completed!'),
})

export const timeline_animation = () => {
  const tl = gsap.timeline({ paused: true })
  const id = '#cube_timeline'

  tl.to(id, { y: -100, duration: 1 })
  tl.to(id, { x: 150, duration: 1 })
  tl.to(id, { y: 0, duration: 1 })
  tl.to(id, { x: 0, duration: 1 })

  return tl
}

export const tl_parameters_animation = () => {
  const tl = gsap.timeline({
    repeat: 2,
    repeatDelay: 1,
    paused: true,
    defaults: { duration: 1 },
  })
  const id = '#cube_tl_parameters'

  tl.to(id, { y: -100 })
  tl.to(id, { x: 150 }, 0)
  tl.to(id, { y: 0 })
  tl.to(id, { x: 0 })

  return tl
}

export const control_animation = gsap.to('#cube_control', {
  rotate: 360,
  duration: 3,
  ease: 'linear',
  repeat: -1,
  paused: true,
})
