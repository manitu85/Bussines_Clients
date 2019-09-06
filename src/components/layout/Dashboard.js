import React from 'react'
import Clients from '../clients/Clients'
import Sidebar from '../layout/Sidebar'

export default () => {
  return (
    <div className="row mt-5">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  )
}
