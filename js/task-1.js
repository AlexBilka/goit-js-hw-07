const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const title = category.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const elementList = category.querySelectorAll('ul li');
  console.log(`Elements: ${elementList.length}`);
}
