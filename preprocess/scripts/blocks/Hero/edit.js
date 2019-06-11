const { __ } = wp.i18n
const { InspectorControls } = wp.editor
const { PanelBody, TextControl, FormFileUpload } = wp.components

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
      <div className="wpbc-testimonials-item">
        <header className="wpbc-testimonials-header">
          <FormFileUpload
            accept="image/*"
            onChange={ () => console.log('new image') }
          >
            Upload
          </FormFileUpload>

        </header>

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
