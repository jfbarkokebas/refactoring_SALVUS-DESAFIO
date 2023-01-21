import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../../components/FormComponent/FormComponent'

import './login.css'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()




  const handleSubmit = () => {
    setLoading(true)
    navigate('/')
  }

  return (
    <FormComponent handleSubmit={handleSubmit}>
      <h1>Entrar</h1>
      <input type="email" placeholder='email@email.com' /* required */
        value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder='******' /* required */
        value={password} onChange={e => setPassword(e.target.value)} />
      <button type='submit'>{loading ? 'Carregando...' : 'Acessar'}</button>
    </FormComponent>
  )
}

export default Login