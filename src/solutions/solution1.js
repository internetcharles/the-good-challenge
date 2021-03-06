var flavors = "LOADING!";

// Div is added on DOM load.
document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'flavors';
  div.innerHTML = 'LOADING!';

  document.body.appendChild(div);
}, false);

// Temp variable is declared for assignment of child divs
let temp;

executeFlavorChange = () => {
  flavorDiv = document.getElementById('flavors');
  flavorDiv.innerHTML = "Your flavors are:";
  // For loop iterates through flavors array and creates div for each
  for (i = 0; i < flavors.length; i++) {
    temp = document.createElement('div');
    temp.className = 'flavor';
    temp.innerHTML = flavors[i];
    flavorDiv.appendChild(temp);
  }
}

const interval = setInterval(() => {
  // Set interval checks if flavors array is empty
  if (window.iceCreamFlavors.length > 0) {
    flavors = window.iceCreamFlavors;
    console.log("FLAVORS HAVE CHANGED" + flavors);
    executeFlavorChange();
    clearInterval(interval);
  }
  else {
    console.log('Flavors havent changed yet');
  }
}, 500)

