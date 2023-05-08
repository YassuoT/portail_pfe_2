import Navbar from "./Navbar";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios";
import './Style.css'
import Attent from "./Attent";


function Formation() {
  const [trainingSessions, setTrainingSessions] = useState([]);
  const getTrainingSessions =()=>{
    return trainingSessions;
}
  useEffect(() => {
    const fetchTrainingSessions = async () => {
      try {
        const resp = await axios.get('http://localhost:8080/api/v1/training-sessions/all/get/training-sessions')
        setTrainingSessions(resp.data)

      } catch (error) { console.log(error) }
    }

    fetchTrainingSessions();

  }, [])

  console.log("h",trainingSessions);
  const deleteTrainingSession = async (trainingSession) => {
    try {
      setTrainingSessions(trainingSessions.filter((training) => training.id !== trainingSession.id));
      await axios.delete(`http://localhost:8080/api/v1/training-sessions/admin/delete/id/${trainingSession.id}`)
        ;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div >
      <Navbar />
      <div className="formation-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>

              <th>Formation</th>
              <th>Description de formation</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainingSessions.map((item) => (
              <tr key={item.id}>

                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><Button variant="contained"
                  style={{ backgroundColor: 'green', width: '100px', height: '35px', fontSize: '10px', fontWeight: '700' }}
                  onClick={() => deleteTrainingSession(item)}> Supprimer</Button></td>
                <td><Button variant="contained"
                  style={{ backgroundColor: 'green', width: '100px', height: '35px', fontSize: '10px', fontWeight: '700' }}
                > Modifier</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button variant="contained"
          style={{ backgroundColor: 'green', width: '100px', height: '35px', fontSize: '10px', fontWeight: '700' }}
          component={Link} to={`/formation/form`}> Ajout des formation</Button>
      </div>
      <Attent trainingSession={trainingSessions}/>
    </div>
  );


}
export default Formation;