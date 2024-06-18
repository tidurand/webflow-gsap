export const playAnimation = (
  animation: gsap.core.Tween | gsap.core.Timeline,
) => {
  animation.restart()
}

export const selectButton = (id: string): HTMLButtonElement => {
  return document.querySelector(id) as HTMLButtonElement
}
