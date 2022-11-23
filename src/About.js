import React from "react";
import './about.css';
import { useNavigate } from "react-router-dom";
const About = () => {

  const navigate=useNavigate()
  function back(){
    navigate("/");
  }
  return (
    <div className="aboutboard">
      <h1>About Us</h1>
      <p>
        EasyJobs has an in-depth understanding of the Indian consumer internet
        domain. With years of experience in the domain, strong cash flow
        generation and a diversified business portfolio, it one of the very few
        profitable pure play internet companies in the country. The company was
        incorporated on May 1, 1995 under the Companies Act, 1956 as EasyJobs
        (India) Private Limited and became a public limited company on April 27,
        2006. Starting with a classified recruitment online business,
        EasyJobs.com, EasyJobs has grown and diversified rapidly, setting
        benchmarks as a pioneer for others to follow. Driven by innovation,
        creativity, an experienced and talented leadership team and a strong
        culture of entrepreneurship, today, it is India’s premier online
        classifieds company in recruitment, matrimony, real estate, education
        and related services. Its business portfolio comprises: Recruitment:
        Online recruitment classifieds, www.EasyJobs.com, a clear market leader
        in the Indian e-recruitment space, www.EasuJobsgulf.com, a job site
        focused at the Middle East market, offline executive search
        (www.quadranglesearch.com) and a fresher hiring site
        (www.firstEasyJobs.com). Additionally, EasyJobs provides jobseekers
        value added services (EasyJob Fast Forward) such as resume writing.
      </p>
      <button onClick={back}>Go Back</button>
    </div>
  );
};

export default About;
