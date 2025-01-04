/**
 * @param {number} n
 * @return {number}
 */

const lastRemaining = function (n) {
  let head = 1,
    left = true,
    step = 1,
    remain = n;

  while (remain > 1) {
    if (left || remain % 2) {
      head += step;
    }

    step *= 2;
    left = !left;
    remain = Math.floor(remain / 2);
  }

  return head;
};

console.log(lastRemaining(9));

// get elements grouped up in a list
const listItems = document.querySelectorAll(".navbar-item");
// Get the search Button element
const searchBar = document.querySelector(".search-btn");
// Get the modal element
const modal = document.getElementById("myModal");

// Get the modal content element
const modalContent = document.querySelector(".modal-content");

// Get the cart icon element
const cartIcon = document.getElementById("cartIcon");

// Get the cart modal element
const cartModal = document.getElementById("cartModal");

// Get the cart counter element
const cartCounter = document.getElementById("cartCounter");
// When the user clicks on <span> (x) to close the modal, hide the modal
const closeBtns = document.querySelectorAll(".close");

function listItemsSelected() {
  listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clickedItem = e.target.closest(".navbar-item");
      if (clickedItem) {
        listItems.forEach((otherItem) => otherItem.classList.remove("active"));
        clickedItem.classList.add("active");
      }
    });
  });
}

listItemsSelected();

// Function to show the modal
function showModal() {
  modal.classList.add("show");
  modalContent.classList.add("fadeIn");
  searchBar.classList.add("active");
}

// Function to hide the modal
function hideModal() {
  modalContent.classList.add("fadeOut");
  setTimeout(() => {
    modal.classList.remove("show");
    modalContent.classList.remove("fadeOut", "fadeIn");
    searchBar.classList.remove("active");
  }, 300); // Wait for the animation to finish (0.3s)
}

// When the user clicks the search icon, open the modal
searchBar.addEventListener("click", showModal);

// When the user clicks on <span> (x) or outside of the modal, close the modal
closeBtns[0].addEventListener("click", (event) => {
  if (event.target == modal || event.target.classList.contains("close")) {
    hideModal();
  }
});

// Function to show the cart modal
function showCartModal() {
  cartModal.style.display = "block"; // Display the modal
  setTimeout(() => {
    cartModal.classList.add("show"); // Add the 'show' class to animate modal appearance
  }, 12); // Delay to ensure smooth transition
  cartIcon.classList.add("active"); // Add 'active' class to cart icon
}

// Function to hide the cart modal
function hideCartModal() {
  cartModal.classList.remove("show"); // Remove the 'show' class to animate modal disappearance
  setTimeout(() => {
    cartIcon.classList.remove("active"); // Remove 'active' class from cart icon
    cartModal.style.display = "none"; // Hide the modal after animation completes
  }, 300); // Duration of transition
}

// When the user clicks the cart icon, show/hide the cart modal
cartIcon.addEventListener("click", () => {
  showCartModal();
});

closeBtns[1].addEventListener("click", () => {
  hideCartModal();
});

// Update cart counter
function updateCartCounter(count) {
  cartCounter.textContent = count;
}

// Example: Add item to cart
let cartItemCount = 0;
function addItemToCart() {
  cartItemCount++;
  updateCartCounter(cartItemCount);
}

// Example: Remove item from cart
function removeItemFromCart() {
  if (cartItemCount > 0) {
    cartItemCount--;
    updateCartCounter(cartItemCount);
  }
}
