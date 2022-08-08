import React from 'react'

const Footer = () => {
  return (
    <footer class="footer py-3 container-fluid">
        <hr />
        <div class="container">
            {/* <div class="row">
                <div class="col-md-4">
                    <p>&copy; {new Date().getFullYear()} Olulode Olatunbosun</p>
                </div>
                <div class="col-md-8 d-md-flex justify-content-md-around justify-content-between">
                    <a href="">holarthunbhosun@gmail.com</a>
                    <a href="" class="mx-2 mx-md-0">Twitter</a>
                    <a href="">Github</a>
                </div>
            </div> */}

            <div class="row"> 
                <div class="col-12 d-md-flex justify-content-between"> 
                        <p><span className="fw-bold">Development: </span> &nbsp;  <a href="https://oluwatoyin.vercel.app/" target="_blank">Akinbobola Oluwatoyin</a></p> 
                        <p className='mb-0'>&copy; {new Date().getFullYear()} Olulode Olatunbosun</p>
                </div>
            </div>
        </div>
  </footer>
  )
}

export default Footer