import { useState } from "react";
import styles from "./App.module.css";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Headphones", price: 150 }
];

function Product({ product, addToCart }) {
  return (
    <div className={styles.product}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

function CartItem({ item, removeFromCart }) {
  return (
    <div className={styles.cartItem}>
      <p>{item.name} - ₹{item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

function Cart({ cart, removeFromCart }) {
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map(item => <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />)}
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Product Store</h1>
        <div className={styles.cartIcon}>🛒 {cart.length}</div>
      </header>
      <div className={styles.products}>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
