import "./styles.css";

import { homeContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";

// Take our main content
const content=document.querySelector("#content");
// Load default page in.
content.appendChild(homeContent);

const headerButton = document.querySelector("header");
headerButton.addEventListener('click',(event)=>{
    const oldContent = document.querySelector(".content");
    content.removeChild(oldContent);
    const page = event.target.textContent.toLowerCase()
    switch(page){
        case "home": 
            content.appendChild(homeContent);
            break;
        case "menu": 
            content.appendChild(menuContent);
            break;
        case "about": 
            content.appendChild(aboutContent);
            break;
    }

});