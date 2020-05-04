const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// start of my work

// start of nav links 

//services
const firstLink = document.querySelector('nav a:nth-child(1)')
firstLink.textContent = siteContent.nav['nav-item-1'];
//product
const secondLink = document.querySelector('nav a:nth-child(2)')
secondLink.textContent = siteContent.nav['nav-item-2'];
//vision
const thirdLink = document.querySelector('nav a:nth-child(3)')
thirdLink.textContent = siteContent.nav['nav-item-3'];
//features
const fourthLink = document.querySelector('nav a:nth-child(4)')
fourthLink.textContent = siteContent.nav['nav-item-4'];
//about
const fithLink = document.querySelector('nav a:nth-child(5)')
fithLink.textContent = siteContent.nav['nav-item-5'];
//contact
const sixthLink = document.querySelector('nav a:nth-child(6)')
sixthLink.textContent = siteContent.nav['nav-item-6'];
//end of nav links

//start of cta (dom is awesome)
const CTAh1 = document.querySelector('h1');
CTAh1.textContent = siteContent['cta']['h1'];
// end of dom is awesome

//start of button 
const button1 = document.querySelector('button');
button1.textContent = siteContent['cta']['button'];
//end of button

//start of img
const img1 = document.getElementById('cta-img');
img1.setAttribute('src', siteContent['cta']['img-src']) ;
// end of logo img

//start of body stuff~~~~

//features
const features = document.querySelector('h4');
features.textContent = siteContent['main-content']['features-h4'];
// end of features

//start of feature body h4
const featuresbody = document.querySelector('p');
featuresbody.textContent = siteContent['main-content']['features-content'];
//end

//start of h4s
const allh4s = document.querySelectorAll('h4');
allh4s[1].textContent = siteContent['main-content']['about-h4'];
allh4s[2].textContent = siteContent['main-content']['services-h4'];
allh4s[3].textContent = siteContent['main-content']['product-h4'];
allh4s[4].textContent = siteContent['main-content']['vision-h4'];
// end of h4s
//start of content
const allps = document.querySelectorAll('p');
allps[1].textContent = siteContent['main-content']['about-content'];
allps[2].textContent = siteContent['main-content']['services-content'];
allps[3].textContent = siteContent['main-content']['product-content'];
allps[4].textContent = siteContent['main-content']['vision-content'];
// end of content
//start of middle img
const middleimage = document.getElementById('middle-img');
middleimage.setAttribute('src', siteContent['main-content']['middle-img-src']) ;
// end of middle img

//start of contact (footer)

//start of contact
const contactfooter = document.querySelector('.contact h4');
contactfooter.textContent = siteContent['contact']['contact-h4'];
// end of contact h4
allps[5].textContent = siteContent['contact']['address'];
allps[6].textContent = siteContent['contact']['phone'];
allps[7].textContent = siteContent['contact']['email'];
//end contact footer

//start of copy right
const copyrightfooter = document.querySelector('footer');
copyrightfooter.textContent = siteContent['footer']['copyright'];
//end of copy right

// task 3

//change text to green
let navLinks = document.querySelectorAll(`nav a`);
for(element of navLinks){element.style.color = "green"};
//end of green text nav links

//start make new links


const newLink = document.createElement('a')

 newLink.href = '#';
 
newLink.textContent = 'ZZZZZZ'
// newLink.classList.add(newLinkProps.className)
const nav = document.querySelector('nav');
nav.appendChild(newLink)

const newLink1 = document.createElement('a')
newLink1.textContent = 'Zzzz2?'
nav.prepend(newLink1);
newLink1.href = '#';





//start of trash
// var nav = newLink.appendChild(newChild);

// var nav = document.createElement("a");                
// var newLink = document.createTextNode("Water");        
// nav.appendChild(newLink);                              

