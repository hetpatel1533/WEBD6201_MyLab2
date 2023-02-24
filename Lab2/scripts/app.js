/*
 * Name: Het Patel
 * Student ID: 100849572
 * Course Code: WEBD6201-06
 */

console.log("JS script wired up");

// Created User Class
class User 
{
  constructor(exampleInputUserFirstName,exampleInputUserLastName,exampleInputUserEmail1,exampleInputUserName,exampleInputUserPassword1) 
  {
   this.exampleInputUserFirstName =exampleInputUserFirstName;
   this.exampleInputUserLastName = exampleInputUserLastName;
   this.exampleInputUserEmail1 = exampleInputUserEmail1;
   this.exampleInputUserName = exampleInputUserName;
   this.exampleInputUserPassword1=exampleInputUserPassword1;
  }
}

//Home Page

function displayHomePage() 
{
  // display the background image.
  document.body.style.backgroundImage = "url(https://miro.medium.com/max/1200/1*xMuIOwjliGUPjkzukeWKfw.jpeg)";

let homeTitle = document.createElement("h1");
homeTitle.setAttribute("id","homeHeader");
homeTitle.textContent = "Welcome to WEBD6201 - Lab 2"

let homeParagraph = document.createElement("p");
homeParagraph.setAttribute("id", "homeParagraph");
homeParagraph.textContent = "This is the home page of this lab which show the 'welcome to the course' page."

let mainContent = document.getElementById("home");
console.log(mainContent)
mainContent.appendChild(homeTitle);
mainContent.appendChild(homeParagraph);
}

// Product page

function displayProduct()
{

    // Set the background color for this page
  document.body.style.backgroundColor = "#49A4B0";
    // My Interest 1

    let productTitle = document.createElement("h1");
    productTitle.setAttribute("id","homeHeader");
    productTitle.textContent = "Faviourt phone: 'Google pixel 7 pro'";
        
    let productImg = document.createElement("img");
    productImg.setAttribute("width", "200px");
    productImg.setAttribute("height", "150px");
    productImg.setAttribute("id", "firstImg");
    productImg.src = "https://cdn.dxomark.com/wp-content/uploads/medias/post-126764/Google-Pixel-7-Pro_featured-image-packshot-review.jpg";
        
    let productParagraph = document.createElement("p");
    productParagraph.setAttribute("id", "interestOne");
    productParagraph.textContent = "I love this phone because it is the best android phone I ever seen which has lots more features like it provides 6.7 inch screen, low weight, 24 to 72 hours battry backup, 12 GB RAM, 128/256 GB ROM, and better camera quality. Another interesing thing about this phone is Google add AI to modify the pictures which I love a lot.";
    let productContent = document.getElementById("product");
    productContent.appendChild(productTitle);
    productContent.appendChild(productImg); 
    productContent.appendChild(productParagraph);

    // My Interest 2

    let secondProductTitle = document.createElement("h1");
    secondProductTitle.setAttribute("id","homeHeader2");
    secondProductTitle.textContent = "Faviourt tv show: 'Tarak mehta ka ulta chasma'";
        
    let secondProductImg = document.createElement("img");
    secondProductImg.setAttribute("width", "200px");
    secondProductImg.setAttribute("height", "150px");
    secondProductImg.setAttribute("id", "secondImg");
    secondProductImg.src = "https://wallpapercave.com/wp/wp7211491.jpg";
        
    let secondProductParagraph = document.createElement("p");
    secondProductParagraph.setAttribute("id", "interestTwo");
    secondProductParagraph.textContent = "\n This is one my faviourt tv show. Actully, this is an Indian tv show and it basically give lots more comedy which I love a lot and it give me a good refereshment.";

    let secondProductContent = document.getElementById("product2");

    secondProductContent.appendChild(secondProductTitle);
    secondProductContent.appendChild(secondProductImg); 
    secondProductContent.appendChild(secondProductParagraph);

    // My Interest 3

    let thirdProductTitle = document.createElement("h1");
    thirdProductTitle.setAttribute("id","homeHeader3");
    thirdProductTitle.textContent = "Artist: 'Akshay Kumar'";
        
    let thirdProductImg = document.createElement("img");
    thirdProductImg.setAttribute("width", "250px");
    thirdProductImg.setAttribute("height", "200px");
    thirdProductImg.setAttribute("id", "thirdImg");
    thirdProductImg.src = "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/09/05/Pictures/_9be3266e-ef56-11ea-970b-cd9b3c0381e8.jpg";
        
    let thirdProductParagraph = document.createElement("p");
    thirdProductParagraph.setAttribute("id", "interestThree");
    thirdProductParagraph.textContent = "I mostly see the films of this guy because his movie mostly based on commedy and fighting. Another thing is he gave his money to Indian army for there trainning and to buy their weapons which I love it for him.";

    let thirdProductContent = document.getElementById("product3");

    thirdProductContent.appendChild(thirdProductTitle);
    thirdProductContent.appendChild(thirdProductImg); 
    thirdProductContent.appendChild(thirdProductParagraph);
}

// About page

function displayAbout()
{

    // Set the background color for this page
  document.body.style.backgroundColor = "#49A4B0";
  let title = document.createElement("h1");
    title.setAttribute("id","firsttitle");
    title.textContent = "About Me";
    
    let image = document.createElement("img");
    image.setAttribute("id","myImage")
    image.setAttribute("width", "200px");
    image.setAttribute("height", "150px");
    image.src = "https://lh3.googleusercontent.com/a/AEdFTp4MjC8k9aC_s5hD4xilpTaYPPyTro2tSSlgmDS2aA=s360-p-rw-no";
        
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "myPara");
    paragraph.textContent = "\n Hey, This is Het from WEBD6201.Right now, I am doing my Diploma in Computer Programming in Durham College. I am an international student from India. I came here to do more study. By the way, I came here after grad 12. I am mostly interested in DataEngineering because I have a good knowledge of SQL, python, C++, and others.";

    let contentAbout = document.getElementById("About");
    

    contentAbout.appendChild(title);
    contentAbout.appendChild(image); 
    contentAbout.appendChild(paragraph);
}

// Services Form

function displayService()
{

    // Set the background color for this page
  document.body.style.backgroundColor = "#49A4B0";
  console.log("Service Page");

    let bodyContent = document.body;
    let providedServices = document.createElement("detailsOfServices");
    // show the table of three services

    let HTMLtable = `<table id="service" >
    <tr>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">customer support </h2>
        </th>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Website checking</h2>
        </th>
        <th width="33.3%">
            <h2 style="margin-left: 100px;">Give better security</h2>
        </th>
    </tr>

    <tr>
        <td align="center"><img src= "https://images.samsung.com/is/image/samsung/assets/ca/support/mobile-devices/galaxy-devices/we-care/MOB_PH_we_care_2.png?$ORIGIN_PNG$" width="300" height="200"></td>
        <td align="center"><img src= "https://www.webinspector.com/images/free-website-security-check-tool.png" width="350" height="250">></td>
        <td align="center"><img src= "https://cwatch.comodo.com/blog/wp-content/uploads/2020/05/good-website-security-plan.jpg" width="350" height="200"></td>
    </tr>
    <tr>
        <td align="center">
            <h6 style="margin-left: 100px;">
                We give the customer helpline numbers in case anyone have any issue to open website or if the link will not work for the client.
            </h6>
        </td>
        <td align="center">
            <h6 style="margin-left: 100px;">
                 we use online software to check the website first then we upload the website online. So, clients cannot get any faurd or virus websites.
            </h6>
        </td>
        <td align="center">
            <h6 style="margin-left: 100px;">
                We didn't accept any third party in our website. So, customer's information will be safely saved on our database.
            </h6>
        </td>
    </tr>

    </table>`;
     

    providedServices.setAttribute("class", "container");
    
    let resume = document.createElement("a");
    resume.setAttribute("id", "Resume");
    let myResumeLink = document.createTextNode("Click here to access my Resume")
    resume.appendChild(myResumeLink);
    resume.title = "This is link.";
    resume.href = "https://drive.google.com/file/d/1476vBJQyJAN8QJ4RmuZHaAFCcG3J5JUs/view?usp=share_link";
    
    providedServices.innerHTML = HTMLtable;
    bodyContent.appendChild(resume);
    bodyContent.appendChild(providedServices);
}

// Contact Form

console.log("Js script wired up");

// Set the background color for this page
document.body.style.backgroundColor = "#49A4B0";

function timeRedirect(e)
{
  let contactEmail = document.getElementById('exampleInputEmail1').value;
  let userFirstName = document.getElementById('exampleInputFirstName').value;
  let userLastName = document.getElementById('exampleInputLastName').value;
  let contactPassword = document.getElementById('exampleInputPassword1').value;
  let shortMessage = document.getElementById('exampleInputShortMessage').value;
  console.log("Email: " + contactEmail);
  console.log("First Name: " + userFirstName);
  console.log("Last Name: " + userLastName);
  console.log("Password: " + contactPassword);
  console.log("Short Message: " + shortMessage);
  e.preventDefault();
  setTimeout(function () 
  {
    window.location.href = "index.html";
  }, 3000)
}

let submitButton = document.getElementById('submit-button');
if(submitButton)
{
  submitButton.addEventListener('click', timeRedirect, false);
}

function Start()
    {
        // Dynamically update Products nav link to Interests
        document.querySelectorAll("nav ul li a")[1].innerHTML = '<i class="fa fa-code"></i>Interests';
        
        // Dynamically generate footer navbar
        let mainContent = document.querySelector("main");
        console.log(mainContent);

        // Create footer
        let footer = document.createElement("footer");
        footer.innerHTML = `<nav class="navbar fixed-bottom text-white navbar-dark bg-dark justify-content-center">
          <p class="my-2"><i class="far fa-copyright"></i> My new Lab, 2023.</p>
        </nav>`;

        // Inject footer into bottom of each page
        if (document.getElementsByTagName('main') != null) {
            document.body.appendChild(footer);
            console.log(footer);
        }
        
        
        // Create new nav link item and inject into navbar after about us
        const navLinkItem = document.createElement("li");
        navLinkItem.classList.add("nav-item");
        const navLink = document.createElement("a");
        navLink.classList.add("nav-link");
        navLink.setAttribute("href", "human-resources.html")
        navLink.innerHTML = '<i class="fa fa-globe"></i> Human Resources';
        navLinkItem.appendChild(navLink);
        
        // Insert HR link into navbar
        document.querySelectorAll("nav ul li")[3].after(navLinkItem)

        // Make an if-else conditions to call functions.
        if (document.title === "Homepage")
        {
          displayHomePage();
        }
        else if (document.title === "Product")
        {
          displayProduct();
        }
        else if (document.title === "Services")
        {
          displayService();
        }
        else if (document.title === "About")
        {
          displayAbout();
        }
    }
    window.addEventListener("load", Start);
