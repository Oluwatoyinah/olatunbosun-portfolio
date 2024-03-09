import React from "react";

const Footer = () => {
  return (
    <footer class="footer py-3 container-fluid">
      <hr />
      <div class="container"> 

        <div class="row">
          <div class="col-12 d-md-flex justify-content-between">
            <p>
              <span className="fw-bold">Developed by: </span> &nbsp;{" "}
              <a href="https://oluwatoyin.vercel.app/" target="_blank">
                Akinbobola Oluwatoyin
              </a>
            </p>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Olulode Olatunbosun
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
