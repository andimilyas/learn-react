import React from "react";
import './App.css';
import ProfileCard from "./components/ProfileCard.tsx";
import Header from "./components/Header.tsx";
import Counter from "./components/Counter.tsx"; 
import Todo from "./components/Todo.tsx";
import RegisterForm from "./components/RegisterForm.tsx";
import ContohUseRef from "./components/ContohUseRef.tsx";

type User = {
  name: string;
  avatar: string;
  email: string;
  phone: number;
  address: string;
  id: number;
}
const users: User[] = [
  {
    name: "John Doe",
    avatar: "https://avatar.iran.liara.run/public/35",
    email: "john@doe.com",
    phone: 1234567890,
    address: "123 Main St, Anytown, USA",
    id: 1
  },
  {
    name: "Gholam",
    avatar: "https://avatar.iran.liara.run/public/2",
    email: "gholam@gmail.com",
    phone: 1234567890,
    address: "123 Main St, Anytown, USA",
    id: 2
  }
]  

const App = () => {
  return (
    <div className="App">
      <RegisterForm />
      <Header /> 
      <Counter />
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          id={user.id}
          name={user.name}
          avatar={user.avatar}
          email={user.email}
          phone={user.phone}
          address={user.address}
        />
      ))} 
      <Todo />
      <ContohUseRef />
    </div>
  )
}

export default App;