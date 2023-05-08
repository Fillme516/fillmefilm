const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.item');

// Show all items initially
items.forEach(item => item.classList.remove('hide'));

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  
  items.forEach(item => {
    const title = item.querySelector('h4').textContent.toLowerCase();
    const content = item.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchText) || content.includes(searchText)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});
