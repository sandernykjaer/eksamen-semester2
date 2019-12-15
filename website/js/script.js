
//GOOGLE API MAP

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(56.228169, 10.240162),
      zoom:16,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    }

// MODAL KONTAKT
// GET MODAL
var kModal = document.getElementById("kontaktModal");

// Get the button that opens the modal
var kBtn = document.getElementById("kontaktBtn");

// Get the <span> element that closes the modal
var kspan = document.getElementsByClassName("kclose")[0];

// When the user clicks on the button, open the modal
kBtn.onclick = function() {
  kModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
kspan.onclick = function() {
  kModal.style.display = "none";
}

// CLOSE MODAL
window.onclick = function(event) {
  if (event.target == kModal) {
    kModal.style.display = "none";
  }
}
// END MODAL


// MODAL BESTIL
// GET MODAL
var bModal = document.getElementById("bestilModal");

// GET BUTTON IDs
var bBtn = document.getElementById("bestilBtn");
var bBtn2 = document.getElementById("bestilBtn2");

// Get the <span> element that closes the modal
var bspan = document.getElementsByClassName("bclose")[0];

// OPEN MODAL BY SETTING display: block IN CSS
bBtn.onclick = function() {
  bModal.style.display = "block";
}
bBtn2.onclick = function() {
  bModal.style.display = "block";
}

// CLOSE MODAL BY SETTING display: none IN CSS
bspan.onclick = function() {
  bModal.style.display = "none";
}

// CLOSE MODAL BY CLICKING OUTSIDE THE MODAL
window.onclick = function(event) {
  if (event.target == bModal) {
    bModal.style.display = "none";
  }
}
// END MODAL





