import React from 'react';


export const Analytics = () => {
  return (
    <section className="section-analytics">
      <div className="container grid grid-four-cols">
        <div className="div1">
          <h2>Member Retention Rate</h2><br/>
          <p>Monthly Retention Rate: 92%</p>
        </div>
        <div className="div1">
          <h2>Overall Client Satisfaction</h2><br/>
          <p>Cleanliness: 4.9/5 <br/>
            Staff Support: 4.7/5
          </p>
        </div>
        <div className="div1">
          <h2>Improvement in Cardio Fitness</h2><br/>
          <p>15% increase in VO2 max within 6 weeks</p>
        </div>
        <div className="div1">
          <h2>Nutritional Program Success</h2><br/>
          <p>Average Dietary Improvement: 20% increase in healthy eating habits within 3 months</p>
        </div>
      </div>
    </section>
  );
};
