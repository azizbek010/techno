import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { HiOutlinePencilAlt } from "react-icons/hi";

function AboutGame() {
  let params = useParams();
  const [game, setGame] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/games/${params.gameId}`)
      .then(function (response) {
        // handle success
        setGame(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <Layout>
      <Link to={`/game/update/${params.gameId}`}>
        <HiOutlinePencilAlt className="h-14 w-14 text-slate-700 text-right absolute right-0 m-10 cursor-pointer duration-200 active:scale-95" />
      </Link>
      {game != null && (
        <div className="flex flex-col justify-center items-center p-10 space-y-5">
          <img
            className="h-[300px] w-[400px] object-cover"
            src={game.imageURL}
            alt="game image"
          />
          <h1 className="text-center font-bold text-5xl">{game.title}</h1>
          <p className="font-semibold text-lg">{game.description}</p>
          <p className="font-bold text-green-500">{game.price}$</p>
          <h1 className="font-bold text-2xl">Developer: {game.developer}</h1>
        </div>
      )}
    </Layout>
  );
}

export default AboutGame;
