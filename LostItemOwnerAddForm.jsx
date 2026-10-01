import { useState } from 'react'

const emptyForm = { name: '', email: '', item: '', location: '' }

export default function LostItemOwnerAddForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAdd('owner', form)
    setForm({ ...emptyForm })
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Add Lost Item Owner</h2>
        <p className="form-description">Add a person reporting a lost item.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="owner-add-name">Full name</label><input className="form-control" id="owner-add-name" name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="owner-add-email">Email address</label><input className="form-control" id="owner-add-email" name="email" type="email" value={form.email} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="owner-add-item">Item lost</label><input className="form-control" id="owner-add-item" name="item" value={form.item} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="owner-add-location">Last seen location</label><input className="form-control" id="owner-add-location" name="location" value={form.location} onChange={handleChange} required /></div>
          <button className="btn btn-primary" type="submit">Add lost item owner</button>
        </form>
      </div>
    </section>
  )
}