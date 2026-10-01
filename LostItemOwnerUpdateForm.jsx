import { useState } from 'react'

export default function LostItemOwnerUpdateForm({ records = [], onUpdate }) {
  const [selectedId, setSelectedId] = useState('')
  const [form, setForm] = useState({ name: '', email: '', item: '', location: '' })
  const selectedRecord = records.find((record) => record.id === selectedId)

  function handleSelect(event) {
    const record = records.find((item) => item.id === event.target.value)
    setSelectedId(event.target.value)
    setForm(record ? { name: record.name, email: record.email, item: record.item, location: record.location } : { name: '', email: '', item: '', location: '' })
  }

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (selectedRecord) onUpdate('owner', selectedId, form)
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Update Lost Item Owner</h2>
        <p className="form-description">Select a report, edit its details, and save.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="owner-update-record">Lost item record</label><select className="form-select" id="owner-update-record" value={selectedRecord ? selectedId : ''} onChange={handleSelect} required><option value="" disabled>Select a report</option>{records.map((record) => <option key={record.id} value={record.id}>{record.name} ({record.item})</option>)}</select></div>
          {selectedRecord && <><div className="mb-3"><label className="form-label" htmlFor="owner-update-name">Full name</label><input className="form-control" id="owner-update-name" name="name" value={form.name} onChange={handleChange} required /></div><div className="mb-3"><label className="form-label" htmlFor="owner-update-email">Email address</label><input className="form-control" id="owner-update-email" name="email" type="email" value={form.email} onChange={handleChange} required /></div><div className="mb-3"><label className="form-label" htmlFor="owner-update-item">Item lost</label><input className="form-control" id="owner-update-item" name="item" value={form.item} onChange={handleChange} required /></div><div className="mb-3"><label className="form-label" htmlFor="owner-update-location">Last seen location</label><input className="form-control" id="owner-update-location" name="location" value={form.location} onChange={handleChange} required /></div></>}
          <button className="btn btn-primary" type="submit" disabled={!selectedRecord}>Save lost item report</button>
        </form>
      </div>
    </section>
  )
}