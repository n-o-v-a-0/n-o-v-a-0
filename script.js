document.getElementById("changeText").addEventListener("click", function(event) {
    event.preventDefault();
  
    var content = document.getElementById("content");
    var newContent = document.getElementById("newContent");
  
    content.style.left = "-100%";
    newContent.style.left = "0";
  
    setTimeout(function() {
      content.style.display = "none";
      newContent.style.display = "block";
    }, 500);
  });
  