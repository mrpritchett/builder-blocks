export default function (block) {
  const controls = () => {
    return (
      console.log('Controls Loaded')
    )
  }

  const rendered = () => {
    return (
      console.log('Editor Loaded')
    )
  }

  /**
   * Return the controls, and rendered UIs together as an array
   */
  return [
    controls(),
    rendered()
  ]
}
