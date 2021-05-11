var flavors = "LOADING!";

// Initial loading div creation
document.addEventListener('DOMContentLoaded', function() {
  var div = document.createElement('div');
  div.id = 'flavors';
  div.innerHTML = `LOADING!`;

  document.body.appendChild(div);
}, false);

let temp;

executeFlavorChange = () => {
  flavorDiv = document.getElementById('flavors');
  flavorDiv.innerHTML = "Your flavors are:";
  for (i = 0; i < flavors.length; i++) {
    temp = document.createElement('div');
    temp.className = 'flavor';
    temp.innerHTML = flavors[i];
    flavorDiv.appendChild(temp);
  }
}

// Timeout occurs after maximum loading time. Flavors are changed to the window variable.
setTimeout(() => {
    flavors = window.iceCreamFlavors;
    console.log("FLAVORS HAVE CHANGED" + flavors);
    executeFlavorChange();
}, 1450)

