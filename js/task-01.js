const itemRefs = document.querySelectorAll('.item');
const categoriesRes = `Number of categories: ${itemRefs.length}`;

console.log(categoriesRes);

itemRefs.forEach((item) => {
  const title = item.children[0].textContent;
  const elems = item.querySelectorAll('li').length;

  console.log(`Category: ${title}
      Elements: ${elems}`);
});
