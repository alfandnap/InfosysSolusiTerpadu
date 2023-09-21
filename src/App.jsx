import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch} from "react-redux";
import { submitLogin } from './stores/action';
import { useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function submit(e) {
    e.preventDefault()

    const action = {
      type: 'login',
      payload: formData
    }
    await dispatch(action)

    navigate('/dashboard')
  }

  return (
    <>

      <form onSubmit={submit} action="post">
        <p>username</p>
        <input onChange={handleChange} type="text" name='username' />

        <p>password</p>
        <input onChange={handleChange} type="password" name='password' /><br /><br />

        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default App
