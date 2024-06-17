export const playAnimation = (animation: gsap.core.Tween) => {
  animation.restart()
}

export const selectButton = (id: string): HTMLButtonElement => {
  return document.querySelector(id) as HTMLButtonElement
}
