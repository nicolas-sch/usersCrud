import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from '../../Assets/Avatar.svg';
import Arrow from '../../Assets/arrow_button.svg';
import Trash from '../../Assets/icon_delete.svg';
import { 
  Container, 
  H1, 
  Image, 
  ContainerItens, 
  Button,
  User
} from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()
  }, [users])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar}/>
      <ContainerItens>
        <H1>Usuários!</H1>

        <ul>
          { users.map( user => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="Delete Icon" src={Trash}/>
              </button>
            </User>
          ))
          }
        </ul>

        <Button >
        <img alt="seta" src={Arrow}/>Voltar
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users;