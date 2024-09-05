import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div class="landing-wrapper">
     
      <div id="heading">Drug-Health Monitoring System using Blockchain and React</div>
      <h2>This app is for simulation of Pharmaceutical Supply Chain.</h2>

      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ marginTop: "2%" }}>
          <li style={{ marginTop: "2%" }}>
             Users can see their data in real time using this frontend app
            like Current temperature and pressure ,Product info like id,weight
            etc ,worker id ,Location ,Delivery status and track the history of drug data over time.
          </li>
        </ul>
        <br></br>
        
      </div>
      <div class='developers' style={{
          width: "50%",
  
           display: "flex"
          // justifyContent: "center",
        }}>
          Developed by
          <ul style={{ marginTop: "2%"}}>
          <li style={{ marginTop: "2%", textAlign:'left' }}> Saikiran Burri   </li>
          <li style={{ marginTop: "2%", textAlign:'left' }}> Shivani Yerram </li>
          <li style={{ marginTop: "2%", textAlign:'left' }}> Tanooj Reddy Seelam  </li>
          <li style={{ marginTop: "2%", textAlign:'left' }}> Bhuvana Chendrica Gogineni </li>
        </ul>

        </div>
      
      
    </div>
  );
};

export default Home;
