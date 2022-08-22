import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../shared_components/Layout";
import GameCard from "./../../shared_components/game_card";
function HomePage() {
  const [data, setData] = useState([]);
  // Getting data from the database
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/games")
        .then(function (response) {
          // handle success
          setData(response.data);
        })

        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }, 0);
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-x-5">
        {
          (data != null,
          data.map((game) => <GameCard game={game} />))
        }
      </div>
    </Layout>
  );
}

export default HomePage;
