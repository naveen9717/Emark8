import React, { Component } from "react";

class Home extends Component {
  
  render() {
    return (
    <div>
  <section className="slider-area">
    <div className="slider-color">
      <div className="slider-pro sp-nav" id="index-slider2" data-slider-width={1920} data-slider-height={930}>
        <div className="sp-slides">
          <div className="sp-slide">
            <img className="sp-image" src="assets/images/slider1.png" height={930} width={450} alt="slider 1" />
            <h3 className="sp-layer sp-caption-title text-uppercase" data-horizontal="20%" data-vertical="35%" data-show-delay={300} data-show-transition="left" data-hide-transition="left">
              Hello world!
            </h3>
            <p className="sp-layer sp-caption-description text-uppercase" data-horizontal="20%" data-vertical="48%" data-show-transition="right" data-show-delay={900} data-hide-transition="left">
              We are creative studio
            </p>
          </div>
          <div className="sp-slide">
            <img className="sp-image" src="assets/images/slider2.png" height={930} width={1920} alt="slider 2" />
            <h3 className="sp-layer sp-caption-title" data-horizontal="20%" data-vertical="35%" data-show-delay={300} data-show-transition="left" data-hide-transition="left">
              CREATIVE STUDIO!
            </h3>
            <p className="sp-layer sp-caption-description" data-horizontal="20%" data-vertical="48%" data-show-transition="right" data-show-delay={900} data-hide-transition="left">
              we are provide quility design
            </p>
          </div>
          <div className="sp-slide">
            <img className="sp-image" src="assets/images/slider1.png" height={930} width={1920} alt="slider 3" />
            <h3 className="sp-layer sp-caption-title" data-horizontal="20%" data-vertical="35%" data-show-delay={300} data-show-transition="left" data-hide-transition="left">
              CREATIVE TEAM!
            </h3>
            <p className="sp-layer sp-caption-description" data-horizontal="20%" data-vertical="48%" data-show-transition="right" data-show-delay={900} data-hide-transition="left">
              we are provide quility design
            </p>
          </div>
          <div className="sp-slide">
            <img className="sp-image" src="assets/images/slider2.png" height={930} width={1920} alt="slider 2" />
            <h3 className="sp-layer sp-caption-title" data-horizontal="20%" data-vertical="35%" data-show-delay={300} data-show-transition="left" data-hide-transition="left">
              CREATIVE THEME!
            </h3>
            <p className="sp-layer sp-caption-description" data-horizontal="20%" data-vertical="48%" data-show-transition="right" data-show-delay={900} data-hide-transition="left">
              we are provide quility design
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about eb-gp-tb-100">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img src="assets/images/about.jpg" className="img-responsive" alt="about" />
        </div>
        <div className="col-sm-6">
          <div className="section-title eb-about-title">
            <h2 className="main-title">We Are Best Software Company</h2>
          </div>
          <div className="eb-about-contents">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur necessitatibus mollitia quas ipsum dolor enim dolorum rem, soluta sunt. Aspernatur quasi expedita voluptatum quisquam illum ipsum, necessitatibus earum doloribus cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iste sapiente expedita, odio tenetur ducimus assumenda nam incidunt aliquam reprehenderit autem eum, eius vero ullam doloremque nisi! Asperiores, doloremque, animi.</p>
            <div className="pull-right">
              <h4 className="signature-title">king regards</h4>
              <div className="signature">john smith</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="call-to-action eb-gp-tb-60">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="call-action-wrap">
            <div className="row">
              <div className="col-sm-8 col-xs-12">
                <h2 className="call-title">Are You Impressed With Our Amazing Portfolio?</h2>
                <h3 className="call-sub-title">If You Start Building Your Next Project With us</h3>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="button-group pull-right">
                  <a href="#" className="eb-btn-big">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service-slider-section eb-gp-tb-100">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="main-title">What We Provide ?</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="slider-service owl-carousel owl-theme carousel-slider" data-margin={30} data-man480={1} data-min480={1} data-min768={2} data-min992={3} data-min1200={3} data-loop="true" data-video="false" data-center="false" data-pagination="false" data-navigation="true" data-auto-play="false" data-autoplay-timeout={6000} data-stop-on-hover="true">
            <div className="carousel_item">
              <div className="service-item eb-service-item text-center">
                <div className="service-icon"><i className="eb-icon flaticon-computer" /> </div>
                <h4>Web Development</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem when an unknown printer took scrambled it to make a type</p>
                <a href="#" className="more-btn">Read More</a>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-service-item text-center">
                <div className="service-icon"><i className="eb-icon flaticon-computer-2" /> </div>
                <h4>Web Design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem when an unknown printer took scrambled it to make a type</p>
                <a href="#" className="more-btn">Read More</a>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-service-item text-center">
                <div className="service-icon"><i className="eb-icon flaticon-pencil" /> </div>
                <h4>Graphic Design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem when an unknown printer took scrambled it to make a type</p>
                <a href="#" className="more-btn">Read More</a>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-service-item text-center">
                <div className="service-icon"><i className="eb-icon flaticon-graphic-design" /> </div>
                <h4>UX Design</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry lorem when an unknown printer took scrambled it to make a type</p>
                <a href="#" className="more-btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="project-slider-section eb-no-gap">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="main-title">Our Latest Project</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="project-slider owl-carousel owl-theme carousel-slider" data-margin={30} data-man480={1} data-min480={1} data-min768={2} data-min992={3} data-min1200={3} data-loop="true" data-video="false" data-center="false" data-pagination="false" data-navigation="true" data-auto-play="false" data-autoplay-timeout={6000} data-stop-on-hover="true">
            <div className="carousel_item">
              <div className="service-item eb-project-item text-center">
                <img src="assets/images/latest-project/project1.jpg" alt className="img-responsive" />
                <div className="slider-mask">
                  <div className="mask-wrap">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-project-item text-center">
                <img src="assets/images/latest-project/project2.jpg" alt className="img-responsive" />
                <div className="slider-mask">
                  <div className="mask-wrap">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-project-item text-center">
                <img src="assets/images/latest-project/project3.jpg" alt className="img-responsive" />
                <div className="slider-mask">
                  <div className="mask-wrap">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_item">
              <div className="service-item eb-project-item text-center">
                <img src="assets/images/latest-project/project1.jpg" alt className="img-responsive" />
                <div className="slider-mask">
                  <div className="mask-wrap">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimonial-section eb-gp-tb-100">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="main-title">Happy Client Say ?</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="slider-service owl-carousel owl-theme carousel-slider" data-margin={28} data-man480={1} data-min480={1} data-min768={2} data-min992={2} data-min1200={2} data-loop="true" data-video="false" data-center="false" data-pagination="false" data-navigation="true" data-auto-play="true" data-autoplay-timeout={8000} data-stop-on-hover="true">
            <div className="carousel_item">
              <div className="testimonial-wrap text-center top-quote-box">
                <img className="img-responsive eb-slider-img" src="assets/images/testimonial1.png" alt="testimonial" />
                <p className="tst-body">“ cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <h5 className="tst-author">-Jhon Smith</h5>
                <span className="tst-division">Internet Marketer</span>
              </div>
            </div>
            <div className="carousel_item">
              <div className="testimonial-wrap text-center bottom-quote-box">
                <img className="img-responsive eb-slider-img" src="assets/images/testimonial2.png" alt="testimonial" />
                <p className="tst-body">“ cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <h5 className="tst-author">-Jhon Smith</h5>
                <span className="tst-division">Internet Marketer</span>
              </div>
            </div>
            <div className="carousel_item">
              <div className="testimonial-wrap text-center top-quote-box">
                <img className="img-responsive eb-slider-img" src="assets/images/testimonial1.png" alt="testimonial" />
                <p className="tst-body">“ cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <h5 className="tst-author">-Jhon Smith</h5>
                <span className="tst-division">Internet Marketer</span>
              </div>
            </div>
            <div className="carousel_item">
              <div className="testimonial-wrap text-center bottom-quote-box">
                <img className="img-responsive eb-slider-img" src="assets/images/testimonial2.png" alt="testimonial" />
                <p className="tst-body">“ cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <h5 className="tst-author">-Jhon Smith</h5>
                <span className="tst-division">Internet Marketer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="home-latest-blog eb-gp-t-100">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="main-title">Our Latest Blog</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 featured">
          <div className="row">
            <div className="col-sm-4">
              <div className="latest-blog">
                <div className="blog-content">
                  <h4>Most Important tools for UI design</h4>
                  <p>Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 9 when an unknown printer took a galley of type is mbled it to make a type specimen book. It has ived not only five centuries but also the leap that Ipsum is simply dummy text of the printing and setting industry. Lorem Ipsum has been industry standard dummy text ever since the 1500s.</p>
                  <a href="#" className="blog-more-btn">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="video-modal">
                <img alt src="assets/images/blog1.jpg" className="img-responsive" />
                <div className="mask-content">
                  <a data-toggle="modal" data-target="#Videomodal">
                    <i className="eb-icon flaticon-play-button" />
                  </a>
                </div>
              </div>
              <div className="modal fade" id="Videomodal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div className="modal-body">
                      <iframe src="https://www.youtube.com/embed/9No-FiEInLA" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="latest-blog">
            <div className="blog-media">
              <img src="assets/images/blog2.jpg" alt className="img-responsive" />
            </div>
            <div className="blog-content">
              <h4>Most Important tools for design</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since </p>
              <a href="#" className="blog-more-btn">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="latest-blog">
            <div className="blog-media">
              <img src="assets/images/blog3.jpg" alt className="img-responsive" />
            </div>
            <div className="blog-content">
              <h4>Most Important tools for UI design</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since </p>
              <a href="#" className="blog-more-btn">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="latest-blog">
            <div className="blog-media">
              <img src="assets/images/blog4.jpg" alt className="img-responsive" />
            </div>
            <div className="blog-content">
              <h4>Most Important tools for UX design</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since </p>
              <a href="#" className="blog-more-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="client-logo-section eb-gp-tb-100 eb-gm-b-50">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="section-title">
            <h2 className="main-title">Our Clients Logo</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="slider-service client-logo-slider owl-carousel carousel-slider" data-margin={30} data-man480={1} data-min480={2} data-min768={2} data-min992={3} data-min1200={4} data-loop="true" data-video="false" data-center="false" data-pagination="false" data-navigation="true" data-auto-play="true" data-autoplay-timeout={8000} data-stop-on-hover="true">
            <div className="carousel_item">
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo1.png" className="grayscale" alt="client logo" />
              </div>
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo1.png" className="grayscale" alt="client logo" />
              </div>
            </div>
            <div className="carousel_item">
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo2.png" className="grayscale" alt="client logo" />
              </div>
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo2.png" className="grayscale" alt="client logo" />
              </div>
            </div>
            <div className="carousel_item">
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo3.png" className="grayscale" alt="client logo" />
              </div>
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo3.png" className="grayscale" alt="client logo" />
              </div>
            </div>
            <div className="carousel_item">
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo4.png" className="grayscale" alt="client logo" />
              </div>
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo4.png" className="grayscale" alt="client logo" />
              </div>
            </div>
            <div className="carousel_item">
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo5.png" className="grayscale" alt="client logo" />
              </div>
              <div className="client-logo-wrap">
                <img src="assets/images/client-logo/client-logo5.png" className="grayscale" alt="client logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
  }
}
export default Home