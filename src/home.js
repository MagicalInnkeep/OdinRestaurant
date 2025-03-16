const homeContent = document.createElement("div");
homeContent.setAttribute("class","content");

const contHeader = document.createElement("div");
contHeader.setAttribute("class","title");
contHeader.textContent="Home";

const contBody = document.createElement("div");
contBody.setAttribute("class","body");

homeContent.appendChild(contHeader);
homeContent.appendChild(contBody);
export {homeContent};