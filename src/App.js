import Header from './componenets/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./componenets/Body/Home"
import CreateRice from './componenets/createproduct/CreateRice'
import CreateFries from './componenets/createproduct/CreateFries'
import CreateSoup from './componenets/createproduct/CreateSoup'
import Signup from './componenets/Register/Signup'
import Signin from './componenets/Register/Signin'
import Verifyaccount from './componenets/Register/Verifyaccount'
const  App=() =>{
  return (
   <BrowserRouter>
     <Header/>

   <Routes>
<Route path= "/" element ={<Home/>}/>
<Route path ="/createrice" element={<CreateRice/>}/>
<Route path ="/createfries" element={<CreateFries/>}/>
<Route path ="/createsoup" element={<CreateSoup/>}/>
<Route path ="/Signin" element={<Signin/>}/>
<Route path ="/Signup" element={<Signup/>}/>
<Route path ="/api/user/reset/:id/:token" element={<Verifyaccount/>}/>

   </Routes>

   </BrowserRouter>
  
  );
}

export default App;
