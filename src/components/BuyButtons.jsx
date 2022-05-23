import { Link } from "react-router-dom";
import './BuyButtons.css';

export default function BuyButtons() {
    
    return (
        <div>
            <Link to='/cart'>
                <button>Ver pedido</button>
            </Link>
            <Link to='/'>
                <button>Volver al menú</button>
            </Link>
        </div>
    );

}