import "./styles.css";

import { homeContent } from "./home";

// Take our main content
const content=document.querySelector("#content");
// Load default page in.
content.appendChild(homeContent);

const headerButton = document.querySelector("header");
headerButton.addEventListener('click',(event)=>{
    //content.removeChild("div");
    const page = event.target.textContent
    console.log(page);
    //content.appendChild(page);
});