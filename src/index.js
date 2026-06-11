import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/*  if (Time >= openHours && Time <= closedHours) {
    alert("It's Open now");
  } else {
    alert("It's closed now");
  } */
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/*    <Pizza
        name="PizzaSpinaci"
        photo="pizzas/spinaci.jpg"
        price={10}
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      />
      <Pizza
        name="PizzaFunghi"
        photo="pizzas/funghi.jpg"
        price={12}
        ingredients="Tomato, mushrooms"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  /*   if (pizzaObj.soldOut) return null; */
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
      </div>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}
function Footer() {
  const openHours = 12;
  const closedHours = 22;
  const Time = new Date().getHours();
  const isOpen = Time >= openHours && Time <= closedHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHours={closedHours} />
      ) : (
        <p>
          Come visit us between {openHours}:00 and {closedHours}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closedHours }) {
  return (
    <div className="order">
      <p>We're open until {closedHours}:00 come visit us or order online</p>
      <buttton className="btn">Order</buttton>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
