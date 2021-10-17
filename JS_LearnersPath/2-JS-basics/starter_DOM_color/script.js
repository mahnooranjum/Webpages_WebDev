
window.onclick = myFunction;

// If the user clicks in the window, change background color of body
function myFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
}
