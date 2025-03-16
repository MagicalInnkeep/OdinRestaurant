const aboutContent = document.createElement("div");
aboutContent.setAttribute("class", "content");

const contHeader = document.createElement("div");
contHeader.setAttribute("class", "title");
contHeader.textContent = "The Story of The Magical Inn";

const contBody = document.createElement("div");
contBody.setAttribute("class", "body");

const aboutText = document.createElement("div");
aboutText.textContent =
  "Hidden deep in the heart of the Enchanted Forest, The Magical Inn has been a haven for travelers and adventurers for centuries. " +
  "Founded by the legendary wizard Eldrin the Wise, the inn has served meals infused with mystical energies to those seeking comfort and adventure alike. " +
  "With a warm hearth and a menu full of magic, we welcome all who enter our doors.";

contBody.appendChild(aboutText);

aboutContent.appendChild(contHeader);
aboutContent.appendChild(contBody);

export { aboutContent };
