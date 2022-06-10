import Header from './componenets/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./componenets/Body/Home"
import CreateRice from './componenets/createproduct/CreateRice'
import CreateFries from './componenets/createproduct/CreateFries'
import CreateSoup from './componenets/createproduct/CreateSoup'
const  App=() =>{
  return (
   <BrowserRouter>
     <Header/>

   <Routes>
<Route path= "/" element ={<Home/>}/>
<Route path ="/createrice" element={<CreateRice/>}/>
<Route path ="/creatfries" element={<CreateFries/>}/>
<Route path ="/createsoup" element={<CreateSoup/>}/>
   </Routes>

   </BrowserRouter>
  
  );
}

export default App;
