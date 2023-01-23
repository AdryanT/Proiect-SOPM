import twitter from './images/twitter.png'
import fb from './images/fb.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'

function Info(){
    return ( <section class="info_section layout_padding-top">
    <div class="info_logo-box">
      <h2>
        Our App
      </h2>
    </div>
    <div class="container layout_padding2">
      <div class="row">
        <div class="col-md-3">
          <h5>
            About Us
          </h5>
          <p>
           Echipa 8
          </p>
        </div>
        <div class="col-md-3">
          <h5>
            Useful Link 
          </h5>
          <ul>
            <li>
            
                Video games
          
            </li>
            <li>
              
                Remote control
      
            </li>
            <li>
              
                3d controller
            
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>
            Contact Us
          </h5>
          <p>
           Echipa_8@yahoo.com
          </p>
        </div>
        <div class="col-md-3">

          <div class="subscribe_container">
            <h5>
              Newsletter
            </h5>
            <div class="form_container">
              <form action="">
                <input type="email" placeholder="Enter your email"/>
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="social_container">

        <div class="social-box">
        
            <img src={fb} alt=""/>
         

        
            <img src={twitter} alt=""/>
        
         
            <img src={linkedin} alt=""/>
      
         
            <img src={instagram} alt=""/>
          
        </div>
      </div>
    </div>
  </section>
)
}
export default Info;