

const test1= performance.now()

//i used queryselector to bring meun items under one variable so i can style them with one variable//
const x=document.querySelector("#navbar")

// i will use insertAdjacentHTML for every menu item because ever item is unique than other and have its own id//
const c="<a href=#section1 id=hello  data-nav=section 1  class=menu-link> <img src=images/egypt.png height=20px width=20px> Egypt </a>"
x.insertAdjacentHTML("afterbegin", c);


const h="<a href=#section2 id=nadine  data-nav=section 2 class=menu-link> <img src=images/italy.png height=20px width=20px> Italy </a>"
x.insertAdjacentHTML("afterbegin", h)


const l="<a href=#section3 id=layla   data-nav=section 3 class=menu-link>  <img src=images/usa.png height=20px width=20px>  USA </a>"
x.insertAdjacentHTML("afterbegin",l)


const k="<a href=#section4 id=dina  data-nav=section 4  class=menu-link> <img src=images/France.png height=20px width=20px> France </a>"
x.insertAdjacentHTML("afterbegin",k)

//i create abutton link and make it unvisiblae to make it like anchor //
const u="<button id=totop > TOP </button>"
x.insertAdjacentHTML("afterbegin",u);
// i add function to the button inorder to make this button going to top of the page//
const hee=document.querySelector('#totop')
hee.addEventListener('click',function() {window.scrollTo({ top: 0, behavior: "smooth" })} );

const nave=document.getElementById('navbar')
function scroll(event) {
event.preventDefault()

const sectionall = document.querySelector(`[data-nav= '${event.target.textContent}']`)
	sectionall.scrollIntoView ({ behavior:'smooth', block:'center'})
}
nave.addEventListener('click', scroll);

/*const sections=document.querySelectorAll('section')
const observer = new IntersectionObserver(function(entries,observer){
	entries.forEach(entry) =>
	{if(entry.isIntersecting)
		{section.classlist.remove('your-active-class')
entry.target.classList.add('your-active-class')
const link=document.querySelector(`[href='#${entry.target.id}]'`);
observer.unobserve(entry.target);
}
});

for(const section of sections){observer.observe(section)} }
/*

*/
const test2= performance.now ()


 console.log(test2-test1+'Milliseconds')









/*

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
 * Define Global Variables
 *
*/


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


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
