export default function (block) {
  return (
    <div className="builder-blocks-hero-block">
      <img src={ block.attributes.backgroundImage } alt="Hero Image" />
    </div>
  )
}
