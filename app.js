const toggle = document.getElementById("toggle");
const theme = document.querySelector("#theme-link");
 toggle.addEventListener("click", function() {
   if (theme.getAttribute("href") == "style1.css") {
     theme.href = "style.css";
   } else {
     theme.href = "style1.css";
   }
 });

