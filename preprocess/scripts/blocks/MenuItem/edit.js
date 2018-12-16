const { __ } = wp.i18n
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, TextareaControl } = wp.components

export default function (block) {
  console.log('blocks: ', block.attributes.name)
  const controls = () => {
    return (
      <InspectorControls>
        <PanelBody title={ __('Menu Item Settings') }>
          <div className="components-base-control">
            <TextControl
              label={ __('Menu Item Name') }
              placeholder={ __('Menu Item Name') }
              onChange={ name => block.setAttributes({ name }) }
              value={ block.attributes.name } />
          </div>
          <div className="components-base-control">
            <TextareaControl
              label={ __('Description') }
              placeholder={ __('Description') }
              onChange={ description => block.setAttributes({ description }) }
              value={ block.attributes.description } />
          </div>
          <div className="components-base-control">
            <TextControl
              label={ __('Menu Item Price') }
              type="number"
              placeholder={ __('Menu Item Price') }
              onChange={ price => block.setAttributes({ price }) }
              value={ block.attributes.price } />
          </div>
        </PanelBody>
      </InspectorControls>
    )
  }

  const rendered = () => {
    return (
      <div className="">
        <h5>{ block.attributes.name }</h5>
        <h6>${ block.attributes.price }</h6>
        <p>{ block.attributes.description }</p>
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
