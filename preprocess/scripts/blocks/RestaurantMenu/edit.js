const { InnerBlocks } = wp.editor
const ALLOWED_BLOCKS = [ 'wp-blocks-cloud/menuitem', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery' ]

export default function () {
  const controls = () => {
    return (
      <div>
        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
      </div>
    )
  }

  const rendered = () => {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
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
