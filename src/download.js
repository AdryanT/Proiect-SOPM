import download from './images/cloud-download.png'
import trophy_ from './images/trophy_.png'
import playstore from './images/playstore.png'
import heart from './images/heart.png'
import cloud from './images/cloud-download.png' 
import soon from './images/Soon.jpg' 


function Download()
{
    return(<section class="download_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          Download Anytime, Anywhere
        </h2>
      </div>
      <div class="layout_padding2-top">
        <div class="row">
          <div class="col-md-4">
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={cloud} alt="" />
                </div>
                <h6>
                  Download The App
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  Coming soon
                </p>
              </div>
            </div>
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={trophy_} alt="" />
                </div>
                <h6>
                  Easy to Customize
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="main-img-box">
              <img src={soon} alt="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={playstore} alt="" />
                </div>
                <h6>
                  Connect Your Store
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  
                </p>
              </div>
            </div>
            <div class="box">
              <div class="head-box">
                <div class="img-box">
                  <img src={heart} alt="" />
                </div>
                <h6>
                  Enjoy Our App
                </h6>
              </div>
              <div class="detail-box">
                <p>
                  
                </p>
              </div>
            </div>
            <div>
              <a href="" class="btn-2">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
export default Download;
