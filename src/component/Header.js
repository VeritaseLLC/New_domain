
function Header() {
    return (
      <div>
 <header class="container align-items-start align-top p-5">
    <div class="row w-100">
      
      <div class="col-4 d-flex justify-content-start menu-image">
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">
        <img src="images/menu.png" alt="Menu Icon" id="menuIcon"/> 
        </label>
      </div>

      
      <div class="col-4 d-flex justify-content-center center-logo">
        <img src="images/veritase-logo.png" alt="Logo"/> 
      </div>

      
      <div class="col-4 d-flex justify-content-end right-side" id="rightSide">
        <div class="header-right" id="header-right">
          <div class="list-item">Profile<img src="images/downarrow.png" alt="arrow" class="color-change"/></div>
          <div class="list-item">Opportunities</div>
        </div>
      </div>
    </div>
    <div class="video-container">
      <img src="images/play_button.png" alt="Play Button" class="play-button"/>
      
    </div>
  </header>
      </div>
    );
  }
  
  export default Header;
  