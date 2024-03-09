const toggleButtons = document.querySelectorAll(".toggle-btn");

// Add event listeners to each toggle button
toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the target answer element
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    // Toggle the visibility of the answer element
    if (targetElement.style.display === "none") {
      targetElement.style.display = "block";
      button.src = "/assets/images/icon-minus.svg"; // Change the button icon to minus
    } else {
      targetElement.style.display = "none";
      button.src = "/assets/images/icon-plus.svg"; // Change the button icon to plus
    }
  });
});
