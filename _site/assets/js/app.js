$(document).foundation()

// Default to onload with only partially-opaque images visible
window.onload = function() {
  hideElements('transparent');
  hideElements('opaque');
  showElements('partially-opaque');
};

// Function to show elements based on class
function showElements(className) {
  const elements = document.querySelectorAll('.' + className);
  elements.forEach(element => {
    element.style.display = 'block';
  });
}

// Function to hide elements based on class
function hideElements(className) {
  const elements = document.querySelectorAll('.' + className);
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

// Function to style text based on opaque-lines or partial-lines class
function applyTextStyling(opaque, transparent, partiallyOpaque) {
  const opaqueSpans = document.querySelectorAll('.opaque-lines');
  const partialSpans = document.querySelectorAll('.partial-lines');

  opaqueSpans.forEach(span => {
    span.style.backgroundColor = opaque ? 'black' : 'transparent';
    span.style.color = opaque ? 'black' : 'inherit';
  });

  partialSpans.forEach(span => {
    span.style.textDecoration = partiallyOpaque ? 'line-through' : 'none';
  });
}

// Set show/hide listeners for each class onClick
document.getElementById('opaqueBtn').addEventListener('click', function() {
  showElements('opaque');
  hideElements('transparent');
  hideElements('partially-opaque');
  applyTextStyling(true, false, false);
});

document.getElementById('transparentBtn').addEventListener('click', function() {
  showElements('transparent');
  hideElements('opaque');
  hideElements('partially-opaque');
  applyTextStyling(false, true, false);
});

document.getElementById('partiallyOpaqueBtn').addEventListener('click', function() {
  showElements('partially-opaque');
  hideElements('opaque');
  hideElements('transparent');
  applyTextStyling(false, false, true);
});

// Set button state onClick
const toggleButtons = document.querySelectorAll('.toggle-button');

// Add click event listener to each toggle button
toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove 'selected' class from all buttons
    toggleButtons.forEach(btn => {
      btn.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
  });
});

// ItemCard button and checkbox filtering
const filterButtons = document.querySelectorAll('.filter-button');
const filterCheckboxes = document.querySelectorAll('.checkbox-wrapper input[type="checkbox"]'); // Update the selector here
const itemCards = document.querySelectorAll('.filter-item');

function filterItems() {
	const selectedCategories = Array.from(filterButtons)
		.filter(button => button.classList.contains('active'))
		.map(button => button.dataset.category);

	const selectedFormats = Array.from(filterCheckboxes)
		.filter(checkbox => checkbox.checked)
		.map(checkbox => checkbox.dataset.format);

	itemCards.forEach(card => {
		const itemCategories = card.dataset.categories.split(',');
		const itemFormats = card.dataset.formats.split(',');

		const showAll = selectedCategories.length === 0 && selectedFormats.length === 0;
		const showCat = selectedCategories.some(category => itemCategories.includes(category));
		const showForm = selectedFormats.some(format => itemFormats.includes(format));

		const isPerson = selectedFormats.some(format => itemFormats.includes('person'));

		// WANT TO CHANGE HOW THE FILTERS INTERACT? (I.E. AND vs OR) CHANGE THE LINE BELOW
		if ((showCat || showForm || showAll)) {
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	});
}

filterButtons.forEach(button => {
	button.addEventListener('click', () => {
		button.classList.toggle('active');
		filterItems();
	});
});

filterCheckboxes.forEach(checkbox => {
	checkbox.addEventListener('change', () => {
		filterItems();
	});
});
