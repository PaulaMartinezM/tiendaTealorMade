
import './ItemDetail.css'


const ItemDetail = ({ product }) => {

    return (
        <div className='itemDetail'>
                <img className='itemDetailImg' src={product.img} alt="te" />
            <div className="col">
                <div className='itemDetailComplete'>
                    <div className='itemInformation'>
                        <h3 className='itemName'>{product.name}</h3>
                        <div>
                            <span>{`Categoría: ${product.category}`}</span>
                            <br />
                            <span>{`Variedad: ${product.variety}`}</span>
                            <br />
                            <span>{`Precio: ${product.price}`}</span>
                        </div>
                        <br/>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail