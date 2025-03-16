const homeContent = document.createElement("div");
homeContent.setAttribute("class", "content");

const contHeader = document.createElement("div");
contHeader.setAttribute("class", "title");
contHeader.textContent = "Welcome to The Magical Inn";

const contBody = document.createElement("div");
contBody.setAttribute("class", "body");

const welcomeText = document.createElement("div");
welcomeText.textContent =
  "Step into a world of enchantment at The Magical Inn, where every meal is a spellbinding experience. " +
  "Our mystical chefs blend ancient recipes with modern flavors to create dishes that delight the senses. " +
  "Whether you’re here for a quick bite or a grand feast, magic is always on the menu.";

contBody.appendChild(welcomeText);

homeContent.appendChild(contHeader);
homeContent.appendChild(contBody);

export { homeContent };
