import { useState } from 'react'

export default function AdminUpdateForm({ records = [], onUpdate }) {
  const [selectedId, setSelectedId] = useState('')
  const [form, setForm] = useState({ name: '', email: '', role: '' })
  const selectedRecord = records.find((record) => record.id === selectedId)

  function handleSelect(event) {
    const record = records.find((item) => item.id === event.target.value)
    setSelectedId(event.target.value)
    setForm(record ? { name: record.name, email: record.email, role: record.role } : { name: '', email: '', role: '' })
  }

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (selectedRecord) onUpdate('admin', selectedId, form)
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Update Admin</h2>
        <p className="form-description">Select an admin, edit the details, and save.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="admin-update-record">Admin record</label><select className="form-select" id="admin-update-record" value={selectedRecord ? selectedId : ''} onChange={handleSelect} required><option value="" disabled>Select an admin</option>{records.map((record) => <option key={record.id} value={record.id}>{record.name} ({record.email})</option>)}</select></div>
          {selectedRecord && <><div className="mb-3"><label className="form-label" htmlFor="admin-update-name">Full name</label><input className="form-control" id="admin-update-name" name="name" value={form.name} onChange={handleChange} required /></div><div className="mb-3"><label className="form-label" htmlFor="admin-update-email">Email address</label><input className="form-control" id="admin-update-email" name="email" type="email" value={form.email} onChange={handleChange} required /></div><div className="mb-3"><label className="form-label" htmlFor="admin-update-role">Role</label><select className="form-select" id="admin-update-role" name="role" value={form.role} onChange={handleChange} required><option>Administrator</option><option>Moderator</option></select></div></>}
          <button className="btn btn-primary" type="submit" disabled={!selectedRecord}>Save admin</button>
        </form>
      </div>
    </section>
  )
}