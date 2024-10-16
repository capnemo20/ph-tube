// 1. Fetch, Load ans Show Catagories on html

//create Load Catagories
const loadCatagories = () => {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

//create Display Catagories
const displayCatagories = (categories) => {

    const categoryContainer = document.getElementById("categories");
    //add data in HTML
    categories.forEach((item)=>{
        console.log(item);
        //create a button
        const button  = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        //add button to category container
        categoryContainer.append(button)
    })
};

loadCatagories();

