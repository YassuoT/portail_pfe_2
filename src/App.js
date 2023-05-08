
//import './App.css';
import AuthPage from './components/AuthPage.component';
import Navbar from './components/Navbar';
import RegistrationForm from './components/Signup.component';

import Admin from './components/Admin';
import { Routes, Route} from 'react-router-dom';
import User from './components/User';
import Formation from './components/Formation';
import Form from './components/Form';
import Formationuser from './components/Formationuser';



function App() {
  return (
    
   <>
   {/* <Navbar/> */}
    
    
     <Routes>
    
    
      <Route path='/' element={<AuthPage />} ></Route>
      <Route path='SignUp' element={<RegistrationForm />}></Route>  
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/formation' element={<Formation/>}></Route>
      <Route path='/formation/form'element={<Form/>}></Route>
      <Route path='/formationuser'element={<Formationuser/>}></Route>
      
     
       </Routes>
     
    
   </>

    
    

    
  );
}

export default App;
