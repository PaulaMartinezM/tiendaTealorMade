import Item from "./Item";

import './ItemList.css';


function ItemList({ items }) {
  return (
    <div className='cardPosition'>
      {items.map((el) => <Item key={el.id} el={el} />)}
    </div>
  );
}

export default ItemList