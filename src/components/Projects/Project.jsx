import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'

const Project = (props) => {
  return (
    <div className="py-2 box">
            <div className="col-md-9">
              <a href="" className='name'>{props.projectname}</a>
              <p className="">{props.projectDetails}</p>
              <div className="d-md-none view">
                <a href="">VIEW SITE <FaExternalLinkAlt className='ms-2' /></a>
              </div>
            </div>
    </div>
  )
}

export default Project