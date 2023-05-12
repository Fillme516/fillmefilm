const searchBar = document.getElementById("searchBar");
const itemList = document.getElementById("itemList");
const notFound = document.getElementById("notFound");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const allItems = itemList.querySelectorAll(".item");

  let itemsFound = false;

  allItems.forEach((item) => {
    const name = item.querySelector("h4").textContent.toLowerCase();
    if (name.includes(searchString)) {
      item.style.display = "inline-block";
      itemsFound = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!itemsFound) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }
});
