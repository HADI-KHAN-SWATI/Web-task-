import { useState } from 'react'

export default function RegisterForm() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Frontend demo only. No account service is connected.')
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Register</h2>
        <p className="form-description">Enter your details to preview the registration form.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="register-name">Full name</label><input className="form-control" id="register-name" name="name" required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="register-email">Email address</label><input className="form-control" id="register-email" name="email" type="email" required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="register-password">Password</label><input className="form-control" id="register-password" name="password" type="password" required /></div>
          <button className="btn btn-primary" type="submit">Register</button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}