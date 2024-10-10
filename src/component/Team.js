function Team() {
    return (
      <div className="App">
        <section class="team" id="team">
      <div class="container">
        <h1 class="about-text d-flex justify-content-center align-center mt-5">Team</h1>
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-0">
            <div class="team-section-1">
              <img src="images/Employee_01.png" class="employee-image" alt="employee1"/>
              <div class="section-1">
                <div class="section-content">
                  <div class="section-content-description">
                    <div class="section-content-description-row">
                      <p class="section-content-description-text-1">
                        Our success is driven by our people, who form the core of everything we do. With a flat,
                        merit-based structure, we foster a collaborative and entrepreneurial environment where
                        individuals can efficiently and safely achieve
                        results, within a positive and
                        supportive workplace.
                      </p>
                      <img src="images/Employee_02.png" class="section-content-description-image" alt="employee2"/>
                    </div>
                    <div class="section-content-explore-row">

                      <button type="button" class="btn btn-danger btn-lg d-md-block about-btn team-btn">Explore
                        more...</button>

                      <img src="images/Employee_03.png" alt="employee3" class="section-content-explore-image"/>
                    </div>
                  </div>
                  <div class="section-content-employees">
                    <img src="images/Employee_04.png" alt="Employee4" class="section-content-employee-image-first"/>
                    <img src="images/Employee_05.png" alt="Employee5" class="section-content-employee-image-second"/>
                  </div>
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
  
  export default Team;