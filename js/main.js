let elFoodList = document.querySelector('.food-list');
let elFoodTemplate = document.querySelector('.food-temp').content;
let elBtn = document.querySelector('.food-btn');
let elFoodPrice = document.querySelector('.food-price'); 
let elBtnContent = document.querySelector('.btn-content');

for (i of foods) {
  let elClone = elFoodTemplate.cloneNode(true);
  elClone.querySelector('.food-inner').style.backgroundColor = i.bgColor;
  elClone.querySelector('.food-img').src = i.img;
  elClone.querySelector('.food-title').textContent = i.title;
  elClone.querySelector('.food-sum').textContent = i.text;
  elFoodList.appendChild(elClone);
};

elFoodList.addEventListener('click', (e) => {
  if (e.target.textContent.toLowerCase() == 'add to cart') {
    let itemPrice = e.target.parentNode.parentNode.parentNode.parentNode;
    let itemNode = itemPrice.cloneNode(true);
    let cancelBtn = document.createElement('button');
    cancelBtn.className = ('btn btn-danger');
    cancelBtn.textContent = "Delete";
    itemNode.appendChild(cancelBtn);
    elFoodPrice.appendChild(itemNode);
  }
});

elFoodPrice.addEventListener('click', (e) => {
  if(e.target.textContent.toLowerCase() == "delete") {
    e.target.parentNode.style.display = 'none'
  }
});
