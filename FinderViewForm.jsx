import { useState } from 'react'

export default function FinderViewForm({ records = [] }) {
  const [query, setQuery] = useState('')
  const filteredRecords = records.filter((record) => `${record.name} ${record.email} ${record.item} ${record.location}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="form-card">
      <div className="form-card-body">
        <h2>View Finders</h2>
        <p className="form-description">Search and view finder records in this session.</p>
        <form className="row g-2" onSubmit={(event) => event.preventDefault()}>
          <div className="col"><label className="visually-hidden" htmlFor="finder-view-search">Search finders</label><input className="form-control" id="finder-view-search" type="search" placeholder="Search finders" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
          <div className="col-auto"><button className="btn btn-outline-primary" type="submit">Search</button></div>
        </form>
        {filteredRecords.length ? <ul className="list-group list-group-flush mt-3">{filteredRecords.map((record) => <li className="list-group-item px-0" key={record.id}><strong>{record.name}</strong><div className="small text-secondary">{record.email} · Found {record.item} at {record.location}</div></li>)}</ul> : <p className="text-secondary small mt-3 mb-0">No finder records found.</p>}
      </div>
    </section>
  )
}