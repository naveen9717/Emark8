import React, { Component } from "react";

class Footer extends Component {
  
  render() {
    return (
    <div>
  <footer id="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="footer-top-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" /> <span>facebook</span> </a></li>
              <li><a href="#"><i className="fa fa-twitter" /> <span>twitter</span></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /> <span>linkedin</span></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /> <span>dribbble</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="widget-area">
            <div className="widget-footer">
              <h5 className="widget-title">SMARTWP</h5>
              <div className="about-widget">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque eos itaque fugiat magnam impedit nobis assumenda pariatur voluptas deserunt, praesentium, accusantium sed error suscipit quod quos earum quas cum.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mobile-gap-p-50">
          <div className="widget-area">
            <div className="widget-footer">
              <h5 className="widget-title">Recent comments</h5>
              <div className="comments-widget">
                <ul>
                  <li>
                    <div className="comments-box">
                      <div className="comment-date">29.12.2017</div>
                      <div className="comment-title">Standard post with video</div>
                    </div>
                  </li>
                  <li>
                    <div className="comments-box">
                      <div className="comment-date">29.12.2017</div>
                      <div className="comment-title">Standard post with video</div>
                    </div>
                  </li>
                  <li>
                    <div className="comments-box">
                      <div className="comment-date">29.12.2017</div>
                      <div className="comment-title">Standard post with video</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mobile-gap-p-50">
          <div className="widget-area">
            <div className="widget-footer">
              <h5 className="widget-title">Recent posts</h5>
              <div className="recent-post-widget">
                <ul>
                  <li>
                    <div className="recent-post-box">
                      <div className="r-post-con">
                        <h5>Aenean ligula tur niba molestie dolor</h5>
                        <p>Jan 28, 2017</p>
                      </div>
                      <div className="r-post-img">
                        <img src="assets/images/footer-post1.jpg" alt className="img-responsive" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="recent-post-box">
                      <div className="r-post-con">
                        <h5>Aenean ligula tur niba molestie dolor</h5>
                        <p>Jan 28, 2017</p>
                      </div>
                      <div className="r-post-img">
                        <img src="assets/images/footer-post1.jpg" alt className="img-responsive" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mobile-gap-p-50">
          <div className="widget-area">
            <div className="widget-footer">
              <h5 className="widget-title">contact info</h5>
              <div className="contact-info-widget">
                <ul>
                  <li><i className="flaticon-home" /> <span>7777 modern Avenue, Suite 05, New York, CA 9077, USA </span> </li>
                  <li><i className="flaticon-technology-2" /> <span>Fax: 575 051 000 <br />Phone: 0123 456 789</span></li>
                  <li><i className="flaticon-note" /> <span>info@yourwebsite.com <br />www.yourwebsite.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <p className="copytext">© 2017 Copyright <a href="#">Smartwp</a>. All rights reserved</p>
          </div>
          <div className="col-xs-12 col-sm-8">
            <div className="footer-bottom-menu">
              <ul>
                <li><a href="#">Privacy Police</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    );
  }
}

export default Footer