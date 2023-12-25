let timeOut;
function debounce() {
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    //  get the p tag by id
    let searchResult = document.getElementById("para");
    // extract the input value
    let searchValue = document.getElementById("input").value;
    // Check if the input is empty
    if (searchValue.trim() === "") {
      // Clear the search results
      searchResult.innerHTML = "";
    } else {
      // Display the search result
      searchResult.innerHTML += `<p>${searchValue}</p><br>`;
    }
  }, 300);
}
