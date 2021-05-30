const menu = ["Kadhai Paneer", "Daal Makhni", "Pizza",
    "Onion Pizza", "Pasta", "Chicken Biryani",
    "Chicken Mughlai", "Garlic Bread", "Garlic Naan",
    "Kadhai Chicken", "Tandoori Chicken", "Onion Rings",
    "French Fries", "Paneer Tikka", "Garlic Toast", "Malai Chaap",
    "Momos", "Afghani Chicken", "Egg Curry", "Egg Mac Burger",
    "Egg Bhurji", "Egg Maggi"];
    

function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }

    return true;
}

let vegMenu = menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);

let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);
console.log(jainMenu);
