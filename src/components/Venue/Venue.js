import React from 'react';

const Venue = () => (
  <div className="container-fluid bg-dark">
  <h2 className="text-light">Venue</h2>
  {/* First Row */}
    {/* First Col */}
        <div className="card bg-dark text-white">
          <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg2NzAyMDc3NjYz/istock_000002835238large.jpg" className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h2 className="card-title">1330 Fillmore</h2>
            <h4 className="card-title">The Fillmore Heritage Center</h4>
            <p className="card-text">1330 Fillmore St., San Francisco, CA 94115</p>
          </div>
        </div>
    <div className="row">
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-black text-white">
          <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg2NzAyMDc3NjYz/istock_000002835238large.jpg" className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h3 className="card-title">Entrance</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-dark text-white">
          <img src="https://storage.googleapis.com/hiptechconference/venue_images/mainstage.jpg" className="card-img" alt="Main Stage"/>
          <div className="card-img-overlay">
            <h3 className="card-title">Main Stage</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-dark text-white">
          <img src="https://storage.googleapis.com/hiptechconference/venue_images/theatreroom.jpg" className="card-img" alt="Theatre Room"/>
          <div className="card-img-overlay">
            <h3 className="card-title">Theatre Room</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-dark text-white">
          <img src="https://storage.googleapis.com/hiptechconference/venue_images/fillmoreheritagecenter.jpg" className="card-img" alt="Main Bar & Lounge Area"/>
          <div className="card-img-overlay">
            <h3 className="card-title">Main Bar & Lounge</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-dark text-white">
          <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg2NzAyMDc3NjYz/istock_000002835238large.jpg" className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-xl-4">
        <div className="card bg-dark text-white">
          <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3ODc5MDg2NzAyMDc3NjYz/istock_000002835238large.jpg" className="card-img" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Venue;
