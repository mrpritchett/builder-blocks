const { __ } = wp.i18n
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, TextareaControl } = wp.components

export default function (block) {
  const controls = () => {
    return (
      <InspectorControls>
        <PanelBody title={ __('Menu Item Settings') }>
          <div className="components-base-control">

          </div>
        </PanelBody>
      </InspectorControls>
    )
  }

  const rendered = () => {
    return (
      <div className="wpbc-restaurant-menu-item">
        <header className="wpbc-restaurant-menu-item-header">
          <TextControl
            placeholder={ __('Write the name of the menu item here...') }
            onChange={ name => block.setAttributes({ name }) }
            value={ block.attributes.name }
          />
          <TextControl
            type="currency"
            placeholder={ __('0.00') }
            onChange={ price => block.setAttributes({ price }) }
            value={ block.attributes.price }
          />
        </header>
        <TextareaControl
          rows="2"
          placeholder={ __('Write a description of the menu item here...') }
          onChange={ description => block.setAttributes({ description }) }
          value={ block.attributes.description }
        />
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
