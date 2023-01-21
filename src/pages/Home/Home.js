import { useState } from 'react'
import FormComponent from '../../components/FormComponent/FormComponent'




const Home = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    alert('funcionou ...')
  }

  return (
    <FormComponent>
      <h1>Seus dados:</h1>
      <input type="text" placeholder='Nome completo' /* required */
        value={name} onChange={e => setName(e.target.value)} />

      <input type="email" placeholder='email@email.com' /* required */
        value={email} onChange={e => setEmail(e.target.value)} />

      <input type="password" placeholder='******' /* required */
        value={password} onChange={e => setPassword(e.target.value)} />

      <input type="password" placeholder='Confirme sua senha' /* required */
        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

      <button type='submit'>{loading ? 'Carregando...' : 'Acessar'}</button>
    </FormComponent>
  )
}

export default Home