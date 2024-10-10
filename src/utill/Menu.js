
export const Menu=()=>{
    document.getElementById("menuIcon").addEventListener("click", function() {
      const headerLinks = document.getElementById("header-right");
      headerLinks.classList.toggle("active"); 
    });
  };
  