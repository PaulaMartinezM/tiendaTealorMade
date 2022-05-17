import './ItemDetail.css'


function ItemDetail({ item }) {
    return (
        <div>
            <div className='itemDetailComplete'>
                <img className='itemDetailImg' src={item.img} alt=""/>
                <div className='itemInformation'>
                    <h3 className='itemName'>{item.name}</h3>
                    <div className='itemDetailDetail'>
                        <p>{`Categoría: ${item.category}`}</p>
                        <p>{`Variedad: ${item.variety}`}</p>
                        <p>{`Precio: ${item.price}`}</p>
                    </div>
                    <button>Agregar al pedido</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail