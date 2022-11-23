import React from "react";
import "./terms.css";
import { useNavigate } from "react-router-dom";
const Terms = () => {
  const navigate=useNavigate();
  function back(){
    navigate("/");
  }
  return (
    <div className="termsboard">
      <h1>Terms and Conditions</h1>
      <p>
        PURPOSE:<hr/>
         EasyJobs.com is intended only to serve as a preliminary medium
        of contact and exchange of information for its users / members /
        visitors who have a bona fide intention to contact and/or be contacted
        for the purposes related to genuine existing job vacancies and for other
        career enhancement services. <hr/> 
        USE TO BE IN CONFORMITY WITH THE PURPOSE
        EasyJobs.com (and related products) or service or product that is
        subscribe to or used (whether the same is paid for by you or not) is
        meant for the Purpose and only the exclusive use of the
        subscriber/registered user. Copying or downloading or recreating or
        sharing passwords or sublicensing or sharing in any manner which is not
        in accordance with these terms, is a misuse of the platform or service
        or product and IEIL reserves its rights to act in such manner as to
        protect its loss of revenue or reputation or claim damages including
        stopping your service or access and reporting to relevant authorities.
        In the event you are found to be copying or misusing or transmitting or
        crawling any data or photographs or graphics or any information
        available on EasyJobs.com for any purpose other than that being a
        bonafide Purpose, we reserve the right to take such action that we deem
        fit including stopping access and claiming damages<hr/> 
        The site is a public
        site with free access and EasyJobs assumes no liability for the quality
        and genuineness of responses. EasyJobs (India) Ltd. cannot monitor the
        responses that a person may receive in response to information he/she
        has displayed on the site. The individual/company would have to conduct
        its own background checks on the bonafide nature of all response(s).<hr/> You
        give us permission to use the information about actions that you have
        taken on EasyJobs.com in connection with ads, offers and other content
        (whether sponsored or not) that we display across our services, without
        any compensation to you. We use data and information about you to make
        relevant suggestions and recommendation to you and others. The platform
        may contain links to third party websites, these links are provided
        solely as convenience to You and the presence of these links should not
        under any circumstances be considered as an endorsement of the contents
        of the same, if You chose to access these websites you do so at your own
        risk. Whilst using this platform an obligation is cast upon you to only
        provide true and correct information and in the case of creating a
        profile you undertake to at all times keep the information up to date.
        EasyJobs (India) Ltd. will not be liable on account of any inaccuracy of
        information on this web site. It is the responsibility of the visitor to
        further research the information on the site. Any breach of privacy or
        of the information provided by the consumer to EasyJobs (India) Ltd. to
        be placed on the website by technical or any other means is not the
        responsibility of EasyJobs (India) Ltd. EasyJobs (India) Ltd. does not
        guarantee confidentiality of information provided to it by any person
        acquiring/using all/any information displayed on the EasyJobs.com
        website or any of its other websites / domains owned and operated by
        EasyJobs (India) Ltd.
      </p>
      <button onClick={back}>Go Back</button>
    </div>
  );
};

export default Terms;
