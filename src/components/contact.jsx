import React from "react";
import logo from "../img/cactus logo.png";
import '../style.css';

class Contact extends React.Component {
  render() {
    return (

   
       <section id="contact">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <div className="contact-mf">
                  <div className="row">
                    <div className="form-contact">
                      <div className="title-box-1  ml-lg-4">
                        <h5 className="title-left2 ">Let's chat!</h5>
                        
                      </div>
                      <div>
                     
                        <div class="round" >
                          <div class="floating">
                            <img class="tossing" src={logo}/>
                          </div>
                        </div>
                        <div class="round2 " >
                          <div class="floating2">
                            <img class="tossing2" src={logo}/>
                          </div>
                        </div>
                        <div class="round3 " >
                          <div class="floating3">
                            <img class="tossing3" src={logo}/>
                          </div>
                        </div>
                        <form
                          action="https://formspree.io/f/xqkgnyek"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <br></br>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 button3">
                              <button
                                type="submit"
                                className="button3 button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
       
                    </div>
                    
                    <div className="col-md-6 title-box-2 pt-md-0">
                 
                 {/* <!-- <ul class="list-ico">
                         <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                         <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                         <li><span class="ion-email"></span> contact@example.com</li>
                         </ul> --> */}
               
               <div className="socials d-none d-xl-block">
                 <ul>
                   <li>
                     <a
                       href="https://codepen.io/joseph-a-ortiz"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <span className="ico-circle ">
                         <i className="ion-social-codepen"></i>
                       </span>
                     </a>
                   </li>
                   <li>
                     <a
                       href="https://github.com/joseph-a-ortiz"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <span className="ico-circle">
                         <i className="ion-social-github"></i>
                       </span>
                     </a>
                   </li>
                   <li>
                     <a
                       href="https://www.linkedin.com/in/joseph-ortiz-76385089/"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <span className="ico-circle">
                         <i className="ion-social-linkedin"></i>
                       </span>
                     </a>
                   </li>
                 </ul>
               </div>
               </div>
               </div>
            
          </div>
              
                  </div>
                </div>
              </div>
   
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
        </section>
    );
  }
}

export default Contact;
