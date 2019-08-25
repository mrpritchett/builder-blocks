const { createElement } = wp.element
const { InnerBlocks } = wp.editor

export default function (block) {
  const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor, containerWidth, contentWidth, sectionPosition } = block.attributes

  const style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: 'url(' + backgroundImage.url + ')',
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    position: sectionPosition,
    width: containerWidth === 'full' ? '100%' : 'auto',
    zIndex: (sectionPosition === 'absolute' || sectionPosition === 'fixed') ? '2' : '1',
  }

  const containerStyle = {
    margin: margin.top + 'px -' + padding.right + 'px ' + margin.bottom + 'px -' + padding.left + 'px',
    maxWidth: contentWidth === 'container' ? '1200px' : '100%',
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
    width: '1200px',
  }

  return (
    <div className="builder-blocks-section-block" style={ style }>
      <div className="builder-blocks-section-block-content" style={ containerStyle }>
        <InnerBlocks.Content />
      </div>
    </div>
  )
}
