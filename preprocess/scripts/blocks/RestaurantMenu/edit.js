const { InnerBlocks } = wp.editor
const ALLOWED_BLOCKS = [ 'wp-blocks-cloud/menuitem', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery' ];

export default function (block) {
  const controls = () => {
    return (
      <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
    )
  }

  /**
   * Return the controls, and rendered UIs together as an array
   */
  return (
    controls()
  )
}
