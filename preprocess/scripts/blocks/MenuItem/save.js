export default function (block) {
  return (
    <div className="wpbc-restaurant-menu-item">
      <header className="wpbc-restaurant-menu-item-header">
        <strong><span>{ block.attributes.name }</span></strong>
        <strong><span>${ block.attributes.price }</span></strong>
      </header>
      { block.attributes.description }
    </div>
  )
}
