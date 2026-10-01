import { useState } from 'react'

const emptyForm = { name: '', email: '', item: '', location: '' }

export default function FinderAddForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAdd('finder', form)
    setForm({ ...emptyForm })
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Add Finder</h2>
        <p className="form-description">Add a person who found an item.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="finder-add-name">Full name</label><input className="form-control" id="finder-add-name" name="name" value={form.name} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="finder-add-email">Email address</label><input className="form-control" id="finder-add-email" name="email" type="email" value={form.email} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="finder-add-item">Item found</label><input className="form-control" id="finder-add-item" name="item" value={form.item} onChange={handleChange} required /></div>
          <div className="mb-3"><label className="form-label" htmlFor="finder-add-location">Found location</label><input className="form-control" id="finder-add-location" name="location" value={form.location} onChange={handleChange} required /></div>
          <button className="btn btn-primary" type="submit">Add finder</button>
        </form>
      </div>
    </section>
  )
}