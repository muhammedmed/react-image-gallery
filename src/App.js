import React, { useState} from "react";
import axios from "axios";
import Image from "./Image";
import Search from "./Search";

function App() {
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState([]);

  const API_KEY= process.env.REACT_APP_API_KEY;
  
  const fetchPhoto = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=3&per_page=20&query=${photo}&client_id=${API_KEY}`);
      setData(response.data.results)
    } catch (err){
      console.log(err);
    }
    
  }
  

  return (
    <div className="App">
      <h1>React Search Image Gallery</h1>
      <Search photo={photo} setPhoto={setPhoto} fetchPhoto={fetchPhoto} />
      <Image data={data} />
    </div>
  );
}

export default App;
