import { useState } from 'react'

export default function LoginForm() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Frontend demo only. No account service is connected.')
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Login</h2>
        <p className="form-description">Enter your details to preview the login form.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="login-email">Email address</label><input className="form-control" id="login-email" name="email" type="email" required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="login-password">Password</label><input className="form-control" id="login-password" name="password" type="password" required /></div>
          <button className="btn btn-primary" type="submit">Login</button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}