const { InnerBlocks } = wp.editor
const ALLOWED_BLOCKS = [ 'wp-blocks-cloud/menuitem', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery' ]

export default function () {
  const controls = () => {
    return (
      <div className="wpbc-restaurant-menu">
        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
      </div>
    )
  }

  /**
   * Return the controls, and rendered UIs together as an array
   */
  return [
    controls()
  ]
}
