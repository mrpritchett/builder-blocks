export default function (block) {
  return (
    <div className="wpbc-restaurant-menu-item">
      <header className="wpbc-restaurant-menu-item-header">
        <span>{ block.attributes.name }</span>
        <span>${ block.attributes.price }</span>
      </header>
      { block.attributes.description }
    </div>
  )
}
