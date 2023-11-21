// import { useContext } from 'react';

import { Button } from "react-bootstrap";
import CartIcon from "../Cart/CartIcon";


// import CartContext from '../../store/cart-context';
// import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  
//   const cartCtx = useContext(CartContext);

//   const { items } = cartCtx;

//   const numberOfCartItems = items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

   return (
    <Button onClick={props.onClick}>
      <span>
        
      </span>
      <span>Your Cart</span>
      <span>0</span>
    </Button>
  );
};

export default HeaderCartButton;