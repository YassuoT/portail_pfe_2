import { useState } from 'react';
import  './AuthPage.css';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
function AuthPage() {

  const navigate = useNavigate ()
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/v1/auth/login',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),

    });
   

    const resp = await response.json();

    
    // Store the token and roles in localStorage or other secure storage mechanism
    var token = resp.token 
    localStorage.setItem('token', token);
    // Redirect to the authorized page based on the user's roles
    console.log(resp)
   var user = resp.userEntityDto
   console.log("this is the user"+user.id)
    localStorage.setItem('user',user.id );
    let isAdmin = false
    let isUser = false
    for(const elem of resp.userEntityDto.roles){
      if(elem.name === "USER"){
        console.log("user found")
        isUser = true
      }
      else if(elem.name === "ADMIN"){
        console.log("admin found")
        isAdmin = true 
      }
      else {
        console.log("there is a problem")
      }
    }
if(isAdmin === true){
  navigate('/admin');
} else if(isUser === true){
  navigate('/user');
}else {
  navigate('/')
}
  


  };

  return (
    <>
    <div className='container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          
        <TextField id="username-basic" label="username" variant="outlined" value={email} onChange={handleUsernameChange} required />
        </label>
        <label>
          
          <TextField id="Password-basic" label="Password" variant="outlined"  value={password} onChange={handlePasswordChange} required />
        </label>
        <button  type='Submit' >Login<LoginIcon /></button>
        <button onClick={() =>navigate('SignUp')} >SignUp</button>
      </form>
    </div>
    </>
  );
}

export default AuthPage;
