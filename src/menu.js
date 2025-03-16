const menuContent = document.createElement("div");
menuContent.setAttribute("class", "content");

const contHeader = document.createElement("div");
contHeader.setAttribute("class", "title");
contHeader.textContent = "Our Enchanted Menu";

const contBody = document.createElement("div");
contBody.setAttribute("class", "body");

const menuList = document.createElement("ul");

const menuItems = [
  "🧙‍♂️ Wizard’s Brew – A bubbling potion of elderberry and enchanted herbs.",
  "🔥 Dragon’s Feast – Spiced roasted meats, fit for the bravest warriors.",
  "🌿 Elven Garden Salad – Fresh greens kissed by the morning dew.",
  "🍞 Mystic Bread – Baked with magical grains and served with golden honey butter.",
  "🍰 Fairy’s Delight – A delicate lavender-infused cake with shimmering glaze."
];

menuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.textContent = item;
  menuList.appendChild(menuItem);
});

contBody.appendChild(menuList);
menuContent.appendChild(contHeader);
menuContent.appendChild(contBody);

export { menuContent };
