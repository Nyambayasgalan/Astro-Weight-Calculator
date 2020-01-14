
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
//dropdown
  var dropdown = document.getElementById('planets')
  var planetItems = planets.forEach(function(planet) {
  var names = planet[0]
  var options = document.createElement('option')
  options.text = names;
  var solutions = dropdown.appendChild(options)
})

//calculate
function calculateWeight(weight, planetName) {
  var planetName = document.getElementById("planets").selectedIndex;
  var newGravity = planets[planetName][1];
    
  return weight * newGravity;
  }

//handleClickEvent
function handleClickEvent() {

  var weight = parseFloat(document.getElementById("user-weight").value);
  var planetName = document.getElementById("planets").value;
  var result = calculateWeight(weight, planetName);
  document.getElementById("output").innerHTML = "If you were on " + planetName + ',' + ' you would weigh ' + result + 'lbs!';
  
  }
  


