import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from '../../assets/Avatar.svg';
import Arrow from '../../assets/arrow_button.svg';
import Trash from '../../assets/icon_delete.svg';
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';
import { 
  Container, 
  Image, 
  User
} from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  function goBackPage() {
    navigate('/')
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar}/>
      <ContainerItens isBlur={true}>
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

        <Button isTransparent={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow}/>Voltar
        </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users;