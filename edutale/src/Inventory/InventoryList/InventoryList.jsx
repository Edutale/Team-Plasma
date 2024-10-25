export default function InventoryList({catalog, ownedItems}) {
    const armorPath = "../../../assets/armor/"
    const weaponPath = "../../../assets/weapon/"
    const familiarPath = "../../../assets/familiar/"

    function setOwned(catalog, ownedItems) {
        let studentOwned = ownedItems.map(item => item.item_id)

        catalog.forEach((item) => {
            item["owned"] = studentOwned.includes(item.item_id)
        })
    }

    return catalog && ownedItems && (
      <>
        {setOwned(catalog, ownedItems)}
        <h2> Armor </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "A") && (
            <button key={item.item_id} className={item.owned ? "unowned" : "owned"}>
              <img src={armorPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
            </button>
          ))}
        </div>
        
        <h2> Weapons </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "W") && (
            <button key={item.item_id} className={item.owned ? "unowned" : "owned"}>
              <img src={weaponPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
            </button>
          ))}
        </div>

        <h2> Familiars </h2>
        <div className="storage-div">
          {catalog.map(item => (item.item_type == "F") && (
            <button key={item.item_id} className={item.owned ? "unowned" : "owned"}>
              <img src={familiarPath + item.item_png_name} title={item.item_name} alt={item.item_name}/>
            </button>
          ))}
        </div>
        {console.log(catalog)}
      </>
    )
}