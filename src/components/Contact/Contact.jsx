import React from 'react'
import Star from '../../assets/star.svg'

const Contact = () => {
  return (
    <section class="container-fluid contact pb-5" id="contact">
      
    <div class="container">
      <div class="row">
        <div className="mb-md-5">
          <h1 className='mb-0'>.say hi</h1>
          <div className="pb-5 text-center">
            <img src={Star} className="star" alt="" />
          </div>
        </div>
        <div className='mt-5'>
          <div className='mb-3'>
            <h6 className="fw-bold mb-0">EMAIL</h6>
            <h2>holarthunbhosun@gmail.com</h2> 
          </div>
          <hr />
          <div className='mt-4'>
            <h6 className="fw-bold mb-0">CONNECT</h6>
            <div className="d-flex gap-5 mb-5">
                <h2 className='text-decoration-underline'>Github</h2>
                <h2 className='text-decoration-underline'>Twitter</h2>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact