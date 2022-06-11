import React from 'react'

const Tool = (props) => {
  return (
    <div className="col-lg-2 col-md-3 col-4 text-center">
        <img src={props.imgUrl} alt="" />
        <p className='fw-bold'>{props.toolname}</p>
    </div>
  )
}

export default Tool