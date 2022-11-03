import Titlem from "./components/Titleem";
import Loading from "../src/components/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import "../src/assets/App.css";
import Navbar from "../src/components/Navbar";
function App() {
  const [data, setData] = useState([]);
  let [loading, setIsLoading] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      url: "https://famous-quotes4.p.rapidapi.com/random",
      params: { category: "all", count: "1" },
      headers: {
        "X-RapidAPI-Key": "1cf95f6a55msh2a63d3ac8a4b884p14cc72jsn2534e7f20c1c",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };
    const res = await axios.request(options).then((res) => {
      setData(res.data);
    });
  };
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
  return 
  (
    <div className="App">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="card">
            <div className="card-body">
              {data.map((item) => {
                return (
                  <div>
                    <h5 className="card-text" key={item.id}>
                      "{item.text}"
                    </h5>
                    <p className="card-text"> ~{item.author}~ </p>
                  </div>
                );
              })}
              <center>
                <br />{" "}
                <button
                  type="button"
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  onClick={handleSubmit}
                >
                  Get Motivation
                </button>
              </center>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
