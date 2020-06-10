import React, { Component } from "react";

class Portfolio extends Component {
  
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
                <h2>Our Portfolio</h2>
                <p>Les’t see our Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="eb-portfolio portfolio-3-column eb-gp-tb-100">
    <div className="container">
      <div className="row">
        <div className="portfolio-container">
          <div className="col-sm-12">
            <div className="section-title">
              <h2 className="main-title">Our Latest Project</h2>
              <ul id="eb-portfolio-filter" className="list-inline portfolio-sorting text-center">
                <li className="active" data-group="all">All</li>
                <li data-group="animation">Animation</li>
                <li data-group="design">Design</li>
                <li data-group="illustration">Illustration</li>
                <li data-group="music">Music</li>
                <li data-group="photography">Photography</li>
              </ul>
            </div>
          </div>
          <ul id="eb-portfolio-grid" className="eb-portfolio-items list-unstyled">
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;all&quot;, &quot;photography&quot;, &quot;music&quot;, &quot;animation&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio1.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;all&quot;, &quot;photography&quot;, &quot;illustration&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio2.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;all&quot;, &quot;music&quot;, &quot;animation&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio3.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;all&quot;, &quot;photography&quot;, &quot;design&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio4.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;Design&quot;, &quot;Animation&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio5.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="eb-portfolio-item col-md-4 col-sm-6 col-xs-12 xx-small-gap" data-groups="[&quot;all&quot;, &quot;photography&quot;, &quot;illustration&quot;]">
              <div className="eb-project-item">
                <div className="project-image">
                  <img src="assets/images/portfolio/m-portfolio6.jpg" alt="project 1" className="img-responsive" />
                </div>
                <div className="portfolio-mask">
                  <div className="mask-wrap text-center">
                    <div className="eb-icon"><i className="fa fa-plus" /></div>
                    <h4 className="project-title">Branding Design</h4>
                    <p className="category">Branding</p>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
          <div className="more-portfolio">
            <a href="#" className="load-btn">Load More</a>
          </div>
        </div>
      </div> 
    </div>
  </section>
</div>

    )
  }
}

export default Portfolio