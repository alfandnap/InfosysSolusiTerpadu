import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useSelector } from "react-redux";
// import { submitLogin } from './stores/action';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { username } = useSelector(state => state)
  const navigate = useNavigate();

  function backHandle() {
    navigate('/')
  }

  return (
    <>

      <h1>halo {username}</h1>
      <button onClick={backHandle}>Back</button>
    </>
  )
}

export default Dashboard
