import { useState } from 'react'

export default function AdminDeleteForm({ records = [], onDelete }) {
  const [selectedId, setSelectedId] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!records.some((record) => record.id === selectedId)) return
    onDelete('admin', selectedId)
    setSelectedId('')
    setMessage('Admin deleted.')
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Delete Admin</h2>
        <p className="form-description">Choose an administrator to remove.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="admin-delete-record">Admin record</label><select className="form-select" id="admin-delete-record" value={selectedId} onChange={(event) => { setSelectedId(event.target.value); setMessage('') }} required disabled={!records.length}><option value="" disabled>Select an admin</option>{records.map((record) => <option key={record.id} value={record.id}>{record.name} ({record.email})</option>)}</select></div>
          <button className="btn btn-outline-danger" type="submit" disabled={!selectedId}>Delete admin</button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}