// Select all nav-link elements
const navLinks = document.querySelectorAll(".nav-link");

// Function to remove 'active' class from all links and add to the clicked link
function setActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
}

// Add click event listener to each nav-link
navLinks.forEach((link) => link.addEventListener("click", setActiveClass));

const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
//   const navLinks = document.querySelectorAll(".sidebar a");

// Function to toggle sidebar
function toggleSidebar() {
  sidebar.classList.toggle("show");
}

// Function to close sidebar
function closeSidebar() {
  sidebar.classList.remove("show");
}

// Add event listener to toggle button
sidebarToggle.addEventListener("click", toggleSidebar);

// Add event listener to close button
sidebarClose.addEventListener("click", closeSidebar);

// Add event listener to each nav link
navLinks.forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
