const { Component, createElement } = wp.element
const { InnerBlocks } = wp.editor

export default class Editor extends Component {
  render = () => {
    const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor, contentWidth, containerWidth } = this.props.block.attributes

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
      <div className="builder-blocks-menu-block" style={ style }>

      </div>
    )
  }
}