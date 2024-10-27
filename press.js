function changeIframeContent() {
  // Change content in wide iframe
  const wideIframe = document.getElementById("wide-iframe");
  const wideDocument =
    wideIframe.contentDocument || wideIframe.contentWindow.document;

  // Change text in centered-text div
  const centeredText = wideDocument.querySelector(".centered-text");
  if (centeredText) {
    centeredText.textContent = "Press Accreditation";
  }

  // Change image source in the wide iframe
  const imageElement = wideDocument.querySelector(
    'img[src="../../assets/images.jpg"]'
  );
  if (imageElement) {
    imageElement.src = "../../assets/press.png";
  }
}

// Wait a moment for both iframes to load
window.onload = function () {
  setTimeout(changeIframeContent, 1000); // Adjust time as needed
};
