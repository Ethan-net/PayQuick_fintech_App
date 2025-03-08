// import React from "react";
import "./HowItWorks.css";
import BackgroundCurv from '../../assets/HeroSection Assets/images/Background Curv.svg'


  const HowItWorks = () => {
    const steps = [
      {
        number: 1,
        title: 'Register',
        description: 'Download quick pay from the Apple App Store or Google Play Store.',
      },
      {
        number: 2,
        title: 'Verify',
        description: 'Complete the sign-up process, confirm your phone number.',
      },
      {
        number: 3,
        title: 'Explore',
        description: 'Link card and enjoy your simple plan all in one app.',
      },
    ];
  

  return (
    <section className="container">

<img className="backgroundCurv" src={BackgroundCurv} alt="" />
 
<div className="how-it-works">
      <h4 className="process">- PROCESS</h4>
      <h2 className="title">How it works</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
            {index !== steps.length - 1 && <div className="dashed-line"></div>}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default HowItWorks;

