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
    
    const page = event.target.textContent.toLowerCase()
    const oldContent = document.querySelector(".content");
    switch(page){
        case "home": 
            content.removeChild(oldContent);
            content.appendChild(homeContent);
            break;
        case "menu": 
            content.removeChild(oldContent);
            content.appendChild(menuContent);
            break;
        case "about": 
            content.removeChild(oldContent);
            content.appendChild(aboutContent);
            break;
    };
});