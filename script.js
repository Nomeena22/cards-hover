document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".elems");
  var imgDiv = document.getElementById("img");

  elems.forEach(function (elem) {
    // Iterate over each element
    elem.addEventListener("mouseenter", function () {
      let img = elem.getAttribute("data-image");
      let w = elem.getAttribute("data-width");
      let h = elem.getAttribute("data-height");

      imgDiv.style.backgroundImage = `url(${img})`;
      imgDiv.style.width = w;
      imgDiv.style.height = h;
      imgDiv.style.display = "block"; // Show the image div
    });

    elem.addEventListener("mouseleave", function () {
      imgDiv.style.display = "none"; // Hide the image div
    });

    elem.addEventListener("mousemove", function (e) {
      imgDiv.style.left = e.pageX + 10 + "px"; // Offset to avoid flickering
      imgDiv.style.top = e.pageY + 10 + "px"; // Offset to avoid flickering
    });
  });
});
