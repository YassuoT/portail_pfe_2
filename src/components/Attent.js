import Table from "react-bootstrap/Table";

import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import axios from "axios";
import './Style.css';

function Attent(props) {
    const [trainingSessions, setTrainingSessions] = useState([]);
    

    useEffect(() => {
        setTrainingSessions(props.func())
        console.log("hello", trainingSessions);
        const pendingTrainingSessions = async (trainingSession) => {
            try {
                let pending = [];
                const { resp } = await axios.get(`http://localhost:8080/api/v1/training-sessions/all/get/enrolled-pending-users`)
                setTrainingSessions(resp.data)
                console.log(resp.data)
                console.log(trainingSession.id)

            } catch (error) {
                console.log(error);

            }
        }
        pendingTrainingSessions();
    }, [])

    return (
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
                            > Accepter</Button></td>
                            <td><Button variant="contained"
                                style={{ backgroundColor: 'green', width: '100px', height: '35px', fontSize: '10px', fontWeight: '700' }}
                            > Rejecter</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>





        </div>
    )
}
export default Attent