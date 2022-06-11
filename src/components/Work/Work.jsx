import React from 'react'

const Work = (props) => {
  return (
    <div className="work p-3">
            <h5 className="right fw-bold">{props.role}</h5>
            <h6 className="right fw-bold">{props.company}</h6>
            <p className="">{props.details}</p>
        </div>
  )
}

export default Work