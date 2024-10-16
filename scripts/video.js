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
const displayCatagories = (data) => {
    //add data in HTML
    console.log(data);
};

loadCatagories();
displayCatagories();
