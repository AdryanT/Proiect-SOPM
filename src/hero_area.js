import EU1 from './images/team.jpg'
import Adi from './images/Adi.jpg'
import Marius1 from './images/Marius1.jpg'
import Seby1 from './images/Seby1.jpg'




function HeroArea()
{return (<div class="hero_area">
<header class="header_section">
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg custom_nav-container">
      <a class="navbar-brand" href="index.html">
        <span>
          Our App
        </span>
      </a>

      <div class="navbar-collapse" id="">
        <div class="custom_menu-btn">
          <button onClick="openNav()" >
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
          </button>
        </div>
        <div id="myNav" class="overlay">
          <div class="overlay-content">
            <a href="index.html">HOME</a>
            <a href="index.html">ABOUT</a>
            <a href="index.html">FEATURE</a>
            <a href="index.html">CONTACT US</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </header>
  <section class=" slider_section position-relative">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="detail-box">
            <h2>
              design
            </h2>
            <h1>
              To-do <br />
              app
            </h1>
            <div>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="img-box">
                  <img src={EU1}/>
                </div>
              </div>
              <div class="carousel-item">
                <div class="img-box">
                  <img src={Seby1} />
                </div>
              </div>
              <div class="carousel-item">
                <div class="img-box">
                  <img src={Adi} />
                </div>
              </div>
              <div class="carousel-item">
                <div class="img-box">
                  <img src={Marius1} />
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>)
  }
export default HeroArea;
