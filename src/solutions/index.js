var flavors = "LOADING!";

document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'flavors';
  div.innerHTML = `Your flavors are ${flavors}`;

  document.body.appendChild(div);
}, false);

function myPropertyChange() {
  flavors = window.iceCreamFlavors;
}

setInterval(() => {
  if (window.iceCreamFlavors.length > 0) {
    flavors = window.iceCreamFlavors;
    console.log("FLAVORS HAVE CHANGED" + flavors);
  }
  else {
    console.log('Flavors havent changed yet');
  }
}, 500)