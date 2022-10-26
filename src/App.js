
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Pages/Login';
import Admindash from './Pages/Admindash';
import Userdash from './Pages/Userdash';
import Allusers from './Pages/Allusers';
import Userprofile from './Pages/Userprofile';
import Createuserbtn from './Pages/Createuserbtn';


function App() {


  return (
    
    <> 
    
  <BrowserRouter>

   <Routes>
     

   <Route path="/" element={<Login/>} />
  <Route path="/admindash" element={<Admindash/>}/>
  <Route path="/userdash" element={<Userdash/>}/>
  <Route path="/allusers" element={<Allusers/>}/>
  <Route path="/userprofile" element={<Userprofile/>}/>
  <Route path="/createuserbtn" element={<Createuserbtn/>}/>

   </Routes>
   
   </BrowserRouter>
      
    </>
  );
}

export default App;
