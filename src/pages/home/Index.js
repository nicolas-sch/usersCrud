import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import People from './Assets/People.svg';
import Arrow from './Assets/arrow_button.svg';
import Trash from './Assets/icon_delete.svg';
import { 
  Container, 
  H1, 
  Image, 
  ContainerItens, 
  InputLabel, 
  Input, 
  Button,
  User
} from './styles';

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name:inputName.current.value, 
      age:inputAge.current.value
    });

    console.log(newUser)

    setUsers([...users, newUser])
  }

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
      <Image alt="logo-image" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"/>

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow}/></Button>

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
      </ContainerItens>
      
    </Container>
  )
}

export default App;