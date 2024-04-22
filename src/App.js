import React, { useEffect,useState } from 'react'
import './App.css';
import Login from './Components/Authentication/Login';
import Home from './Home'
import Signup from './Components/Authentication/Signup';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AddRestaurant from './Components/AddRestaurant'
import View from './Components/View';
import ViewFood from './Components/ViewFood'
import AddProducts from './Components/Addproduct'
import Viewcard from './Components/Viewcard.jsx'
import Success from './Components/Success.jsx';




function App() {

  let [login,SetLogin]=useState(null)
  useEffect(()=>{
   let isLoggedIn=    localStorage.getItem('userData')
   SetLogin(isLoggedIn)
     
  },[login])

  return (
    <div>

      <Routes> 

      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/AddRestaurant' element={<AddRestaurant/>}></Route>
      <Route path='/View' element={<View/>}></Route>
      <Route  path='/view/:restroId/product'   element={<ViewFood/>}/>
      <Route  path='/view/:restroId/addProduct'   element={<AddProducts/>}/> 
      <Route  path='/Viewcard/:restroId'   element={<Viewcard/>}/> 
      <Route  path='/sucess'   element={<Success/>}/> 

  
      
      </Routes> 
      
    </div>


    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/">
    //         {
    //           user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
    //         }
    //       </Route>
    //       <Route path="/login">
    //         <Login setLoginUser={setLoginUser}/>
    //       </Route>
    //       <Route path="/Signup">
    //         <Signup />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </div>
  );
} 

export default App;
