import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { GameContext } from "../../utilities/gameContext";
import "react-toastify/dist/ReactToastify.css";
function Cart() {
  const { gameCart } = useContext(GameContext);
  function allTotal() {
    let sum = 0;
    gameCart.map((arr) => (sum += arr.price));
    return sum;
  }
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-x-5">
        {gameCart.map((gameInCart) => (
          <div key={gameInCart.id} className="card w-[350px] shadow-2xl my-10">
            <div className="card-header mx-3 mt-12">
              <img
                className="w-[350px] h-[200px] rounded-lg object-cover"
                src={gameInCart.imageURL}
                alt="tailwind-card-image"
              />
            </div>
            <div className="card-body">
              <a href="#">
                <h4 className="font-semibold">{gameInCart.title}</h4>
              </a>
              <p className="opcacity-60 mb-4 line-clamp-3">
                {gameInCart.description}
              </p>
              <p className=" font-bold mb-5">{gameInCart.price}$</p>
              <Link
                to={`/game/${gameInCart.id}`}
                className="button bg-green-500 text-white w-2/5"
              >
                Read More
              </Link>
              <button className= "text-2xl bg-black text-white  p-2" type="submit">delete</button>
            </div>
          </div>
        ))}
        <h1 className="text-3xl border-2 border-green-500 w-[250px]  px-4 py-2 rounded-xl bg-green-500 text-white font-bold  fixed right-0 bottom-0">
          Total: {allTotal()}$
        </h1>
      </div>
    </Layout>
  );
}

export default Cart;
