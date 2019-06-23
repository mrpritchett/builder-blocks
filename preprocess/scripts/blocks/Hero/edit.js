const { __ } = wp.i18n
const { InspectorControls } = wp.editor
const { PanelBody, MediaUpload } = wp.components

export default function (block) {
  const onImageSelect = (image) => {
    block.setAttributes({
      image: image.sizes.full.url
    })
  }

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
      <div className="builder-blocks-hero-block">
        <MediaUpload
          onSelect={ ({ image }) => onImageSelect(image) }
          type="image"
          value={ block.attributes.image } // make sure you destructured backgroundImage from props.attributes!
          render={ ({ open }) => (
            <button onClick={ open }>
              { __('Upload Image') }
            </button>
          ) }
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
