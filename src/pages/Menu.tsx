import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoffee,
  FaUtensils,
  FaCocktail,
  FaBirthdayCake,
  FaFire,
  FaLeaf,
  FaChild,
} from "react-icons/fa";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface SubCategory {
  name: string;
  items: MenuItem[];
}

interface MenuCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  subcategories: SubCategory[];
}

interface MenuData {
  [key: string]: MenuCategory;
}

const menuData: MenuData = {
  breakfast: {
    title: "Breakfast",
    description:
      "All classic breakfast items are accompanied with home fries and fresh fruit.",
    icon: <FaCoffee size={40} />,
    subcategories: [
      {
        name: "Our Classic Breakfast",
        items: [
          {
            id: "b1",
            name: "Classic Breakfast",
            description:
              "Three eggs, any style, served with a choice of bacon, sausages, or ham and toast.",
            price: "$12",
          },
          {
            id: "b2",
            name: "Hearty Breakfast",
            description:
              "Three eggs any style and a 6oz sirloin steak with toast.",
            price: "$20",
            isPopular: true,
          },
          {
            id: "b3",
            name: "The Grand Slam",
            description:
              "Three eggs any style, two buttermilk pancakes, two slices bacon, two slices ham and two sausages with toast.",
            price: "$18",
            isPopular: true,
          },
          {
            id: "b4",
            name: "French Toast Stack",
            description:
              "Three large slices of Texas toast dipped in cinnamon egg batter, dusted with cinnamon and icing sugar.",
            price: "$10",
          },
          {
            id: "b5",
            name: "Buttermilk Pancakes",
            description:
              "Four large buttermilk pancakes dusted with icing sugar and a side of syrup.",
            price: "$12",
          },
          {
            id: "b6",
            name: "French Toast Combo",
            description: "Three eggs any style, two bacon and two sausages.",
            price: "$16",
          },
        ],
      },
      {
        name: "Omelettes",
        items: [
          {
            id: "o1",
            name: "The Western",
            description:
              "Diced onions, ham, and sweet peppers. Cheese it up for $2.",
            price: "$13",
          },
          {
            id: "o2",
            name: 'Say "Cheese"',
            description:
              "Choice of Swiss, cheddar or feta cheese. Add sautéed mushrooms $2, ham $2.",
            price: "$13",
          },
          {
            id: "o3",
            name: "Vegetarian Omelette",
            description:
              "Diced tomatoes, onions, sweet peppers, and mushrooms.",
            price: "$13",
            isVegetarian: true,
          },
          {
            id: "o4",
            name: "Meat Lovers",
            description:
              "Crumbled chorizo sausage, bacon, ham, and cheddar cheese.",
            price: "$16",
            isPopular: true,
          },
          {
            id: "o5",
            name: "Greek Omelette",
            description:
              "Diced tomatoes, feta cheese, olives, onions and green peppers.",
            price: "$14",
          },
          {
            id: "o6",
            name: "Oh Canada",
            description: "Maple bacon, mushrooms and cheddar cheese.",
            price: "$15",
          },
          {
            id: "o7",
            name: "Extravaganza",
            description:
              "Sausage, bacon, ham, onions, peppers, mushrooms, tomato and cheddar cheese.",
            price: "$18",
          },
          {
            id: "o8",
            name: "Spinach Florentine",
            description:
              "Spinach, onions, tomato, Béarnaise sauce, and Swiss cheese.",
            price: "$14",
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Handhelds",
        items: [
          {
            id: "h1",
            name: "Breakfast Wrap",
            description:
              "Scrambled eggs, spinach, Tex-Mex cheese, salsa, and ham. Served with home fries and fresh fruit.",
            price: "$16",
          },
          {
            id: "h2",
            name: "Breakfast Panini",
            description:
              "Fried egg, ham, mozzarella cheese, peppers and onions. Served with home fries and fresh fruit.",
            price: "$15",
          },
        ],
      },
      {
        name: "Skillets",
        items: [
          {
            id: "sk1",
            name: "Rolling Skillet",
            description:
              "Sautéed onions and peppers with pastrami, Swiss cheese, and Russian dressing. Tossed with home fries, served with three eggs and toast.",
            price: "$16",
          },
          {
            id: "sk2",
            name: "The Skillet",
            description:
              "Tossed with bacon, hot Italian sausage and mushrooms, topped with melted cheddar. Served with home fries, three eggs and toast.",
            price: "$16",
            isSpicy: true,
          },
        ],
      },
      {
        name: "Eggs Benedict",
        items: [
          {
            id: "eb1",
            name: "Traditional",
            description:
              "Poached eggs with a choice of bacon or ham, served on an English muffin and topped with Hollandaise sauce. Substitute Peameal Bacon $2.",
            price: "$15",
          },
          {
            id: "eb2",
            name: "Eggs Florentine",
            description:
              "Poached eggs topped with Béarnaise sauce, Swiss cheese, and baby spinach, served on a toasted English muffin.",
            price: "$15",
            isVegetarian: true,
          },
          {
            id: "eb3",
            name: "French Benedict",
            description:
              "Poached eggs on two slices of French toast with bacon, topped with Béarnaise sauce.",
            price: "$16",
          },
          {
            id: "eb4",
            name: "Southwestern Waffle Benedict",
            description:
              "Poached eggs, salsa, cheddar cheese, chipotle aioli and bacon.",
            price: "$15",
            isSpicy: true,
          },
          {
            id: "eb5",
            name: "Smoked Salmon Benedict",
            description:
              "Poached eggs, smoked salmon, spinach, asparagus and Béarnaise sauce.",
            price: "$18",
            isPopular: true,
          },
        ],
      },
      {
        name: "Side Orders",
        items: [
          {
            id: "s1",
            name: "Single Egg",
            description: "Poached, fried, or scrambled.",
            price: "$1.50",
          },
          {
            id: "s2",
            name: "Bacon, Ham, Sausage (3 pcs)",
            description: "",
            price: "$4",
          },
          { id: "s3", name: "Peameal (3 pcs)", description: "", price: "$5" },
          { id: "s4", name: "Home Fries", description: "", price: "$4" },
          {
            id: "s5",
            name: "Toast",
            description: "White, whole wheat, or marble rye.",
            price: "$2",
          },
        ],
      },
      {
        name: "Drinks",
        items: [
          {
            id: "bd1",
            name: "Fountain Pop",
            description:
              "Pepsi, Diet Pepsi, Ginger Ale, 7Up, Iced Tea, Mugs Root Beer.",
            price: "$2.75",
          },
          { id: "bd2", name: "Perrier", description: "", price: "$3.50" },
          { id: "bd3", name: "Water Bottle", description: "", price: "$2.75" },
          {
            id: "bd4",
            name: "Chocolate Milk",
            description: "237ml / 473ml",
            price: "$2.50 / $3.50",
          },
          {
            id: "bd5",
            name: "2% White Milk",
            description: "237ml / 473ml",
            price: "$2.50 / $3.50",
          },
          { id: "bd6", name: "Apple Juice", description: "", price: "$3.50" },
          { id: "bd7", name: "Orange Juice", description: "", price: "$3.50" },
          { id: "bd8", name: "Hot Chocolate", description: "", price: "$3.50" },
          { id: "bd9", name: "Tea / Coffee", description: "", price: "$3" },
          { id: "bd10", name: "Mimosa", description: "", price: "$7.25" },
          { id: "bd11", name: "Caesar", description: "", price: "$7.25" },
        ],
      },
    ],
  },
  main: {
    title: "Main Course",
    description: "Satisfy your hunger with our signature dishes",
    icon: <FaUtensils size={40} />,
    subcategories: [
      {
        name: "Appetizers",
        items: [
          {
            id: "a1",
            name: "Crispy Calamari",
            description:
              "Tender calamari rings, lightly breaded and fried, served with marinara sauce.",
            price: "$14.99",
          },
          {
            id: "a2",
            name: "Loaded Nachos",
            description:
              "Tortilla chips topped with cheese, jalapeños, salsa, sour cream, and guacamole.",
            price: "$16.99",
            isSpicy: true,
          },
          {
            id: "a3",
            name: "Chicken Wings",
            description:
              "A pound of crispy wings tossed in your choice of sauce: BBQ, Buffalo, Honey Garlic, or Salt & Pepper.",
            price: "$17.99",
            isPopular: true,
          },
          {
            id: "a4",
            name: "Spinach Artichoke Dip",
            description:
              "Creamy spinach and artichoke dip served with warm pita chips.",
            price: "$13.99",
            isVegetarian: true,
          },
          {
            id: "a5",
            name: "Mozzarella Sticks",
            description: "Golden fried mozzarella sticks with marinara sauce.",
            price: "$11.99",
            isVegetarian: true,
          },
          {
            id: "a6",
            name: "Soup of the Day",
            description: "Ask your server about today's homemade soup.",
            price: "$6.99",
          },
        ],
      },
      {
        name: "Burgers",
        items: [
          {
            id: "bg1",
            name: "Barrel Burger",
            description:
              "8oz Angus beef, aged cheddar, caramelized onions, special sauce, served with fries.",
            price: "$18.99",
            isPopular: true,
          },
          {
            id: "bg2",
            name: "Bacon Cheeseburger",
            description:
              "8oz Angus beef, crispy bacon, American cheese, lettuce, tomato, pickles.",
            price: "$19.99",
          },
          {
            id: "bg3",
            name: "Mushroom Swiss Burger",
            description:
              "8oz Angus beef, sautéed mushrooms, Swiss cheese, garlic aioli.",
            price: "$19.99",
          },
          {
            id: "bg4",
            name: "BBQ Burger",
            description:
              "8oz Angus beef, crispy onion rings, bacon, cheddar, BBQ sauce.",
            price: "$20.99",
          },
          {
            id: "bg5",
            name: "Veggie Burger",
            description:
              "House-made veggie patty, avocado, sprouts, tomato, chipotle mayo.",
            price: "$16.99",
            isVegetarian: true,
          },
          {
            id: "bg6",
            name: "Spicy Jalapeño Burger",
            description:
              "8oz Angus beef, pepper jack cheese, jalapeños, chipotle mayo.",
            price: "$19.99",
            isSpicy: true,
          },
        ],
      },
      {
        name: "Sandwiches & Wraps",
        items: [
          {
            id: "sw1",
            name: "Club Sandwich",
            description:
              "Triple-decker with turkey, bacon, lettuce, tomato, mayo on toasted bread.",
            price: "$16.99",
          },
          {
            id: "sw2",
            name: "Philly Cheesesteak",
            description:
              "Sliced beef, sautéed peppers, onions, mushrooms, provolone on a hoagie.",
            price: "$18.99",
          },
          {
            id: "sw3",
            name: "Chicken Caesar Wrap",
            description:
              "Grilled chicken, romaine, parmesan, caesar dressing in a flour tortilla.",
            price: "$15.99",
          },
          {
            id: "sw4",
            name: "BLT",
            description:
              "Crispy bacon, lettuce, tomato, mayo on toasted sourdough.",
            price: "$13.99",
          },
          {
            id: "sw5",
            name: "Grilled Cheese",
            description: "Three cheese blend on Texas toast with tomato soup.",
            price: "$12.99",
            isVegetarian: true,
          },
          {
            id: "sw6",
            name: "Fish Tacos",
            description:
              "Beer-battered fish, cabbage slaw, chipotle crema, lime.",
            price: "$16.99",
          },
        ],
      },
      {
        name: "Steaks & Grills",
        items: [
          {
            id: "st1",
            name: "Prime Ribeye Steak",
            description:
              "12oz ribeye, garlic butter, mashed potatoes, seasonal vegetables.",
            price: "$34.99",
            isPopular: true,
          },
          {
            id: "st2",
            name: "New York Strip",
            description:
              "10oz NY strip, peppercorn sauce, roasted potatoes, asparagus.",
            price: "$32.99",
          },
          {
            id: "st3",
            name: "Filet Mignon",
            description:
              "8oz center-cut filet, béarnaise sauce, truffle mashed potatoes.",
            price: "$38.99",
          },
          {
            id: "st4",
            name: "BBQ Baby Back Ribs",
            description: "Full rack, house-made BBQ sauce, coleslaw, fries.",
            price: "$28.99",
            isPopular: true,
          },
          {
            id: "st5",
            name: "Grilled Pork Chops",
            description: "Two bone-in chops, apple chutney, sweet potato mash.",
            price: "$24.99",
          },
        ],
      },
      {
        name: "Chicken",
        items: [
          {
            id: "ch1",
            name: "Chicken Parmesan",
            description:
              "Breaded chicken breast, marinara, mozzarella, served with pasta.",
            price: "$19.99",
            isPopular: true,
          },
          {
            id: "ch2",
            name: "Grilled Chicken Breast",
            description:
              "Herb-marinated chicken, seasonal vegetables, rice pilaf.",
            price: "$18.99",
          },
          {
            id: "ch3",
            name: "Chicken Fingers",
            description: "Crispy chicken tenders with fries and honey mustard.",
            price: "$15.99",
          },
          {
            id: "ch4",
            name: "Buffalo Chicken Sandwich",
            description:
              "Crispy chicken, buffalo sauce, blue cheese, lettuce on brioche.",
            price: "$17.99",
            isSpicy: true,
          },
          {
            id: "ch5",
            name: "Chicken Stir Fry",
            description:
              "Wok-tossed chicken, vegetables, teriyaki sauce, steamed rice.",
            price: "$18.99",
          },
        ],
      },
      {
        name: "Seafood",
        items: [
          {
            id: "sf1",
            name: "Grilled Salmon",
            description:
              "Atlantic salmon, lemon butter sauce, asparagus, wild rice.",
            price: "$24.99",
          },
          {
            id: "sf2",
            name: "Fish & Chips",
            description: "Beer-battered cod, fries, coleslaw, tartar sauce.",
            price: "$18.99",
            isPopular: true,
          },
          {
            id: "sf3",
            name: "Shrimp Scampi",
            description: "Sautéed shrimp, garlic butter, white wine, linguine.",
            price: "$22.99",
          },
          {
            id: "sf4",
            name: "Coconut Shrimp",
            description: "Crispy coconut-crusted shrimp, sweet chili sauce.",
            price: "$19.99",
          },
          {
            id: "sf5",
            name: "Seafood Platter",
            description:
              "Fish, shrimp, calamari, fries, coleslaw, tartar sauce.",
            price: "$28.99",
          },
        ],
      },
      {
        name: "Pasta",
        items: [
          {
            id: "pa1",
            name: "Spaghetti Bolognese",
            description: "Classic meat sauce, parmesan, fresh basil.",
            price: "$16.99",
          },
          {
            id: "pa2",
            name: "Fettuccine Alfredo",
            description: "Creamy parmesan sauce. Add chicken $5, shrimp $7.",
            price: "$15.99",
            isVegetarian: true,
          },
          {
            id: "pa3",
            name: "Penne Arrabbiata",
            description: "Spicy tomato sauce, garlic, chili flakes.",
            price: "$14.99",
            isSpicy: true,
            isVegetarian: true,
          },
          {
            id: "pa4",
            name: "Mushroom Risotto",
            description:
              "Creamy arborio rice, wild mushrooms, parmesan, truffle oil.",
            price: "$17.99",
            isVegetarian: true,
          },
          {
            id: "pa5",
            name: "Lasagna",
            description: "Layers of pasta, meat sauce, ricotta, mozzarella.",
            price: "$17.99",
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            id: "sa1",
            name: "Caesar Salad",
            description:
              "Romaine, parmesan, croutons, caesar dressing. Add chicken $5.",
            price: "$12.99",
          },
          {
            id: "sa2",
            name: "Greek Salad",
            description:
              "Mixed greens, feta, olives, tomatoes, cucumber, red onion.",
            price: "$13.99",
            isVegetarian: true,
          },
          {
            id: "sa3",
            name: "Cobb Salad",
            description:
              "Grilled chicken, bacon, avocado, egg, blue cheese, tomatoes.",
            price: "$17.99",
          },
          {
            id: "sa4",
            name: "House Salad",
            description:
              "Mixed greens, tomatoes, cucumber, carrots, choice of dressing.",
            price: "$9.99",
            isVegetarian: true,
          },
          {
            id: "sa5",
            name: "Spinach Salad",
            description:
              "Baby spinach, strawberries, goat cheese, candied pecans, balsamic.",
            price: "$14.99",
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  drinks: {
    title: "Drinks",
    description: "Refresh yourself with our curated beverage selection",
    icon: <FaCocktail size={40} />,
    subcategories: [
      {
        name: "Cocktails",
        items: [
          {
            id: "ck1",
            name: "Barrel Signature Cocktail",
            description: "Bourbon, honey, lemon, bitters, served over ice.",
            price: "$14.99",
            isPopular: true,
          },
          {
            id: "ck2",
            name: "Espresso Martini",
            description: "Vodka, espresso, coffee liqueur, vanilla.",
            price: "$13.99",
            isPopular: true,
          },
          {
            id: "ck3",
            name: "Mojito",
            description: "White rum, fresh mint, lime, soda water.",
            price: "$12.99",
          },
          {
            id: "ck4",
            name: "Margarita",
            description: "Tequila, triple sec, lime juice, salted rim.",
            price: "$12.99",
          },
          {
            id: "ck5",
            name: "Old Fashioned",
            description: "Bourbon, sugar, bitters, orange peel.",
            price: "$14.99",
          },
          {
            id: "ck6",
            name: "Moscow Mule",
            description: "Vodka, ginger beer, lime, served in copper mug.",
            price: "$12.99",
          },
          {
            id: "ck7",
            name: "Cosmopolitan",
            description: "Vodka, triple sec, cranberry, lime.",
            price: "$13.99",
          },
          {
            id: "ck8",
            name: "Long Island Iced Tea",
            description: "Vodka, rum, gin, tequila, triple sec, cola.",
            price: "$14.99",
          },
        ],
      },
      {
        name: "Beer",
        items: [
          {
            id: "br1",
            name: "Craft Beer Selection",
            description:
              "Ask about our rotating selection of local craft beers.",
            price: "$7.99",
          },
          {
            id: "br2",
            name: "Domestic Beer",
            description: "Molson Canadian, Coors Light, Budweiser.",
            price: "$6.49",
          },
          {
            id: "br3",
            name: "Import Beer",
            description: "Corona, Heineken, Stella Artois, Guinness.",
            price: "$7.99",
          },
          {
            id: "br4",
            name: "Beer Flight",
            description: "Four 5oz samples of our craft selection.",
            price: "$14.99",
          },
        ],
      },
      {
        name: "Wine",
        items: [
          {
            id: "wn1",
            name: "Red Wine Selection",
            description: "Curated selection of premium red wines by the glass.",
            price: "$12.99",
          },
          {
            id: "wn2",
            name: "White Wine Selection",
            description:
              "Curated selection of premium white wines by the glass.",
            price: "$11.99",
          },
          {
            id: "wn3",
            name: "Rosé",
            description: "Refreshing rosé by the glass.",
            price: "$11.99",
          },
          {
            id: "wn4",
            name: "Prosecco",
            description: "Italian sparkling wine by the glass.",
            price: "$12.99",
          },
        ],
      },
      {
        name: "Non-Alcoholic",
        items: [
          {
            id: "na1",
            name: "Fresh Squeezed Lemonade",
            description: "House-made lemonade with fresh mint.",
            price: "$4.99",
          },
          {
            id: "na2",
            name: "Tropical Smoothie",
            description: "Mango, pineapple, coconut milk, banana.",
            price: "$6.99",
          },
          {
            id: "na3",
            name: "Berry Blast Smoothie",
            description: "Mixed berries, yogurt, honey.",
            price: "$6.99",
          },
          {
            id: "na4",
            name: "Virgin Mojito",
            description: "Fresh mint, lime, soda water.",
            price: "$5.99",
          },
          {
            id: "na5",
            name: "Iced Coffee",
            description: "Cold brew coffee over ice.",
            price: "$4.99",
          },
          {
            id: "na6",
            name: "Fountain Pop",
            description: "Pepsi, Diet Pepsi, 7Up, Ginger Ale.",
            price: "$2.99",
          },
        ],
      },
    ],
  },
  desserts: {
    title: "Desserts",
    description: "End your meal on a sweet note",
    icon: <FaBirthdayCake size={40} />,
    subcategories: [
      {
        name: "Signature Desserts",
        items: [
          {
            id: "ds1",
            name: "Molten Chocolate Cake",
            description:
              "Warm chocolate cake with liquid center, vanilla ice cream.",
            price: "$10.99",
            isPopular: true,
            isVegetarian: true,
          },
          {
            id: "ds2",
            name: "Tiramisu",
            description:
              "Layers of espresso-soaked ladyfingers and mascarpone.",
            price: "$9.99",
            isVegetarian: true,
            isPopular: true,
          },
          {
            id: "ds3",
            name: "New York Cheesecake",
            description: "Classic creamy cheesecake with berry compote.",
            price: "$9.99",
            isVegetarian: true,
          },
          {
            id: "ds4",
            name: "Crème Brûlée",
            description: "Classic vanilla custard with caramelized sugar top.",
            price: "$8.99",
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Warm Desserts",
        items: [
          {
            id: "wd1",
            name: "Apple Crumble",
            description:
              "Warm spiced apples, oat crumble, caramel sauce, ice cream.",
            price: "$8.99",
            isVegetarian: true,
          },
          {
            id: "wd2",
            name: "Bread Pudding",
            description: "Warm bread pudding, bourbon sauce, whipped cream.",
            price: "$8.99",
            isVegetarian: true,
          },
          {
            id: "wd3",
            name: "Brownie Sundae",
            description:
              "Warm fudge brownie, vanilla ice cream, chocolate sauce.",
            price: "$9.99",
            isVegetarian: true,
          },
          {
            id: "wd4",
            name: "Deep Fried Oreos",
            description:
              "Golden fried Oreos, powdered sugar, chocolate drizzle.",
            price: "$7.99",
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Ice Cream & Frozen",
        items: [
          {
            id: "ic1",
            name: "Ice Cream Sundae",
            description:
              "Three scoops, whipped cream, cherry, choice of sauce.",
            price: "$7.99",
            isVegetarian: true,
          },
          {
            id: "ic2",
            name: "Banana Split",
            description: "Classic banana split with three ice cream flavors.",
            price: "$9.99",
            isVegetarian: true,
          },
          {
            id: "ic3",
            name: "Milkshake",
            description: "Vanilla, chocolate, or strawberry.",
            price: "$6.99",
            isVegetarian: true,
          },
        ],
      },
    ],
  },
  kids: {
    title: "Kids Menu",
    description: "For our little guests (12 and under)",
    icon: <FaChild size={40} />,
    subcategories: [
      {
        name: "Kids Meals",
        items: [
          {
            id: "k1",
            name: "Mini Burger",
            description: "Small beef patty, cheese, fries.",
            price: "$9.99",
          },
          {
            id: "k2",
            name: "Chicken Fingers",
            description: "Three crispy tenders with fries.",
            price: "$9.99",
          },
          {
            id: "k3",
            name: "Mac & Cheese",
            description: "Creamy cheese pasta.",
            price: "$8.99",
            isVegetarian: true,
          },
          {
            id: "k4",
            name: "Grilled Cheese",
            description: "Classic grilled cheese with fries.",
            price: "$7.99",
            isVegetarian: true,
          },
          {
            id: "k5",
            name: "Mini Pizza",
            description: "Personal cheese pizza. Add pepperoni $1.",
            price: "$8.99",
          },
          {
            id: "k6",
            name: "Fish Sticks",
            description: "Crispy fish sticks with fries.",
            price: "$9.99",
          },
          {
            id: "k7",
            name: "Pasta with Butter",
            description: "Pasta with butter and parmesan.",
            price: "$7.99",
            isVegetarian: true,
          },
          {
            id: "k8",
            name: "Hot Dog",
            description: "All-beef hot dog with fries.",
            price: "$7.99",
          },
        ],
      },
      {
        name: "Kids Drinks",
        items: [
          {
            id: "kd1",
            name: "Chocolate Milk",
            description: "",
            price: "$2.99",
          },
          { id: "kd2", name: "Apple Juice", description: "", price: "$2.99" },
          { id: "kd3", name: "Orange Juice", description: "", price: "$2.99" },
          { id: "kd4", name: "Milk", description: "", price: "$2.49" },
          {
            id: "kd5",
            name: "Shirley Temple",
            description: "Ginger ale, grenadine, cherry.",
            price: "$3.99",
          },
        ],
      },
    ],
  },
};

const Menu = () => {
  const { category } = useParams();

  const currentCategory = category || "breakfast";
  const currentMenu = menuData[currentCategory] || menuData.breakfast;

  // Count total items
  const totalItems = Object.values(menuData).reduce(
    (total, cat) =>
      total +
      cat.subcategories.reduce(
        (subTotal, sub) => subTotal + sub.items.length,
        0
      ),
    0
  );

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  letterSpacing: 4,
                  mb: 2,
                  display: "block",
                }}
              >
                {totalItems}+ DELICIOUS OPTIONS
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background:
                    "linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentMenu.title}
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  maxWidth: 600,
                  mx: "auto",
                  fontWeight: 400,
                }}
              >
                {currentMenu.description}
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Menu Content */}
      <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subcategories */}
              {currentMenu.subcategories.map((subcategory, subIndex) => (
                <Box key={subcategory.name} sx={{ mb: 6 }}>
                  {/* Subcategory Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: subIndex * 0.1 }}
                  >
                    <Box sx={{ mb: 3, textAlign: "center" }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          mb: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                        }}
                      >
                        {subcategory.name}
                      </Typography>
                      <Divider
                        sx={{
                          width: 80,
                          borderWidth: 2,
                          borderColor: "secondary.main",
                          borderRadius: 1,
                          mx: "auto",
                        }}
                      />
                    </Box>
                  </motion.div>

                  {/* Items Grid */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Grid container spacing={2}>
                      {subcategory.items.map((item) => (
                        <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.id}>
                          <motion.div
                            variants={staggerItem}
                            whileHover={{ y: -3 }}
                          >
                            <Card
                              sx={{
                                height: "100%",
                                p: 2.5,
                                border: "1px solid rgba(139, 38, 53, 0.08)",
                                position: "relative",
                                overflow: "visible",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  borderColor: "primary.main",
                                  boxShadow:
                                    "0 10px 30px rgba(139, 38, 53, 0.12)",
                                },
                              }}
                            >
                              {item.isPopular && (
                                <Chip
                                  label="Popular"
                                  size="small"
                                  sx={{
                                    position: "absolute",
                                    top: -8,
                                    right: 12,
                                    bgcolor: "primary.main",
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: "0.7rem",
                                  }}
                                />
                              )}
                              <CardContent sx={{ p: 0 }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    mb: 1,
                                  }}
                                >
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      fontWeight: 700,
                                      pr: 2,
                                      lineHeight: 1.3,
                                    }}
                                  >
                                    {item.name}
                                  </Typography>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{
                                      color: "primary.main",
                                      fontWeight: 800,
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {item.price}
                                  </Typography>
                                </Box>
                                {item.description && (
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                      mb: 1.5,
                                      lineHeight: 1.5,
                                      fontSize: "0.85rem",
                                    }}
                                  >
                                    {item.description}
                                  </Typography>
                                )}
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: 0.5,
                                    flexWrap: "wrap",
                                  }}
                                >
                                  {item.isVegetarian && (
                                    <Chip
                                      icon={<FaLeaf size={12} />}
                                      label="Veg"
                                      size="small"
                                      sx={{
                                        bgcolor: "rgba(76, 175, 80, 0.1)",
                                        color: "#4CAF50",
                                        height: 22,
                                        fontSize: "0.7rem",
                                        "& .MuiChip-icon": { color: "#4CAF50" },
                                      }}
                                    />
                                  )}
                                  {item.isSpicy && (
                                    <Chip
                                      icon={<FaFire size={12} />}
                                      label="Spicy"
                                      size="small"
                                      sx={{
                                        bgcolor: "rgba(255, 87, 34, 0.1)",
                                        color: "#FF5722",
                                        height: 22,
                                        fontSize: "0.7rem",
                                        "& .MuiChip-icon": { color: "#FF5722" },
                                      }}
                                    />
                                  )}
                                </Box>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </Box>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* Note Section */}
      <Box
        sx={{
          py: 4,
          bgcolor: "background.paper",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary">
            * Prices are subject to change. Please inform our staff of any
            allergies or dietary restrictions.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Menu;
