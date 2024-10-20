function changeIframeContent() {
  // Change content in galerie iframe
  const galerieIframe = document.getElementById("galerie-iframe");
  const galerieDocument =
    galerieIframe.contentDocument || galerieIframe.contentWindow.document;
  const galerieTitle = galerieDocument.querySelector(".title-container h1");

  if (galerieTitle) {
    galerieTitle.textContent = "NOS MOMENTS PRÉFÉRÉS";
  }

  // Change content in wide iframe
  const wideIframe = document.getElementById("wide-iframe");
  const wideDocument =
    wideIframe.contentDocument || wideIframe.contentWindow.document;

  // Change text in centered-text div
  const centeredText = wideDocument.querySelector(".centered-text");
  if (centeredText) {
    centeredText.textContent = "Les ateliers";
  }

  // Change image source
  const imageElement = wideDocument.querySelector(
    'img[src="/assets/images.jpg"]'
  );
  if (imageElement) {
    imageElement.src = "/assets/events.png";
  }
}

// Wait a moment for both iframes to load
window.onload = function () {
  setTimeout(changeIframeContent, 1000); // Adjust time as needed
};
