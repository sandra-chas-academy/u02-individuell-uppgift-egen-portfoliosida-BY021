//FETCH JSON
async function getData() 
{
  try
    {
      const response = await fetch("../js/index.json");

        if(!response.ok)
          {
            throw new Error(`HTTP ERROR status: ${response.status}`);
          }

      const data = await response.json();
      
      renderHTML(data);
  
    }
  
  catch(error) 
    {
      console.error("ERROR", error);
    }
}

//Hamburger Menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

function renderHTML(data) {
    data.forEach((info) => {
      const currentUrl = window.location.pathname;
      const home = "/pages/home.html";
      const index = "/index.html";
      const landing = "/";
      const about = "/pages/about.html";
      const technologies = "/pages/technologies.html"; 
      const projects = "/pages/projects.html"; 
      const contact = "/pages/contact.html";
      const myName = `${info.firstName} ${info.lastName}`;
      const projectStatus = info.projects

      document.getElementById("footerName").innerHTML = myName;

            if (currentUrl === home) {  
      document.getElementById("name").innerHTML = myName;
      document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
      document.getElementById("occupation").innerHTML = info.occupation;
      } else if (currentUrl === index) {
      document.getElementById("name").innerHTML = myName;
      document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
      } else if (currentUrl === landing) {
      document.getElementById("name").innerHTML = myName;
      document.getElementById("profile_picture").setAttribute("src", "../images/profile_picture.JPG");
      } else if (currentUrl === contact) {
      document.getElementById("email").innerHTML = info.email;
      document.getElementById("phoneNumber").innerHTML = info.phoneNumber;
      } else if (currentUrl === projects && projectStatus === "null") {
        document.getElementById("projects").classList.add("collapsed");
        document.getElementById("noProjects").innerHTML = "There is no active projects yet. Stay tuned!";
        }
    });
}

getData();




