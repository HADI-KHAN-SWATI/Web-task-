import { useState } from 'react'

export default function FinderDeleteForm({ records = [], onDelete }) {
  const [selectedId, setSelectedId] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!records.some((record) => record.id === selectedId)) return
    onDelete('finder', selectedId)
    setSelectedId('')
    setMessage('Finder deleted.')
  }

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>Delete Finder</h2>
        <p className="form-description">Choose a finder record to remove.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><label className="form-label" htmlFor="finder-delete-record">Finder record</label><select className="form-select" id="finder-delete-record" value={selectedId} onChange={(event) => { setSelectedId(event.target.value); setMessage('') }} required disabled={!records.length}><option value="" disabled>Select a finder</option>{records.map((record) => <option key={record.id} value={record.id}>{record.name} ({record.email})</option>)}</select></div>
          <button className="btn btn-outline-danger" type="submit" disabled={!selectedId}>Delete finder</button>
          {message && <p className="form-status" role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}