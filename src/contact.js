function Contact(){
    return(<section class="contact_section layout_padding">
    <div class="container">
      <div class="d-flex ">
        <h2>
          Contact Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">

          <form action="">
            <div class="contact_form-container">
              <div>
                <div>
                  <input type="text" placeholder="Name"/>
                </div>
                <div>
                  <input type="text" placeholder="Phone Number"/>
                </div>
                <div>
                  <input type="email" placeholder="Email"/>
                </div>
                <div class="mt-5">
                  <input type="text" placeholder="Message"/>
                </div>
                <div class="mt-5">
                  <button type="submit">
                    send
                  </button>
                </div>
              </div>

            </div>

          </form>
        </div>
        <div class="col-md-6">
          <div class="contact_img-box">
          </div>
        </div>
      </div>
    </div>
  </section>)
}
export  default Contact;