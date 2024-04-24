const query = document.getElementById('query');
let isActive = false;

query.addEventListener('click', () => {
    isActive = !isActive; // Toggle the state
    if (isActive) {
        query.classList.add('active');
    } else {
        query.classList.remove('active');
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== query) {
        isActive = false;
        query.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all links inside the .gx12 div
    var links = document.querySelectorAll(".gx12 a");

    // Loop through each link and add the active class if its href matches the current page URL
    links.forEach(function(link) {
        if (link.href === currentPageUrl) {
            link.classList.add("active");
        }
    });
});

var selectBox = document.getElementById('category');
var div1 = document.getElementById('cardd');
var div2 = document.getElementById('nocourses');

// Add event listener for change event on select box
selectBox.addEventListener('change', function() {
  // Get selected option value
  var selectedOption = selectBox.value;
  
  // Toggle visibility of divs based on selected option
  switch(selectedOption) {
    case 'in progress':
      div1.style.display = 'block';
      div2.style.display = 'none';
      break;
    case 'Future':
      div1.style.display = 'none';
      div2.style.display = 'block';
      break;
    case 'Past':
        div1.style.display = 'none';
        div2.style.display = 'block';
        break;
    case 'Starred':
      div1.style.display = 'none';
      div2.style.display = 'block';
      break;
    case 'Removed from view':
        div1.style.display = 'none';
        div2.style.display = 'block';
        break;
    default:
      div1.style.display = 'block';
      div2.style.display = 'none';
  }
});

