var content = document.getElementsByClassName("c-hidden-content");
var readButton = document.getElementsByClassName("c-read-more-button");
console.log(readButton);
readButton.addEventListener("click", function () {
  console.log("button clicked");
  if (content.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
