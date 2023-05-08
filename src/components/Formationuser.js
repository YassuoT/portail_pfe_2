import Navbaruser from "./Navbaruser";
import  Table  from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios";
import './Style.css'

function Formationuser(){
 
    const [trainingSessions,setTrainingSessions]=useState([]);
   
    useEffect(()=>{
      const fetchTrainingSessions = async ()=>{
        try{
          const resp = await axios.get('http://localhost:8080/api/v1/training-sessions/all/get/training-sessions')
          setTrainingSessions(resp.data)
          
        }catch(error){console.log(error)}
      }
      fetchTrainingSessions();
    },[])
    console.log(trainingSessions);
    const Demande = async (item) => {
      try{
        var user = localStorage.getItem('user')
        const resp = await axios.put('http://localhost:8080/api/v1/training-sessions/all/update/add-user',{trainSessionId:item.id,userId : user})
        setTrainingSessions(resp.data)
        console.log('succes')
      }catch(error){console.log(error)}
      
      //console.log(item.id)
      console.log(user)
      var token = localStorage.getItem('token')
      console.log(token)


    }



    return(
        <div>
            <Navbaruser />
            <div className="formation-container">
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>Formation</th>
          <th>Description de formation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {trainingSessions.map((item) => (
          <tr key={item.id}>
            
            <td>{item.name}</td>
            <td>{item.description}</td>
            
         <td><Button variant="contained" 
                    style={{backgroundColor: 'green', width: '100px', height: '35px', fontSize: '10px', fontWeight: '700'}}
              onClick={()=>Demande(item)}>Demande</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>

        </div>
    )
}
export default Formationuser