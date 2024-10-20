document
  .getElementById("headerup-iframe")
  .addEventListener("load", function () {
    var iframe = document.getElementById("headerup-iframe");
    var iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;

    var burgerMenu = iframeDocument.getElementById("burgerMenu");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var overlay = document.getElementById("menuOverlay");

    burgerMenu.addEventListener("click", function () {
      var isVisible = dropdownMenu.style.display === "block";
      dropdownMenu.style.display = isVisible ? "none" : "block";
      overlay.style.display = isVisible ? "none" : "block";
    });

    overlay.addEventListener("click", function () {
      dropdownMenu.style.display = "none";
      overlay.style.display = "none";
    });
  });

document.querySelectorAll(".dropdown-menu ul li").forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.stopPropagation();

    var subMenu = this.querySelector("ul");
    if (subMenu) {
      var icon = this.querySelector(".toggle-icon");
      subMenu.style.display =
        subMenu.style.display === "block" ? "none" : "block";
      icon.textContent = icon.textContent === "+" ? "-" : "+";
    }
  });
});

document.getElementById("closeDropdown").addEventListener("click", function () {
  document.getElementById("dropdownMenu").style.display = "none";
  document.getElementById("menuOverlay").style.display = "none";
});
