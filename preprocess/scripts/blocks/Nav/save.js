import Editor from './editor.js'

const { createElement } = wp.element

export default function (block) {
  const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor } = block.attributes

  const style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: backgroundImage.url ? 'url(' + backgroundImage.url + ')' : 'inherit',
    backgroundPosition: backgroundPosition ? backgroundPosition : 'inherit',
    backgroundRepeat: backgroundRepeat ? backgroundRepeat : 'inherit',
    backgroundSize: backgroundSize ? backgroundSize : 'inherit',
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    margin: margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px',
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
  }

  return (
    <div className="builder-blocks-nav-block" style={ style }>
        <nav>

        </nav>
      </div>
  )
}
