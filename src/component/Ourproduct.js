function Ourproduct() {
    return (
      <div>
       <section class="our-product" id="our-product">
      <div class="container our-product-cotainer">
        <h1 class="about-text d-flex justify-content-center align-center m-5">Our Products</h1>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 our-product-image">
            <img src="images/Our products_image.png" alt="" class="img-fluid"/>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 pt-5 pl-5 our-product-content">
            <div class="row row-cols-2 custom-gap">
              <div class="col our-product-sub-image">
                <img src="images/Petroleum products.png" alt="product 1" />
              </div>
              <div class="col">
                <div class="our-product-sub-content">
                  <h3 class="product-head-1">Petroleum Products</h3>
                  <p class="product-subpara">LPG is a versatile and portable energy source composed primarily
                    of propane and butane.
                  </p>
                </div>
              </div>
            </div>
            <div class="row row-cols-2 custom-gap">
              <div class="col our-product-sub-image">
                <img src="images/Fertilizers.png" alt="product 2" />
              </div>
              <div class="col">
                <div class="our-product-sub-content">
                  <h3 class="product-head-1">Fertilizers</h3>
                  <p class="product-subpara">Urea is a white crystalline substance containing 46% nitrogen,
                    making it one of the most
                    concentrated</p>
                </div>
              </div>
            </div>
            <div class="row row-cols-2 custom-gap">
              <div class="col our-product-sub-image">
                <img src="images/Petrochemicals.png" alt="product 3" />
              </div>
              <div class="col">
                <div class="our-product-sub-content">
                  <h3 class="product-head-1">Petrochemicals</h3>
                  <p class="product-subpara">Aromatics are a group of
                    hydrocarbons, including benzene, toluene, and xylene, characterized
                  </p>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-danger btn-lg d-md-block about-btn m-5">Explore more...</button>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
  
  export default Ourproduct;
  