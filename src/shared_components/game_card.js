import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { GameContext } from "./../utilities/gameContext";
function GameCard({ game }) {
  const { gameCart, setGameCart } = useContext(GameContext);
  // Function to delete the game from the database
  function deleteGame(gameId) {
    axios.delete(`http://localhost:3000/games/${gameId}`).then(() => {
      toast("Game Deleted !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }
  //
  // Add cart function
  function addCart() {
    let newArr = [...gameCart];
    newArr.push(game)
    setGameCart(newArr);
  }
  //
  return (
    <div key={game.id} className="card w-[350px] shadow-2xl my-10">
      <div className="card-header mx-3 mt-12">
        <img
          className="w-[350px] h-[200px] rounded-lg object-cover"
          src={game.imageURL}
          alt="tailwind-card-image"
        />
      </div>
      <div className="card-body">
        <a href="#">
          <h4 className="font-semibold">{game.title}</h4>
        </a>
        <p className="opcacity-60 mb-4 line-clamp-3">{game.description}</p>
        <p className=" font-bold mb-5">{game.price}$</p>
        <Link
          to={`/game/${game.id}`}
          className="button bg-green-500 text-white w-2/5"
        >
          Read More
        </Link>
        <button
          onClick={() => deleteGame(game.id)}
          type="submit"
          className="text-white bg-black rounded-lg py-2  ml-10 w-2/5"
        >
          Delete
        </button>
        <button
          onClick={addCart}
          className="uppercase py-3 w-4/5 mx-auto border-2 border-green-500 rounded-xl text-green-500 font-bold m-5 ml-5 cursor-pointer duration-200 active:scale-95  hover:text-white hover:bg-green-500"
          type="submit"
        >
          Add to cart
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default GameCard;
