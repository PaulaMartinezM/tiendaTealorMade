import { useState } from "react";
import { UseCartContext } from "../context/CartContext";

import CartItem from "./CartItem";

import './CartList.css';

export default function CartList({ sendOrderManage }) {
    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const { cartList, clearCart, totalPrice } = UseCartContext();

    function changeHandler(element) {
        setCustomerData({
            ...customerData,
            [element.target.name]: element.target.value
        });
    }

    function dataManage() {
        setNameError(!customerData.name);
        setPhoneError(!customerData.phone);
        setEmailError(!customerData.email);
        setEmail2Error(!(customerData.email2 === customerData.email));
        if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
            sendOrderManage(customerData);
        }
    }

    return (
        <div className="cartList">
            {cartList.map((el) => <CartItem key={el.id} product={el} />)}
            <p>{`Total Pedido: $${totalPrice}`}</p>
            <p>Por favor, complete sus datos para confirmar el pedido</p>
            <form className="formStyle" action="">
                <input className="inputFormat" name="name" onChange={(element) => changeHandler(element)} type="text" placeholder="Nombre y Apellido" />
                {nameError && <span>Debe ingresar un nombre y apellido válido</span>}
                <br />
                <input className="inputFormat" name="phone" onChange={(element) => changeHandler(element)} type="tel" placeholder="Teléfono" />
                {phoneError && <span>Debe ingresar un teléfono válido</span>}
                <br />
                <input className="inputFormat" name="email" onChange={(element) => changeHandler(element)} type="email" placeholder="e-mail" />
                {emailError && <span>Debe ingresar un e-mail válido</span>}
                <br />
                <input className="inputFormat" name="email2" onChange={(element) => changeHandler(element)} type="email" placeholder="e-mail nuevamente" />
                {email2Error && <span>El e-mail ingresado no coincide</span>}
                <br />
                <br />
                <textarea name="comment" onChange={(element) => changeHandler(element)} id="" cols="30" rows="10" placeholder="Ingrese sus comentarios sobre el pedido"></textarea>
            </form>
            <div className="buttons">
                <button onClick={clearCart}>Vaciar carrito</button>
                <button onClick={dataManage}>Enviar pedido</button>
            </div>
        </div>
    );
}