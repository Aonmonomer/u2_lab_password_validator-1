import { useState } from 'react'
import '../styles/Validator.css'

const Validator = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(null)
  const [passwordConfirm, setPasswordConfirm] = useState(null)
  const [message, setMessage] = useState('Passwords must match')

  const handleUsername = (event) => {
    setUsername(event.currentTarget.value)
  }
  const handlePassword = (event) => {
    setPassword(event.currentTarget.value)
  }

  const handlePasswordConfirm = (event) => {
    setPasswordConfirm(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username) setMessage('Username is required')
    else if (!password || password === '') setMessage('Password is required')
    else if (!passwordConfirm) setMessage('Confirm Password is required')
    else if (password.length < '7' || passwordConfirm.length < '7')
      setMessage('Passwords must be at least 7 characters')
    else if (password !== passwordConfirm)
      setMessage('Password does not match.')
    else if (password === passwordConfirm) setMessage('Valid password.')
  }

  const handleReset = (event) => {
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
    setMessage('')
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleUsername}
        />
        <label htmlFor="username">Username</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handlePassword}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={handlePasswordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
        <p>{message}</p>
      </form>
    </div>
  )
}

export default Validator
