window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
setHexWidth();
  var hamburgerMenu = document.getElementById("link-menu")
  hamburgerMenu.onclick = function(){
    var menu = document.getElementById('menu')
    if (menu.style.display === "none") {
      function ease(height){
        height+= 2;
        setTimeout(function () {
          // menu.style.height = height +'px';
          menu.style.transform = 'translate(0,'+height+'px)';
          if (height < 220) {
            ease(height)
          }
        }, 1);
      }
      ease(0);
      menu.style.display = "inherit";
    }else {
      // menu.style.height = 0;
      menu.style.transform = 'translate(0,-192px)';
      menu.style.display = "none";
    }
  }
  var aboutPosition = document.getElementById('about-div').getBoundingClientRect()
  var skillsPosition = document.getElementById('skills-div').getBoundingClientRect()
  var projectsPosition = document.getElementById('projects-div').getBoundingClientRect()
  var contactPosition = document.getElementById('contact-div').getBoundingClientRect()
  document.getElementById('about').onclick = function(){
    window.scrollTo(0,aboutPosition.top)
  }
  document.getElementById('scrollImg').onclick = function(){
    window.scrollTo(0,aboutPosition.top)
  }
  document.getElementById('skills').onclick = function(){
    window.scrollTo(0,skillsPosition.top)
  }
  document.getElementById('projects').onclick = function(){
    window.scrollTo(0,projectsPosition.top)
  }
  document.getElementById('contact').onclick = function(){
    window.scrollTo(0,contactPosition.bottom)
  }
window.onresize = setHexWidth
function setHexWidth(){
  var hexagons = Array.from(document.getElementsByClassName('hexagon-outer'))
  var hexagonHeight = hexagons[0].getBoundingClientRect().height
  hexagons.forEach(function(hexagon, index){
    hexagon.style.width = hexagonHeight+"px";
  })
}
