const { Component, createElement } = wp.element
const { InnerBlocks } = wp.editor

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: []
    }

    this.getMenuItems()
  }

  getMenuItems = () => {
    fetch(`http://${window.location.hostname}/wp-json/builder_blocks/menus/${this.props.block.attributes.navMenu}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ navItems: data.items })
      })
      .catch(error => console.error(error))
  }

  render = () => {
    const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor } = this.props.block.attributes

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

    const navItems = this.state.navItems.map((item) => {
      return (
        <a href={ item.url }>{ item.title }</a>
      )
    })

    return (
      <div className="builder-blocks-nav-block" style={ style }>
        <nav>
          { navItems }
        </nav>
      </div>
    )
  }
}
