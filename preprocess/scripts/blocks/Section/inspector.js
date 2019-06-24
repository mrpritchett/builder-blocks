const { Component, createElement } = wp.element
const { __ } = wp.i18n
const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.editor
const { PanelBody, TextControl, ColorPicker, SelectControl, Button } = wp.components
const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class Inspector extends Component {
  render = () => {
    const { padding, margin, backgroundImage, backgroundColor, backgroundSize, backgroundPosition, backgroundRepeat, borderWidth, borderStyle, borderColor } = this.props.block.attributes
    return (
      <InspectorControls>
        <PanelBody title={ __('Style Settings') }>
          <div className="builder-blocks-settings-background-container">
            <h4>Background</h4>
            <div className="builder-blocks-settings-background-wrap">
              <ColorPicker
                color={ backgroundColor }
                onChangeComplete={ ( value ) => this.props.block.setAttributes({ backgroundColor: value.rgb }) }
              />
              <img src={ backgroundImage.url } alt={ backgroundImage.alt } height="100" width="100" />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={ ( media ) => this.props.block.setAttributes({ backgroundImage:{
                    ...backgroundImage,
                    alt: media.alt,
                    url: media.url,
                    id: media.id,
                  } }) }
                  allowedTypes={ ALLOWED_MEDIA_TYPES }
                  value={ backgroundImage.id }
                  render={ ( { open } ) => (
                    <Button onClick={ open }>
                      Open Media Library
                    </Button>
                  ) }
                />
              </MediaUploadCheck>
            </div>
          </div>
          <div className="builder-blocks-settings-border-container">
            <h4>Border</h4>
            <div className="builder-blocks-settings-border-wrap">
              <TextControl
                label="Border Size"
                type="number"
                value={ borderWidth }
                onChange={ (value) => this.props.block.setAttributes({ borderWidth: value }) }
              />
              <SelectControl
                label="Border Style"
                value={ borderStyle }
                options={ [
                    { label: 'Solid', value: 'solid' },
                    { label: 'Hidden', value: 'hidden' },
                    { label: 'Dashed', value: 'dashed' },
                    { label: 'Dotted', value: 'dotted' },
                    { label: 'Double', value: 'double' },
                    { label: 'Groove', value: 'groove' },
                    { label: 'Ridge', value: 'ridge' },
                    { label: 'Inset', value: 'inset' },
                    { label: 'Outset', value: 'outset' },
                    { label: 'None', value: 'none' },
                ] }
                onChange={ ( value ) => this.props.block.setAttributes({ borderStyle: value }) }
              />
              <ColorPicker
                color={ borderColor }
                onChangeComplete={ ( value ) => this.props.block.setAttributes({ borderColor: value.rgb }) }
              />
            </div>
          </div>
        </PanelBody>
        <PanelBody title={ __('Spacing Settings') }>
          <div className="builder-blocks-settings-margin-container">
            <h4>Margin</h4>
            <div className="builder-blocks-settings-margin-wrap">
              <TextControl
                label="Left"
                type="number"
                value={ margin.left }
                onChange={ (value) => this.props.block.setAttributes({ margin:{
                  ...margin,
                  left: value
                }  }) }
              />
              <TextControl
                label="Top"
                type="number"
                value={ margin.top }
                onChange={ (value) => this.props.block.setAttributes({ margin:{
                  ...margin,
                  top: value
                }  }) }
              />
              <TextControl
                label="Right"
                type="number"
                value={ margin.right }
                onChange={ (value) => this.props.block.setAttributes({ margin:{
                  ...margin,
                  right: value
                }  }) }
              />
              <TextControl
                label="Bottom"
                type="number"
                value={ margin.bottom }
                onChange={ (value) => this.props.block.setAttributes({ margin:{
                  ...margin,
                  bottom: value
                }  }) }
              />
            </div>
          </div>
          <div className="builder-blocks-settings-padding-container">
            <h4>Padding</h4>
            <div className="builder-blocks-settings-padding-wrap">
              <TextControl
                label="Left"
                type="number"
                value={ padding.left }
                onChange={ (value) => this.props.block.setAttributes({ padding:{
                  ...padding,
                  left: value
                }  }) }
              />
              <TextControl
                label="Top"
                type="number"
                value={ padding.top }
                onChange={ (value) => this.props.block.setAttributes({ padding:{
                  ...padding,
                  top: value
                }  }) }
              />
              <TextControl
                label="Right"
                type="number"
                value={ padding.right }
                onChange={ (value) => this.props.block.setAttributes({ padding:{
                  ...padding,
                  right: value
                }  }) }
              />
              <TextControl
                label="Bottom"
                type="number"
                value={ padding.bottom }
                onChange={ (value) => this.props.block.setAttributes({ padding:{
                  ...padding,
                  bottom: value
                }  }) }
              />
            </div>
          </div>
        </PanelBody>
      </InspectorControls>
    )
  }
}