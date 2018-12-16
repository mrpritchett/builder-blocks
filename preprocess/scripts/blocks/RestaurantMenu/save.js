const { InnerBlocks } = wp.editor

export default function () {
  return (
    <div>
      <InnerBlocks.Content />
    </div>
  )
}
