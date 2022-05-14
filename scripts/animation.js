var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  var width = window.width;

  if(width > 760){
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
       
      } else {
        document.getElementById("navbar").style.top = "-70px";
        
      }
      prevScrollpos = currentScrollPos;
  } else {
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
       
      } else {
        document.getElementById("navbar").style.top = "-110px";
        
      }
      prevScrollpos = currentScrollPos;
  }
 
  
}



