import React, { Component } from "react";

class Contact extends Component {
  
  render() {
    return (
        <div>
  <section className="page-breadcrumb">
    <div className="breadcrumb-area">
      <div className="pattern-color">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="breadcrumb-part">
                <h2>Contact Us</h2>
                <p>Let’s keep in TOuch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact eb-gp-tb-100 eb-gm-b-50">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="section-title3">
            <h3 className="main-title3">Office Location</h3>
            <h5 className="sub-title3">Find us our corporate office</h5>
          </div>
          <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.10119721314!2d90.34941698257609!3d23.780676003357797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1495306654432" />
          </div>
        </div>
        <div className="col-sm-6 mobile-gap-p-50">
          <div className="section-title3">
            <h3 className="main-title3">Let's Keep in Touch</h3>
            <h5 className="sub-title3">If you have any project message me </h5>
          </div>
          <div className="contact-form">
            <form id="__vtigerWebForm main-contact-form" name="contact contact-form" action="http://crm.emark8.com/modules/Webforms/capture.php" method="post" acceptCharset="utf-8" encType="multipart/form-data">
              <input type="hidden" name="__vtrftk" defaultValue="sid:2d7cf6e5988ef86a53bdd34eb91e04963f298b68,1591433673" /><input type="hidden" name="publicid" defaultValue="331aef9df8adedd8b0a8a8046929c48b" /><input type="hidden" name="urlencodeenable" defaultValue={1} /><input type="hidden" name="name" defaultValue="contact" />
              <div className="form-group col-sm-12">
                <input type="text" name="firstname" className="name form-control" required="required" placeholder="Your Name*" />
              </div>
              <div className="form-group col-sm-12">
                <input type="text" name="lastname" className="name form-control" required="required" placeholder="Your Name*" />
              </div>
              <div className="form-group col-sm-12">
                <input type="email" name="email" className="email form-control" required="required" placeholder="Email*" />
              </div>
              <div className="col-sm-12">
                <select name="leadsource" data-label="leadsource" required hidden>
                  <option value>Select Value</option>
                  <option value="Facebook">Facebook</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Customer Care">Customer Care</option>
                  <option value="Google">Google</option>
                  <option value="Email">Primary Email</option>
                  <option value="SMS">SMS</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Website" selected>Website</option>
                  <option value="Reference">Reference</option>
                </select>
              </div>
              <div className="col-md-12 message-box">
                <textarea name="description" id="message" required="required" className="message" rows={6} placeholder="Write your message" defaultValue={""} />
              </div>                        
              <div className="col-md-12">
                <input type="submit" name="submit" className="submit" defaultValue="SEND REQUEST" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
  }
}

export default Contact