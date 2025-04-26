

// MenuList.js
import menu1 from '../assets/basicsalad.jpg';
import menu2 from '../assets/basicpizza.jpg';
import menu3 from '../assets/burger.jpg';
import menu4 from '../assets/panner.jpg';
import menu5 from '../assets/paasta2.jpg';

import menu7 from '../assets/bur.jpg';
import menu8 from '../assets/fruitburger.jpg';

import menu10 from '../assets/fry3.jpg';

import food1 from "../assets/greeksalad.jpg"
import food2 from "../assets/ceasersalad.jpg";
import food3 from "../assets/marpizza.jpg"
import food4 from "../assets/pepperpizza.jpg"
import food5 from "../assets/vegpizza.jpg"
import food6 from "../assets/grilledchicken.jpg"
import food7 from "../assets/chickenwings.jpg"
import food8 from "../assets/beefburger.jpg"
import food9 from "../assets/vegburgerrr.jpg"
import food10 from "../assets/chickenburger.jpg"
import food11 from "../assets/pastaalf.jpg"
import food12 from "../assets/bolo.jpg"
import food13 from "../assets/sandwich.jpg"
import food14 from "../assets/club.jpg"
import food15 from "../assets/frenchfries.jpg"
import  food16 from "../assets/quion.jpg"
import  food17 from "../assets/caprese.jpg"
import  food18 from "../assets/classic.jpg"
import  food19 from "../assets/cheese.jpg"
import  food20 from "../assets/curly.jpg"
import  food21 from "../assets/baked.jpg"
import  food22 from "../assets/butter.jpg"
import  food23 from "../assets/palak.jpg"
import  food24 from "../assets/tikka.jpg"
import  food25 from "../assets/secpanner.jpg"
// import menu3 from './assets/menu3.jpg';
import  food26 from "../assets/salted.jpg"
import  food27 from "../assets/chipp.jpg"
import  food28 from "../assets/source.jpg"
import  food29 from "../assets/tort.jpg"
import  food30 from "../assets/chill.jpg"
import  food31 from "../assets/vegchips.jpg"
import  food32 from "../assets/vegmanchriya.jpg"
import  food33 from "../assets/drymanchriya.jpg"
import  food34 from "../assets/hakka.jpg"
import  food35 from "../assets/chickenhaka.jpg"
import  food36 from "../assets/schezan.jpg"
import  food37 from "../assets/pannernoodles.jpg"
export const menuList = [
  { menu: "salad", menu_image: menu1 },
  { menu: "pizza", menu_image: menu2 },
  { menu: "fries", menu_image: menu3 },
  { menu: "paneer", menu_image: menu4 },
  { menu: "pasta", menu_image: menu5 },
  
  { menu: "chips", menu_image: menu7 },
  { menu: "Manchuriya", menu_image: menu8},

  { menu: "EggNoodles", menu_image: menu10},
 
  
  
//   { menu: "Burger", menu_image: menu2 },
//   { menu: "Pizza", menu_image: menu3 },
];
export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: food1,
    price: 12,
    description: "Fresh salad with feta cheese, olives, tomatoes, and cucumber.",
    category: "salad"
  },
  {
    _id: "2",
    name: "Caesar Salad",
    image: food2,
    price: 10,
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    category: "salad"
  },
  
  
  {
    _id: "3",
    name: "Margherita Pizza",
    image: food3,
    price: 15,
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    category: "pizza"
  },
  {
    _id: "4",
    name: "Pepperoni Pizza",
    image: food4,
    price: 16,
    description: "Spicy pepperoni with melted cheese on a crispy crust.",
    category: "pizza"
  },
  {
    _id: "5",
    name: "Veggie Pizza",
    image: food5,
    price: 14,
    description: "Loaded with bell peppers, onions, mushrooms, and olives.",
    category: "pizza"
  },
  {
    _id: "6",
    name: "Grilled Chicken",
    image:food6,
    price: 18,
    description: "Juicy grilled chicken breast served with steamed veggies.",
    category: "chicken"
  },
  {
    _id: "7",
    name: "Chicken Wings",
    image: food7,
    price: 13,
    description: "Spicy chicken wings served with ranch dipping sauce.",
    category: "chicken"
  },
  {
    _id: "8",
    name: "Beef Burger",
    image: food8,
    price: 11,
    description: "Grilled beef patty with lettuce, tomato, and cheese.",
    category: "burger"
  },
  {
    _id: "9",
    name: "Veggie Burger",
    image: food9,
    price: 10,
    description: "Plant-based patty with fresh toppings and sauces.",
    category: "burger"
  },
  {
    _id: "10",
    name: "Chicken Burger",
    image: food10,
    price: 12,
    description: "Crispy chicken fillet with mayo and lettuce in a bun.",
    category: "burger"
  },
  {
    _id: "11",
    name: "Pasta Alfredo",
    image: food11,
    price: 14,
    description: "Creamy Alfredo sauce over fettuccine pasta.",
    category: "pasta"
  },
  {
    _id: "12",
    name: "Spaghetti Bolognese",
    image:food12,
    price: 15,
    description: "Rich meat sauce with spaghetti noodles and parmesan.",
    category: "pasta"
  },
  {
    _id: "13",
    name: "Tuna Sandwich",
    image: food13,
    price: 9,
    description: "Tuna mixed with mayo, lettuce, and tomatoes in fresh bread.",
    category: "sandwich"
  },
  {
    _id: "14",
    name: "Club Sandwich",
    image: food14,
    price: 11,
    description: "Triple-decker with chicken, bacon, lettuce, and tomato.",
    category: "sandwich"
  },
  {
    _id: "15",
    name: "French Fries",
    image:food15,
    price: 5,
    description: "Crispy golden fries seasoned to perfection.",
    category: "snack"
  },
  {
    _id: "16",
    name: "Quinoa Salad",
    image:  food16,
    price: 11,
    description: "Protein-packed quinoa mixed with cherry tomatoes, cucumber, parsley, and lemon vinaigrette.",
    category: "salad"
  },
  {
    _id: "17",
    name: "Caprese Salad",
    image:  food17,
    price: 9,
    description: "Sliced fresh mozzarella, tomatoes, and basil, drizzled with balsamic glaze.",
    category: "salad"
  },
  {
    _id: "18",
    name: "Classic French Fries",
    image: food18,
    price: 6,
    description: "Golden, crispy fries lightly salted and served hot.",
    category: "fries"
  },
  {
    _id: "19",
    name: "Cheesy Loaded Fries",
    image: food19,
    price: 8,
    description: "Crispy fries topped with melted cheese, jalapeños, and a drizzle of sour cream.",
    category: "fries"
  },
  {
    _id: "20",
    name: "Curly Fries",
    image: food20,
    price: 7,
    description: "Seasoned curly fries with a crunchy texture and bold flavor.",
    category: "fries"
  },
  {
    _id: "21",
    name: "Sweet Potato Fries",
    image: food21,
    price: 7,
    description: "Sweet and crispy fries made from fresh sweet potatoes, served with a zesty dip.",
    category: "fries"
  },
  {
    _id: "22",
    name: "Paneer Butter Masala",
    image: food22,
    price: 14,
    description: "Soft paneer cubes in a rich, creamy tomato gravy with Indian spices.",
    category: "paneer"
  },
  {
    _id: "23",
    name: "Palak Paneer",
    image:  food23,
    price: 13,
    description: "Cottage cheese cubes cooked in a spiced spinach puree.",
    category: "paneer"
  },
  {
    _id: "24",
    name: "Paneer Tikka Masala",
    image: food24,
    price: 15,
    description: "Grilled paneer cubes in a spicy, smoky tikka masala sauce.",
    category: "paneer"
  },
  {
    _id: "25",
    name: "Penne Alfredo",
    image: food25,
    price: 14,
    description: "Penne pasta in a creamy Alfredo sauce with Parmesan cheese.",
    category: "pasta"
  },
  {
    _id: "26",
    name: "Classic Salted Chips",
    image: food26,
    price: 3,
    description: "Thin, crispy potato chips lightly seasoned with sea salt.",
    category: "chips"
  },
  {
    _id: "27",
    name: "Barbecue Chips",
    image: food27,
    price: 3.5,
    description: "Potato chips coated in a smoky, sweet barbecue seasoning.",
    category: "chips"
  },
  {
    _id: "28",
    name: "Sour Cream & Onion Chips",
    image: food28,
    price: 3.5,
    description: "Flavorful chips with a creamy blend of sour cream and onion seasoning.",
    category: "chips"
  },
  {
    _id: "29",
    name: "Spicy Tortilla Chips",
    image: food29,
    price: 4,
    description: "Crunchy corn tortilla chips with a fiery chili-lime kick.",
    category: "chips"
  },
  {
    _id: "30",
    name: "Cheese Nacho Chips",
    image: food30,
    price: 4.5,
    description: "Corn chips smothered in warm nacho cheese, perfect for dipping.",
    category: "chips"
  },
  {
    _id: "31",
    name: "Mixed Veggie Chips",
    image: food31,
    price: 4,
    description: "A colorful mix of beet, sweet potato, and taro chips – light and crunchy.",
    category: "chips"
  },
  {
    _id: "32",
    name: "Veg Manchurian Dry",
    image:food32,
    price: 7,
    description: "Crispy veggie balls tossed in a spicy, tangy sauce with onions and bell peppers.",
    category: "manchurian"
  },
 
  {
    _id: "33",
    name: "Chicken Hakka Noodles",
    image:  food34 ,
    price: 8.5,
    description: "Thin noodles stir-fried with tender chicken strips, veggies, and Indo-Chinese flavors.",
    category: "noodles"
  },
  {
    _id: "34",
    name: "Egg Noodles",
    image: food35,
    price: 8,
    description: "Wok-tossed noodles mixed with scrambled eggs, veggies, and a hint of soy.",
    category: "noodles"
  },{
    _id: "35",
    name: "Schezwan Veg Noodles",
    image:  food36,
    price: 7.5,
    description: "Spicy noodles cooked with vegetables and a fiery Schezwan sauce.",
    category: "noodles"
  },{
    _id: "37",
    name: "Paneer Noodles",
    image: food37,
    price: 8,
    description: "Soft paneer cubes tossed with noodles and Indo-Chinese spices.",
    category: "noodles"
  }

  
  
  
];

