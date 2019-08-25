const { createElement } = wp.element
const { InnerBlocks } = wp.editor

export default function (block) {
  const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor, logoType, logoImage, logoTitle, logoDescription } = block.attributes

  const style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: 'url(' + backgroundImage.url + ')',
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    margin: margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px',
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
  }

  return (
    <div className="builder-blocks-logo-block" style={ style }>
      {
        logoType === 'image'
          ? (
            <a className="site-branding" href={ window.location.host }><img src={ logoImage.media.url } alt={ logoImage.media.alt } /></a>
          ) : (
            <div className="site-branding">
              <h1 className="site-title"><a href="">{ logoTitle }</a></h1>
              <h2 className="site-description">{ logoDescription }</h2>
            </div>
          )
      }
    </div>
  )
}
