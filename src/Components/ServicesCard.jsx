import React from 'react'

export default function ServicesCard({title , icon , description}) {

  return (
    <div className={`col-md-5 shadow px-4 py-3 rounded`}>
        <div className={`d-flex justify-content-between align-items-center mb-3`}>
            <p className='mb-0'>{title}</p><div>{icon}</div>
        </div>
        <p>{description}</p>
    </div>
  )
}
