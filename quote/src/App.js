import Titlem from "./components/Titleem";
import Loading from "../src/components/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import "../src/assets/App.css";
function App() {
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  /*const getData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setData(res.data);
          setIsLoading(false);
        }, 3000);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };*/

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://famous-quotes4.p.rapidapi.com/random",
      params: { category: "all", count: "1" },
      headers: {
        "X-RapidAPI-Key": "1cf95f6a55msh2a63d3ac8a4b884p14cc72jsn2534e7f20c1c",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTimeout(() => {
          setData(response.data);
          setIsLoading(false);
        }, 3000);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Titlem />
          <div className="card">
            <div className="card-body">
              {data.map((item) => {
                return (
                  <div>
                    <h5 className="card-text" key={item.id}>
                      {item.text}
                    </h5>
                    <p className="card-text"> "{item.author}"</p>
                  </div>
                );
              })}
              <center>
                <button className="btn btn-primary">Get Motivation</button>
              </center>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
