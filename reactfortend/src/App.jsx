
import { useEffect, useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddMovie from './AddMovie'

function App() {
  // const [data, setData] = useState([]);
  // console.log("data", data);
  // useEffect(() => {
  //   Axios.get("http://192.168.0.127:5050/djangobackend_api/informations/").then((res) => setData(res.data));
  // }, []);

  return (
    <div className="App">
        <AddMovie/>
    </div>
    );


}

export default App

