import { useState } from 'react'

export default function LostItemOwnerDeleteForm({ records = [], onDelete }) {
  const [selectedId, setSelectedId] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!records.some((record) => record.id === selectedId)) return
    onDelete('owner', selectedId)
    setSelectedId('')
    setMessage('Lost item report deleted.')
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Delete Lost Item Owner</h2>
        <p className="form-description">Choose a lost item report to remove.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="owner-delete-record">Lost item record</label><select className="form-select" id="owner-delete-record" value={selectedId} onChange={(event) => { setSelectedId(event.target.value); setMessage('') }} required disabled={!records.length}><option value="" disabled>Select a report</option>{records.map((record) => <option key={record.id} value={record.id}>{record.name} ({record.item})</option>)}</select></div>
          <button className="btn btn-outline-danger" type="submit" disabled={!selectedId}>Delete report</button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}