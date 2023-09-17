import Navbar from "./navbar/Navbar";
import './app.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Registration from './autorization/Registration'
import Autorization from "./autorization/Autorization";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    console.log(isAuth);
    useEffect(()=>{
      if (localStorage.getItem('token')) dispatch(auth())
    },[])
  return (
    // BrowserRputer - заварачиваем в 'react-router-dom'
    <Router>
      <div className="app">
        <Navbar/>
      {/* Routes - чтобы работали руты */}
        <div className="wrap">
        {!isAuth &&
        <Routes>
          {/* Route принимает два параметра, "ссылку" и {компонет} */}
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Autorization/>}/>
        </Routes>
        }
        </div>
      </div>
    </Router>
  );
}

export default App;
