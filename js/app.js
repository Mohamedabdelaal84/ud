/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * 
*/

//bulid the navbar
sections.forEach(section => {
    const navData = section.getAttribute("data-nav");
    const IdAttribute = section.getAttribute('id');
    const newli = document.createElement("li");
    const links = document.createElement("a");
    links.classList.add("menu__link");
    links.setAttribute('href',IdAttribute);

//---- Scroll - link click
    links.addEventListener('click', e => {
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"})
    });
//---- data-nav
    const text = document.createTextNode(navData);
    links.appendChild(text);
    newli.appendChild(links);
    fragment.appendChild(newli);
    });
//---- append 
    Ul.appendChild(fragment);
        window.addEventListener('scroll',()=>{

//-- active class
        const activesec = document.getElementsByClassName('your-active-class')[0];
        if(activesec !== undefined){
            activesec.classList.remove('your-active-class')
        }
//-- remove class
        const ActiveNav = document.getElementsByClassName('navactive')[0];
        if(ActiveNav !== undefined){
            ActiveNav.classList.remove('navactive')
        }

//-- sections active
        sections.forEach(section => {

        const react = section.getBoundingClientRect();

        if(react.top >=-20 && react.top<600){
                               
                section.classList.add('your-active-class');
        }
    })
})

/**
 * Define Global Variables
 * 
*/

// navigation global var


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number


// remove the active class

// adding the active class

//implementating the actual function



// Scroll to anchor ID using scrollTO event


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


