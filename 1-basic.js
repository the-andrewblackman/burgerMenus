const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "double duty",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
//selects the button container on the html
const container = document.querySelector('.btn-container');



// use DOMContentLoaded to tell the browser, once the page loads, run this to load the items.
window.addEventListener("DOMContentLoaded", function () {
  // call the function from below.  By replacing menuItems parameter with your menu array.  so the menu array passes throught the function.
  displayMenuItems(menu);
  // invoke the function at the bottom
  displayMenuButtons();
  });
  
  // menuItems is the parameter for the function.
  function displayMenuItems(menuItems) {
    // use menu, to reference the array at the top
  // map method lets you access every item in the array, and modify the array 
  let displayMenu = menuItems.map(function (item) {
    
    // console.log(item);  to make sure it's working

    // return item;  do this to make sure you can return items before moving to something more complex
    
    // go to the html you already set up, and paste the article into the template string
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // console.log(displayMenu) to make sure that you're grabbing everything correctly
  

  // join method, joins all the items listed, into one string.  Otherwise they'd be seperate
  // add the double quotes, so that it joins the items, and looks like HTML in the console when you console.log the display menu.
  displayMenu = displayMenu.join("");
  console.log(displayMenu);


  // to write the displayMenu into the HTML, use the innerHTML 
  sectionCenter.innerHTML = displayMenu;
  }


function displayMenuButtons() {
  // name the menu array, then use reduce method to iterate over the array.  
  const categories = menu.reduce(
    function (values, item) {
      // if the value is not an array, then push the item.category.
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      // if it is, then return the value.
      return values;
    },
    // needed to add "all", since there isn't an "all" category in the menu array.  Now it shows up in the console.
    ["all"]
    );
    // check the categories variable, to make sure it's working.
    // console.log(categories);
    // categoryBtns adds html to the page.
    const categoryBtns = categories.map(function(category){
      return `<button class="filter-btn" type="button" 
      data-id=${category}>${category}</button>`;
      //chain the join at the end, to get rid of the commas by adding the "", in the newly joined html.
    }).join("");

    container.innerHTML = categoryBtns;
    // selects the buttons on the html
    // you can only add something dynamically to HTML, only after its been added to innerHTML.  look two lines above.
    const filterBtns = container.querySelectorAll(".filter-btn");
    
    // filter items.  btn being the parameter.
    filterBtns.forEach(function (btn) {
    // e for event.
    btn.addEventListener("click", function (e) {
    // dataset references the data-id on the HTML.  the data- can be called anything.  data-id or data-tag or data-banana.  it doesn't matter.  the dataset method just makes it so you can reference the data-
    // console.log(e.currentTarget.dataset.id) - used to make sure it's targeting the correct thing.
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter( function (menuItem) {
      // console.log(menuItem.category) - to check your pulling from the menu array
     // if the menuItem parameter, matches the category variable, return clicked menuItem.  Because the filter method was used above.
      if (menuItem.category === category) {
      return menuItem;
      }
   });
  // console.log(menuCategory);
  // set up another if statement, since the "all" category, isn't listed in the array.
  // so we can just check and make sure it runs.
   if(category === "all") {
     // call on the function displayMenuItems, and run the menu array through it.
     displayMenuItems(menu);
     // else, run the menuCategory variable.
   } else{
     displayMenuItems(menuCategory);
    }
  });
});
}
