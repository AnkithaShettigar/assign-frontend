import React from 'react';
import './Header.css';

const Career = () => {
  return (
    <div className="carmain" id="career">
      <h2>WHO WE ARE</h2>
      <div className="car">
        {' '}
        <div className="cartxt">
          <p>
            Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA), BlockChain and Internet of Things
            (IoT).
          </p>
          <p>
            At Rubixe™, we make your business more efficient, more predictable
            and more effective, turning complex challenges into solutions by
            leveraging disruptive technologies, providing a strategic
            competitive advantage.
          </p>
        </div>
        <div className="carimg">
          <div className="cartop"></div>
          <div className="carbottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Career;
