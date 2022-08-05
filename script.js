let showBar = document.getElementById("showBar")
let row = document.querySelector(".row")


showBar.onclick = function() {
  if (row.style.display !== 'none') {
      row.style.display = 'none';
  }
  else {
      row.style.display = 'block';
  }
};




