const { createElement } = wp.element
const { InnerBlocks } = wp.editor

export default function (block) {
  const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor, containerWidth, contentWidth } = block.attributes

  const style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: 'url(' + backgroundImage.url + ')',
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    margin: margin.left + 'px ' + margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px',
    padding: padding.left + 'px ' + padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px',
    width: containerWidth === 'full' ? '100%' : '1200px',
  }

  const containerStyle = {
    margin: '0 auto',
    maxWidth: contentWidth === 'container' ? '1200px' : '100%',
    width: '100%',
  }

  return (
    <div className="builder-blocks-section-block" style={ style }>
      <div className="builder-blocks-section-block-content" style={ containerStyle }>
        <InnerBlocks.Content />
      </div>
    </div>
  )
}
