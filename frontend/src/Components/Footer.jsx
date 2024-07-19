import React from 'react';

export const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="text-white text-center text-lg-start" style={{backgroundColor: "#23242a"}}>
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">About company</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque corrupti.
              </p>   
              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                molestias.
              </p>
                       </div>
            <div className=" flex col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className='ml-[450px] mt-4' >
                <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-facebook-f"></i></a>
                <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-dribbble"></i></a>
                <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-twitter"></i></a>
                <a type="button" className="btn btn-floating btn-warning btn-lg mr-2"><i className="fab fa-google-plus-g"></i></a>
              </div>      
              <div className='ml-[250px] mt-4'>
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
  Raise a ticket
</button></div>
              </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              {/* Column 4 content goes here */}
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  )
}