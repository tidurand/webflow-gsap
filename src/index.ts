/* eslint-disable no-console */
import gsap from 'gsap'

import { playAnimation, selectButton } from './utils'

window.Webflow ||= []
window.Webflow.push(() => {
  const playButtonIds = ['#play_to', '#play_from', '#play_fromTo']

  const playButtons = playButtonIds.reduce(
    (acc, id) => {
      acc[id] = selectButton(id)
      return acc
    },
    {} as { [key: string]: HTMLButtonElement },
  )

  const to_animation = gsap.to('#cube_to', {
    x: '10rem',
    duration: 1,
    ease: 'power2.inOut',
    backgroundColor: 'blue',
    paused: true,
  })
  const from_animation = gsap.from('#cube_from', {
    x: '10rem',
    duration: 1,
    ease: 'power2.inOut',
    backgroundColor: 'blue',
    paused: true,
  })
  const fromTo_animation = gsap.fromTo(
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
      backgroundColor: 'green',
      paused: true,
    },
  )

  const animations = {
    '#play_to': to_animation,
    '#play_from': from_animation,
    '#play_fromTo': fromTo_animation,
  }

  //Set Listeners
  Object.keys(animations).forEach((id) => {
    const key = id as keyof typeof animations
    playButtons[key].addEventListener('click', () =>
      playAnimation(animations[key]),
    )
  })
})
