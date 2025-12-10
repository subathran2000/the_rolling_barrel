import {
  FaCoffee,
  FaUtensils,
  FaCocktail,
  FaBirthdayCake,
} from "react-icons/fa";
import type { MenuData } from "@/types";

export const menuData: MenuData = {
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
            id: "br1",
            name: "Classic Breakfast",
            description:
              "Three eggs, any style, served with a choice of bacon, sausages, or ham and toast.",
            price: "$12",
          },
          {
            id: "br2",
            name: "Hearty Breakfast",
            description:
              "Three eggs any style and a 6oz sirloin steak with toast.",
            price: "$20",
          },
          {
            id: "br3",
            name: "The Grand Slam",
            description:
              "Three eggs any style, two buttermilk pancakes, two slices bacon, two slices ham and two sausages with toast.",
            price: "$18",
          },
          {
            id: "br4",
            name: "French Toast Stack",
            description:
              "Three large slices of Texas toast dipped in cinnamon egg batter, dusted with cinnamon and icing sugar.",
            price: "$10",
          },
          {
            id: "br5",
            name: "Buttermilk Pancakes",
            description:
              "Four large buttermilk pancakes dusted with icing sugar and served with a side of syrup.",
            price: "$12",
          },
          {
            id: "br6",
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
            id: "om1",
            name: "The Western",
            description:
              "Diced onions, ham, and sweet peppers. Cheese it up for $2.",
            price: "$13",
          },
          {
            id: "om2",
            name: 'Say "Cheese"',
            description:
              "Choice of Swiss, cheddar or feta cheese. Add sautéed mushrooms $2, ham $2.",
            price: "$13",
          },
          {
            id: "om3",
            name: "Vegetarian Omelette",
            description:
              "Diced tomatoes, onions, sweet peppers, and mushrooms.",
            price: "$13",
            isVegetarian: true,
          },
          {
            id: "om4",
            name: "Meat Lovers",
            description:
              "Crumbled chorizo sausage, bacon, ham, and cheddar cheese.",
            price: "$16",
          },
          {
            id: "om5",
            name: "Greek Omelette",
            description:
              "Diced tomatoes, feta cheese, olives, onions and green peppers.",
            price: "$14",
          },
          {
            id: "om6",
            name: "Oh Canada",
            description: "Maple bacon, mushrooms and cheddar cheese.",
            price: "$15",
          },
          {
            id: "om7",
            name: "Extravaganza",
            description:
              "Sausage, bacon, ham, onions, peppers, mushrooms, tomato and cheddar cheese.",
            price: "$18",
          },
          {
            id: "om8",
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
            id: "bh1",
            name: "Breakfast Wrap",
            description:
              "Scrambled eggs, spinach, Tex-Mex cheese, salsa, and ham. Served with home fries and fresh fruit.",
            price: "$16",
          },
          {
            id: "bh2",
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
              "Home fries tossed with bacon, hot Italian sausage and mushrooms, topped with melted cheddar. Served with three eggs and toast.",
            price: "$16",
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
              "Poached eggs with a choice of bacon or ham on an English muffin, topped with Hollandaise sauce. Substitute Peameal Bacon $2.",
            price: "$15",
          },
          {
            id: "eb2",
            name: "Eggs Florentine",
            description:
              "Poached eggs topped with Béarnaise sauce, Swiss cheese and baby spinach on a toasted English muffin.",
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
          },
        ],
      },
      {
        name: "Side Orders",
        items: [
          {
            id: "so1",
            name: "Single Egg",
            description: "Poached, fried, or scrambled.",
            price: "$1.50",
          },
          {
            id: "so2",
            name: "Bacon, Ham, Sausage (3 pcs)",
            description: "",
            price: "$4",
          },
          {
            id: "so3",
            name: "Peameal (3 pcs)",
            description: "",
            price: "$5",
          },
          {
            id: "so4",
            name: "Home Fries",
            description: "",
            price: "$4",
          },
          {
            id: "so5",
            name: "Toast",
            description: "White, whole wheat, or marble rye.",
            price: "$2",
          },
        ],
      },
    ],
  },

  main: {
    title: "Main Menu",
    description:
      "From shareable appetizers and hearty mains to steaks, burgers, pasta and more.",
    icon: <FaUtensils size={40} />,
    subcategories: [
      {
        name: "Appetizers",
        items: [
          {
            id: "ap1",
            name: "Calamari",
            description:
              "Lightly dusted calamari with bell peppers and jalapeño, served with sweet chili Thai sauce or chipotle aioli.",
            price: "$17",
          },
          {
            id: "ap2",
            name: "Deep Fried Pickles",
            description: "Breaded deep-fried pickles served with ranch sauce.",
            price: "$12",
          },
          {
            id: "ap3",
            name: "Coconut Shrimp",
            description:
              "Shrimp seasoned and breaded with a sweet coconut coating, served with sweet chili Thai sauce.",
            price: "$14",
          },
          {
            id: "ap4",
            name: "Veggie Quesadilla",
            description:
              "Peppers, onion and mixed cheese in a grilled tortilla. Served with sour cream and salsa.",
            price: "$14",
            isVegetarian: true,
          },
          {
            id: "ap5",
            name: "Chicken Quesadilla",
            description:
              "Peppers, onion and mixed cheese with grilled chicken. Served with sour cream and salsa.",
            price: "$16",
          },
          {
            id: "ap6",
            name: "Steak Quesadilla",
            description:
              "Peppers, onion and mixed cheese with steak. Served with sour cream and salsa.",
            price: "$18",
          },
          {
            id: "ap7",
            name: "Nachos",
            description:
              "Tri-colour corn chips with Tex-Mex cheese, diced tomatoes, jalapeños, black olives and lettuce. Served with sour cream and salsa. Add chicken or pulled pork $4.",
            price: "$16",
          },
          {
            id: "ap8",
            name: "Garlic Bread & Cheese",
            description:
              "Toasted garlic bread topped with melted mixed cheese. Add bacon $2.",
            price: "$11",
          },
          {
            id: "ap9",
            name: "Perogies",
            description:
              "Potato perogies topped with onions, cheese and bacon. Served with sour cream.",
            price: "$12",
          },
          {
            id: "ap10",
            name: "Battered Mushrooms",
            description:
              "Button mushrooms coated in tempura batter, served with ranch dipping sauce.",
            price: "$12",
          },
          {
            id: "ap11",
            name: "Saganaki",
            description:
              "Kefalotyri cheese sautéed and served sizzling hot with bruschetta, pita chips and lemon.",
            price: "$17",
          },
          {
            id: "ap12",
            name: "Spinach Dip",
            description:
              "Spinach, cream cheese and Asiago, topped with mixed cheese. Served with crispy pita wedges and corn chips.",
            price: "$18",
          },
          {
            id: "ap13",
            name: "Bruschetta Flatbread",
            description:
              "Spinach and bruschetta mix topped with feta cheese and drizzled with balsamic glaze.",
            price: "$17",
          },
          {
            id: "ap14",
            name: "White Wine Mussels",
            description:
              "Mussels sautéed in white wine with garlic, onion and bell peppers. Served with garlic bread.",
            price: "$18",
          },
          {
            id: "ap15",
            name: "Mozzarella Cheese Sticks (6 pcs)",
            description:
              "Crispy mozzarella sticks served with your choice of ranch or marinara sauce.",
            price: "$12",
          },
          {
            id: "ap16",
            name: "Mutton Rolls (2 pcs)",
            description: "Two savoury mutton rolls.",
            price: "$10",
          },
          {
            id: "ap17",
            name: "Rolling Platter",
            description:
              "Coconut shrimp, deep fried pickles, onion rings, chicken wings (hot, medium or mild) and battered mushrooms.",
            price: "$30",
          },
        ],
      },
      {
        name: "Salads",
        items: [
          {
            id: "sa1",
            name: "Classic Greek Salad",
            description:
              "Kalamata olives, tomatoes, cucumbers, mixed peppers, red onions, feta cheese and lettuce tossed in homemade Greek vinaigrette.",
            price: "Small $9 / Large $14",
            isVegetarian: true,
          },
          {
            id: "sa2",
            name: "Caesar Salad",
            description:
              "Romaine tossed with Caesar dressing, bacon and grated parmesan, topped with croutons.",
            price: "Small $9 / Large $14",
          },
          {
            id: "sa3",
            name: "House Salad",
            description:
              "Mixed greens, red onions, tomato wedges, carrots and cucumbers.",
            price: "Small $7 / Large $12",
            isVegetarian: true,
          },
        ],
      },
      {
        name: "Soups",
        items: [
          {
            id: "so_main_1",
            name: "French Onion Soup",
            description: "",
            price: "$10",
          },
          {
            id: "so_main_2",
            name: "Soup of the Day",
            description: "",
            price: "$8",
          },
        ],
      },
      {
        name: "Poutines",
        items: [
          {
            id: "pt1",
            name: "The Classic Poutine",
            description:
              "French fries topped with cheese curds or mozzarella cheese and homemade beef gravy.",
            price: "$12",
          },
          {
            id: "pt2",
            name: "Pulled Rib Poutine",
            description:
              "Cheese curds or mozzarella, topped with hickory BBQ pulled rib meat and onion rings.",
            price: "$16",
          },
          {
            id: "pt3",
            name: "Italian Meatball Fries",
            description:
              "Fries topped with meatballs, melted cheese curds or mozzarella and smothered in meat sauce.",
            price: "$16",
          },
          {
            id: "pt4",
            name: "Chicken BLT Poutine",
            description:
              "Cheese curds or mozzarella, grilled chicken and bacon smothered in beef gravy, topped with lettuce, tomato and ranch.",
            price: "$16",
          },
          {
            id: "pt5",
            name: "Butter Chicken Poutine",
            description:
              "Cheese curds or mozzarella, tomato cream sauce, green onion and chicken, drizzled with sour cream.",
            price: "$17",
          },
        ],
      },
      {
        name: "Pasta",
        items: [
          {
            id: "pa1",
            name: "Chicken Carbonara",
            description:
              "Spaghetti with tender chicken, smoked bacon, mushrooms, tomato and scallions in a creamy garlic sauce.",
            price: "$20",
          },
          {
            id: "pa2",
            name: "Classic Spaghetti",
            description:
              "Spaghetti tossed in marinara, meat sauce or Alfredo. Add meatballs $6, mushrooms $3.",
            price: "$16",
          },
          {
            id: "pa3",
            name: "Cheese Cappelletti",
            description:
              "Cappelletti stuffed with ricotta cheese, baked with tomato cream sauce and mixed cheese.",
            price: "$18",
          },
          {
            id: "pa4",
            name: "Cajun Chicken Creole",
            description:
              "Penne with Cajun chicken, andouille sausage, bell peppers and onions in a classic Creole cream sauce.",
            price: "$21",
            isSpicy: true,
          },
          {
            id: "pa5",
            name: "Cheesy Mac N' Cheese",
            description:
              "Macaroni with mozzarella, parmesan and cheddar, topped with crispy bread crumbs.",
            price: "$18",
            isVegetarian: true,
          },
          {
            id: "pa6",
            name: "Pasta Mediterraneo",
            description:
              "Penne in pesto sauce with grilled vegetables, portobello mushrooms, kalamata olives, crumbled feta and parmesan. Add chicken $4.",
            price: "$17",
            isVegetarian: true,
          },
          {
            id: "pa7",
            name: "Baked Pasta",
            description:
              "Penne with andouille sausage, chicken and sautéed onions in tomato cream sauce, topped with a trio of melted cheeses.",
            price: "$18",
          },
          {
            id: "pa8",
            name: "Beef Ravioli",
            description:
              "Ravioli stuffed with mozzarella and beef, in Alfredo or marinara sauce with parmesan.",
            price: "$18",
          },
          {
            id: "pa9",
            name: "Lobster Ravioli",
            description:
              "Lobster ravioli with sweet peas and prosecco butter in tomato fondue, topped with 1/2 Atlantic lobster tail.",
            price: "$30",
          },
          {
            id: "pa10",
            name: "Penne Pesto Toss",
            description:
              "Penne with chicken, baby spinach, bruschetta and bacon in pesto cream sauce.",
            price: "$20",
          },
          {
            id: "pa11",
            name: "Seafood Linguine",
            description:
              "Tiger prawns, calamari, scallops, peppers and onions in marinara white wine sauce, topped with 1/2 Atlantic lobster tail.",
            price: "$27",
          },
          {
            id: "pa12",
            name: "Pesto Primavera",
            description:
              "Penne with bruschetta, bell peppers, red onions, broccoli and baby spinach in basil pesto garlic cream sauce. Add chicken $4.",
            price: "$18",
            isVegetarian: true,
          },
          {
            id: "pa13",
            name: "Bacon Wrapped Scallop & Shrimp Linguine",
            description:
              "Shrimp, bell peppers, onions and broccoli in lemon cream sauce with bacon wrapped scallops.",
            price: "$26",
          },
        ],
      },
      {
        name: "Mains",
        items: [
          {
            id: "mn1",
            name: "Steaks",
            description:
              "AAA Top Sirloin charbroiled to your desire. Served with garlic bread, mashed potatoes and seasonal vegetables.",
            price: "6oz $19 / 8oz $23",
          },
          {
            id: "mn2",
            name: "Chicken Parmigiana",
            description:
              "Lightly breaded chicken topped with marinara and cheese blend, served with linguine in Alfredo or marinara and garlic toast.",
            price: "$19",
          },
          {
            id: "mn3",
            name: "Chicken or Pork Souvlaki",
            description:
              "Skewered marinated chicken or pork on rice with baby red potatoes, tzatziki, Greek salad and warm pita.",
            price: "$22 (single skewer $18)",
          },
          {
            id: "mn4",
            name: "Gyro Platter",
            description:
              "Gyro stuffed pita with tzatziki, tomatoes, onions and lettuce. Served with Greek salad and fries.",
            price: "$19",
          },
          {
            id: "mn5",
            name: "Chicken Tenders",
            description:
              "Seasoned crispy chicken tenders with coleslaw, fries and plum sauce.",
            price: "$17",
          },
          {
            id: "mn6",
            name: "Fish and Chips",
            description:
              "Two 4oz beer-battered haddock with fries, coleslaw and tartar sauce. Add haddock $6.",
            price: "$17",
          },
          {
            id: "mn7",
            name: "Hot Hammy",
            description:
              "6oz burger patty topped with Swiss cheese and mushrooms, smothered in gravy, served with vegetable medley and fries.",
            price: "$18",
          },
          {
            id: "mn8",
            name: "Liver, Bacon & Onions",
            description:
              "Tender grilled liver topped with fried onions, bacon and gravy, served with mashed potatoes and fresh vegetables.",
            price: "$18",
          },
          {
            id: "mn9",
            name: "Teriyaki Stir Fry",
            description:
              "Chicken, julienne vegetables, mushrooms and bean sprouts in homemade teriyaki glaze over basmati rice.",
            price: "$18",
          },
          {
            id: "mn10",
            name: "Butter Chicken",
            description:
              "Juicy chicken simmered in homemade butter chicken curry served over basmati rice with naan bread.",
            price: "$20",
          },
          {
            id: "mn11",
            name: "Kung Pao",
            description:
              "Spaghetti noodles with zucchini, carrots, peppers, mushrooms and red onions in sesame ginger sauce. Choice of chicken, shrimp or steak.",
            price: "$22",
            isSpicy: true,
          },
          {
            id: "mn12",
            name: "Mutton Kottu Roti",
            description:
              "Chopped roti with mutton, onion, cabbage, leeks, fried egg and curry.",
            price: "$16",
            isSpicy: true,
          },
          {
            id: "mn13",
            name: "Chicken Kottu Roti",
            description:
              "Chopped roti with chicken, onion, cabbage, leeks, fried egg and curry.",
            price: "$15",
            isSpicy: true,
          },
          {
            id: "mn14",
            name: "Mutton Curry Dinner",
            description:
              "Mutton curry served with basmati rice and pita bread.",
            price: "$20",
            isSpicy: true,
          },
          {
            id: "mn15",
            name: "Chicken Curry Dinner",
            description:
              "Chicken curry served with basmati rice and pita bread.",
            price: "$18",
            isSpicy: true,
          },
        ],
      },
      {
        name: "Sandwiches",
        items: [
          {
            id: "sw1",
            name: "The 3 Egg Western Stack",
            description:
              "Three-egg Western with diced onion and ham on toast (brown or white). Add cheddar $3.",
            price: "$13",
          },
          {
            id: "sw2",
            name: "Ultimate NY Grilled Cheese",
            description:
              "Melted Swiss and cheddar cheese, tomatoes, bacon, pickle and smoked turkey on crispy panini bread.",
            price: "$15",
          },
          {
            id: "sw3",
            name: "Steak & Philly",
            description:
              "Sirloin tips, sweet peppers, onions, HP sauce and smoked mozzarella on toasted ciabatta.",
            price: "$15",
          },
          {
            id: "sw4",
            name: "Hickory Pulled Pork Grilled Cheese",
            description:
              "Pulled pork in hickory BBQ sauce with smoked mozzarella and cheddar on crispy panini bread.",
            price: "$15",
          },
          {
            id: "sw5",
            name: "Chicken M.B.S.",
            description:
              "Grilled chicken breast with Swiss cheese, mushrooms, smoked applewood bacon and chipotle aioli on ciabatta.",
            price: "$15",
          },
          {
            id: "sw6",
            name: "Chicken Pesto Sandwich",
            description:
              "Grilled chicken, Swiss cheese, pesto aioli, bruschetta, lettuce and bacon on ciabatta.",
            price: "$15",
          },
          {
            id: "sw7",
            name: "The Reuben",
            description:
              "Grilled marble rye with pastrami, Swiss cheese, sauerkraut and Russian dressing.",
            price: "$15",
          },
          {
            id: "sw8",
            name: "BLT Sandwich",
            description: "Bacon, lettuce, tomatoes, cheddar and mayo.",
            price: "$13",
          },
          {
            id: "sw9",
            name: "Club Sandwich",
            description:
              "Bacon, tomatoes, lettuce, cheddar and mayo with your choice of smoked turkey or grilled chicken.",
            price: "$16",
          },
        ],
      },
      {
        name: "Wraps",
        items: [
          {
            id: "wr1",
            name: "Chicken Caesar Wrap",
            description:
              "Grilled chicken tossed in Caesar salad and wrapped in a flour tortilla.",
            price: "$15",
          },
          {
            id: "wr2",
            name: "Greek Chicken Wrap",
            description:
              "Lettuce, tomatoes, red onions, cucumbers, feta, olives and Greek dressing in a flour tortilla.",
            price: "$16",
          },
          {
            id: "wr3",
            name: "Cajun Steak Melt Wrap",
            description:
              "Steak with lettuce, onions, peppers, mushrooms, mixed cheese and chipotle mayo.",
            price: "$16",
            isSpicy: true,
          },
          {
            id: "wr4",
            name: "Buffalo Ranch Wrap",
            description:
              "Chicken tenders, lettuce, tomatoes, red onions and mixed cheese with buffalo ranch sauce.",
            price: "$15",
            isSpicy: true,
          },
          {
            id: "wr5",
            name: "Chicken BLT Wrap",
            description:
              "Grilled chicken, bacon, lettuce, tomato, mixed cheese and mayo.",
            price: "$16",
          },
          {
            id: "wr6",
            name: "BBQ Chicken Wrap",
            description:
              "Grilled chicken, smoked bacon, lettuce, tomatoes, mixed cheese and BBQ mayo.",
            price: "$16",
          },
        ],
      },
      {
        name: "Homemade Burgers",
        items: [
          {
            id: "bg1",
            name: "Veggie Burger",
            description:
              "Vegetarian patty topped with sautéed peppers, mushrooms, onions and crumbled feta. Substitute gluten-free bun $3.",
            price: "$15",
            isVegetarian: true,
          },
          {
            id: "bg2",
            name: "Bruschetta Feta Pesto Burger",
            description:
              "Topped with bruschetta, pepper bacon, pesto aioli and crumbled feta.",
            price: "$15",
          },
          {
            id: "bg3",
            name: "Glazed Applewood Bacon Burger",
            description:
              "Smoked mozzarella, smoky hickory BBQ sauce and applewood smoked bacon, topped with onion rings.",
            price: "$15",
          },
          {
            id: "bg4",
            name: "The Classic Burger",
            description:
              "6oz burger garnished with lettuce, onions, tomatoes and pickles. Add bacon and cheese $3.",
            price: "$14",
          },
          {
            id: "bg5",
            name: "Mushroom Swiss Patty Melt",
            description:
              "Grilled marble rye with Swiss cheese, pepper bacon, sautéed mushrooms, tomatoes and lettuce.",
            price: "$15",
          },
          {
            id: "bg6",
            name: "Rolling Burger",
            description:
              "Double 6oz patties with cheddar, onions, tomatoes and pickles.",
            price: "$19",
          },
          {
            id: "bg7",
            name: "The Great Canadian Burger",
            description:
              "Peameal bacon, lettuce, cheddar, tomatoes and an over-easy egg.",
            price: "$15",
          },
        ],
      },
      {
        name: "Steaks",
        items: [
          {
            id: "stk1",
            name: "Bordelaise Mushroom Sirloin",
            description:
              "8oz centre-cut sirloin with red wine balsamic demi reduction and sautéed mushrooms.",
            price: "$30",
          },
          {
            id: "stk2",
            name: "Bruschetta Feta Sirloin",
            description:
              "8oz centre-cut steak char-grilled and topped with bruschetta and feta cheese.",
            price: "$30",
          },
          {
            id: "stk3",
            name: "Bacon Wrapped Sirloin",
            description:
              "6oz top sirloin filet wrapped in bacon, char-grilled and topped with Béarnaise sauce.",
            price: "$27",
          },
          {
            id: "stk4",
            name: "Sirloin & Shrimp Au Gratin",
            description:
              "6oz top sirloin wrapped in bacon, topped with shrimp in garlic parmesan cream sauce and melted cheese.",
            price: "$32",
          },
          {
            id: "stk5",
            name: "New York Peppercorn Steak",
            description:
              "10oz New York sirloin char-grilled and served with creamy red wine peppercorn sauce.",
            price: "$34",
          },
        ],
      },
      {
        name: "Seafood",
        items: [
          {
            id: "sf1",
            name: "Pecan Crusted Salmon",
            description:
              "Atlantic salmon with honey maple bourbon glaze, served with rice pilaf, sweet peas and house bread.",
            price: "$27",
          },
          {
            id: "sf2",
            name: "Crab Stuffed Tilapia",
            description:
              "Pan-seared tilapia with Béarnaise sauce, seasonal vegetables, choice of potato and house bread.",
            price: "$30",
          },
          {
            id: "sf3",
            name: "Arctic Char",
            description:
              "Seasoned Arctic char served with diced sweet potatoes, asparagus and house bread.",
            price: "$28",
          },
          {
            id: "sf4",
            name: "Panko Crusted Halibut",
            description:
              "Halibut topped with shaved almonds, served with asparagus, baby reds and Béarnaise sauce.",
            price: "$30",
          },
        ],
      },
      {
        name: "Tacos & Gyros",
        items: [
          {
            id: "tc1",
            name: "Steak Tacos",
            description:
              "Lettuce, tomato, onions, peppers, mozzarella and HP sauce. Served with fries.",
            price: "$16",
          },
          {
            id: "tc2",
            name: "Creamy Fish Tacos",
            description:
              "Lettuce, tomato, red onions, cheddar, coleslaw and ranch. Served with fries.",
            price: "$16",
          },
          {
            id: "tc3",
            name: "Crispy Chicken or Shrimp Tacos",
            description:
              "Lettuce, tomato, red onions, cheddar and chipotle mayo. Served with fries.",
            price: "$16",
            isSpicy: true,
          },
          {
            id: "tc4",
            name: "Gyros",
            description:
              "Grilled gyros on warm pita with tzatziki, tomatoes, lettuce and onions.",
            price: "$14",
          },
        ],
      },
      {
        name: "Wings & Ribs",
        items: [
          {
            id: "wg1",
            name: "Wings & Fries",
            description:
              "1lb or 2lb of classic or breaded wings with fries. Sauces: BBQ, Medium, Hot, Buffalo Butter, Honey Garlic, Honey Hot, Honey BBQ, Caesar Garlic Parm, Smokey BBQ, Sweet Chili, Salt & Pepper, Lemon Pepper, Dry Cajun, Roasted Garlic Pepper.",
            price: "1lb $16 / 2lb $28",
          },
          {
            id: "rb1",
            name: "Full Rack Ribs",
            description:
              "Slow-roasted pork side ribs fire-grilled and basted with smoky hickory BBQ sauce. Served with fries, coleslaw and garlic toast.",
            price: "$28",
          },
          {
            id: "rb2",
            name: "Half Rack Ribs",
            description:
              "Half rack of slow-roasted pork side ribs with fries, coleslaw and garlic toast.",
            price: "$20",
          },
          {
            id: "rb3",
            name: "Rib & Wing Combo",
            description:
              "Half rack of pork side ribs and 1lb of wings with fries and coleslaw.",
            price: "$25",
          },
          {
            id: "rb4",
            name: "Cajun Crispy Chicken and Ribs",
            description:
              "Cajun battered chicken breast with chipotle aioli and a half rack of ribs. Served with fries and coleslaw.",
            price: "$32",
            isSpicy: true,
          },
        ],
      },
    ],
  },

  drinks: {
    title: "Drinks",
    description: "Cocktails, beer, wine, specialty coffees and soft drinks.",
    icon: <FaCocktail size={40} />,
    subcategories: [
      {
        name: "Cocktails (1oz)",
        items: [
          {
            id: "ck1",
            name: "Long Island Iced Tea",
            description: "Gin, tequila, rum, vodka, lime juice, Pepsi.",
            price: "$7.25",
          },
          {
            id: "ck2",
            name: "Tom Collins",
            description: "Gin, sweetened lime juice, soda.",
            price: "$7.25",
          },
          {
            id: "ck3",
            name: "Whiskey Sour",
            description: "Canadian whisky and lime juice.",
            price: "$7.25",
          },
          {
            id: "ck4",
            name: "Blue Hawaiian",
            description: "Rum, vodka, blue curaçao, pineapple and lime juice.",
            price: "$7.25",
          },
          {
            id: "ck5",
            name: "Sex on the Beach",
            description: "Vodka, peach schnapps, orange and cranberry juice.",
            price: "$7.25",
          },
          {
            id: "ck6",
            name: "Singapore Sling",
            description:
              "Gin, triple sec, grenadine, pineapple and lime juice.",
            price: "$7.25",
          },
          {
            id: "ck7",
            name: "Tequila Sunrise",
            description: "Tequila, orange juice, grenadine.",
            price: "$7.25",
          },
          {
            id: "ck8",
            name: "Caesar",
            description: "Vodka, Clamato, Tabasco, Worcestershire.",
            price: "$7.25",
          },
          {
            id: "ck9",
            name: "Lavender Daze",
            description: "Empress gin, cranberry juice, lemonade.",
            price: "$7.25",
          },
          {
            id: "ck10",
            name: "Mai Tai",
            description:
              "Rum, Grand Marnier, amaretto, pineapple and lime juice.",
            price: "$7.25",
          },
          {
            id: "ck11",
            name: "Twisted Cranberry",
            description: "Vodka, peach schnapps, cranberry juice.",
            price: "$7.25",
          },
          {
            id: "ck12",
            name: "Bahama Mama",
            description:
              "Rum, coconut rum, orange and pineapple juice, lime juice, grenadine.",
            price: "$7.25",
          },
          {
            id: "ck13",
            name: "Side Car",
            description: "Cognac, triple sec, lemonade.",
            price: "$7.25",
          },
          {
            id: "ck14",
            name: "Frozen Lemonade (1oz)",
            description: "Vodka, ice and lemonade.",
            price: "$7.25",
          },
          {
            id: "ck15",
            name: "Cuba Libre",
            description: "Rum, lime juice, Pepsi.",
            price: "$7.25",
          },
          {
            id: "ck16",
            name: "Apple Prosecco Punch",
            description: "Prosecco, apple juice, vodka.",
            price: "$7.25",
          },
          {
            id: "ck17",
            name: "Spicy Margarita",
            description:
              "Tequila, triple sec, lime juice, chilli syrup and red chillies.",
            price: "$7.25",
            isSpicy: true,
          },
          {
            id: "ck18",
            name: "Peach Punch",
            description: "Rosé wine, peach schnapps, lemon juice.",
            price: "$7.25",
          },
          {
            id: "ck19",
            name: "Rolling Bourbon",
            description:
              "Bourbon, crème de cacao, lemon juice, dash of grenadine.",
            price: "$7.25",
          },
          {
            id: "ck20",
            name: "Grass Hopper",
            description: "Crème de menthe, crème de cacao, splash of milk.",
            price: "$7.25",
          },
          {
            id: "ck21",
            name: "Red Sangria",
            description: "Peach schnapps, house red, ginger ale, orange juice.",
            price: "$7.25",
          },
          {
            id: "ck22",
            name: "White Sangria",
            description: "Peach schnapps, Pinot Grigio, 7Up, orange juice.",
            price: "$7.25",
          },
          {
            id: "ck23",
            name: "Make it a Double",
            description: "Add 1oz to any cocktail.",
            price: "$3.50",
          },
        ],
      },
      {
        name: "Deluxe Cocktails (2oz)",
        items: [
          {
            id: "dc1",
            name: "Manhattan",
            description: "Canadian whisky and sweet vermouth.",
            price: "$10",
          },
          {
            id: "dc2",
            name: "Rusty Nail",
            description: "Scotch and Drambuie.",
            price: "$10",
          },
          {
            id: "dc3",
            name: "Black Russian",
            description: "Vodka and Kahlúa.",
            price: "$10",
          },
          {
            id: "dc4",
            name: "White Russian",
            description: "Vodka, Kahlúa and milk.",
            price: "$10",
          },
          {
            id: "dc5",
            name: "The Train Wreck",
            description: "Cognac, triple sec and cranberry juice.",
            price: "$10",
          },
        ],
      },
      {
        name: "Frozen Cocktails (2oz)",
        items: [
          {
            id: "fr1",
            name: "Strawberry Daiquiri",
            description: "White rum and strawberry purée.",
            price: "$11",
          },
          {
            id: "fr2",
            name: "Margarita",
            description: "Tequila and lime mix.",
            price: "$11",
          },
          {
            id: "fr3",
            name: "Pina Colada",
            description: "White rum and cream of coconut.",
            price: "$11",
          },
        ],
      },
      {
        name: "Martinis (2oz)",
        items: [
          {
            id: "mt1",
            name: "Classic Martini",
            description: "Vodka or gin with vermouth.",
            price: "$11",
          },
          {
            id: "mt2",
            name: "Chocoholic",
            description: "Vodka and white crème de cacao.",
            price: "$11",
          },
          {
            id: "mt3",
            name: "Cosmopolitan",
            description: "Vodka, triple sec and lime juice.",
            price: "$11",
          },
          {
            id: "mt4",
            name: "Purple Haze",
            description: "Raspberry vodka, blue curaçao and cranberry juice.",
            price: "$11",
          },
          {
            id: "mt5",
            name: "Porn Star",
            description:
              "Vodka, blue curaçao and sourpuss raspberry with lime juice.",
            price: "$11",
          },
        ],
      },
      {
        name: "Specialty Coffee",
        items: [
          {
            id: "spc1",
            name: "B52",
            description: "Kahlúa, Baileys Irish Cream and Grand Marnier.",
            price: "$7.25",
          },
          {
            id: "spc2",
            name: "Irish Coffee",
            description: "Baileys and Bushmills Irish whiskey.",
            price: "$7.25",
          },
          {
            id: "spc3",
            name: "Monte Cristo",
            description: "Kahlúa and Grand Marnier.",
            price: "$7.25",
          },
          {
            id: "spc4",
            name: "Spanish Coffee",
            description: "Brandy and Tia Maria.",
            price: "$7.25",
          },
        ],
      },
      {
        name: "Beer On Tap",
        items: [
          {
            id: "bt1",
            name: "Domestic",
            description: "Molson Canadian, Budweiser, Bud Light, Coors Light.",
            price: "Glass $5 / Pint (20oz) $6 / Pitcher (60oz) $18",
          },
          {
            id: "bt2",
            name: "Premium",
            description:
              "Rolling Pilsner, Blue Moon, Rickard's Red, Creemore Springs, Coors Original, Miller Lite, Michelob Ultra, Alexander Keith's, Sleeman Honey Brown, Upper Canada Lager, Upper Canada Dark Ale.",
            price: "Pint (20oz) $6.50 / Pitcher (60oz) $19",
          },
          {
            id: "bt3",
            name: "Craft & Cider",
            description: "Hop Valley, Mill St. Organic, Brickworks Cider.",
            price: "Pint (20oz) $6.50 / Pitcher (60oz) $19",
          },
        ],
      },
      {
        name: "Bottled Beer / Coolers",
        items: [
          {
            id: "bb1",
            name: "Domestic Bottles",
            description:
              "Molson Canadian, Budweiser, Bud Light, Coors Light, Alexander Keith's, Rickard's Red, Michelob Ultra.",
            price: "$5.50",
          },
          {
            id: "bb2",
            name: "Imported Bottles",
            description:
              "Heineken, Corona, Stella Artois, Belgian Moon, Guinness.",
            price: "$6.50",
          },
          {
            id: "bb3",
            name: "Coolers & Tallboys",
            description:
              "Smirnoff Ice, White Claw Hard Seltzer (various flavours), Strongbow, Beau's Lug Tread, Guinness.",
            price: "$7.00–$7.50",
          },
          {
            id: "bb4",
            name: "Non-Alcoholic Beer",
            description: "Heineken 0.0.",
            price: "$4.00",
          },
        ],
      },
      {
        name: "White Wine",
        items: [
          {
            id: "ww1",
            name: "Kourtakis Apelia 1L (Greece)",
            description: "",
            price: "6oz $7 / 9oz $10 / Bottle $30",
          },
          {
            id: "ww2",
            name: "Terra Vega Sauvignon Blanc (Chile)",
            description: "",
            price: "6oz $7 / 9oz $10 / Bottle $26",
          },
          {
            id: "ww3",
            name: "Jackson-Triggs Chardonnay (Canada)",
            description: "",
            price: "6oz $7.25 / 9oz $10.5 / Bottle $27",
          },
          {
            id: "ww4",
            name: "Naked Grape Pinot Grigio (Canada)",
            description: "",
            price: "6oz $7.25 / 9oz $10.5 / Bottle $27",
          },
          {
            id: "ww5",
            name: "Inniskillin Riesling (Canada)",
            description: "",
            price: "6oz $9.75 / 9oz $14 / Bottle $34",
          },
          {
            id: "ww6",
            name: "Kim Crawford Sauvignon Blanc (NZ)",
            description: "",
            price: "Bottle $43",
          },
          {
            id: "ww7",
            name: "Santa Margherita Pinot Grigio (Italy)",
            description: "",
            price: "Bottle $44",
          },
          {
            id: "ww8",
            name: "Gallo White Zinfandel (USA)",
            description: "",
            price: "6oz $6.75 / 9oz $9.75 / Bottle $25",
          },
          {
            id: "ww9",
            name: "Jackson-Triggs VQA Cabernet",
            description: "",
            price: "6oz $7.25 / 9oz $9.5 / Bottle $26",
          },
          {
            id: "ww10",
            name: "Inniskillin VQA Pinot Grigio",
            description: "",
            price: "6oz $7.25 / 9oz $9.5 / Bottle $26",
          },
          {
            id: "ww11",
            name: "OPEN VQA Rosé",
            description: "",
            price: "6oz $8.25 / 9oz $10.75 / Bottle $30",
          },
          {
            id: "ww12",
            name: "Chardonnay",
            description: "House Chardonnay.",
            price: "6oz $10 / 9oz $12 / Bottle $32",
          },
        ],
      },
      {
        name: "Red Wine",
        items: [
          {
            id: "rw1",
            name: "Kourtakis Apelia 1L (Greece)",
            description: "",
            price: "6oz $7 / 9oz $10 / Bottle $30",
          },
          {
            id: "rw2",
            name: "Caliterra Cabernet Sauvignon (Chile)",
            description: "",
            price: "6oz $6.75 / 9oz $9.75 / Bottle $25",
          },
          {
            id: "rw3",
            name: "Smoky Bay Shiraz (Australia)",
            description: "",
            price: "6oz $6.75 / 9oz $9.75 / Bottle $25",
          },
          {
            id: "rw4",
            name: "Jackson-Triggs Merlot (Canada)",
            description: "",
            price: "6oz $7.5 / 9oz $11 / Bottle $27",
          },
          {
            id: "rw5",
            name: "Sandbanks Cabernet Franc VQA (Canada)",
            description: "",
            price: "6oz $10.5 / 9oz $15 / Bottle $35",
          },
          {
            id: "rw6",
            name: "Jacob's Creek Double Barrel Shiraz (Australia)",
            description: "",
            price: "Bottle $44",
          },
          {
            id: "rw7",
            name: "Rodney Strong Sonoma County Cabernet (USA)",
            description: "",
            price: "Bottle $58",
          },
          {
            id: "rw8",
            name: "Jackson-Triggs VQA Merlot",
            description: "",
            price: "6oz $7.5 / 9oz $9 / Bottle $26",
          },
          {
            id: "rw9",
            name: "Jackson-Triggs VQA Pinot Grigio",
            description: "",
            price: "6oz $7.5 / 9oz $9 / Bottle $26",
          },
          {
            id: "rw10",
            name: "Red Blend",
            description: "House red blend.",
            price: "6oz $10 / 9oz $12 / Bottle $32",
          },
        ],
      },
      {
        name: "Non-Alcoholic (Soft Drinks)",
        items: [
          {
            id: "na1",
            name: "Fountain Pop",
            description:
              "Pepsi, Diet Pepsi, Ginger Ale, 7Up, Iced Tea, Mugs Root Beer.",
            price: "$2.75",
          },
          { id: "na2", name: "Perrier", description: "", price: "$3.50" },
          { id: "na3", name: "Water Bottle", description: "", price: "$2.75" },
          {
            id: "na4",
            name: "Chocolate Milk",
            description: "237ml / 473ml.",
            price: "$2.50 / $3.50",
          },
          {
            id: "na5",
            name: "2% White Milk",
            description: "237ml / 473ml.",
            price: "$2.50 / $3.50",
          },
          { id: "na6", name: "Apple Juice", description: "", price: "$3.50" },
          { id: "na7", name: "Orange Juice", description: "", price: "$3.50" },
          { id: "na8", name: "Hot Chocolate", description: "", price: "$3.50" },
          { id: "na9", name: "Tea / Coffee", description: "", price: "$3.00" },
          {
            id: "na10",
            name: "Virgin Caesar",
            description: "",
            price: "$4.00",
          },
          {
            id: "na11",
            name: "Frozen Daiquiri (Virgin)",
            description: "",
            price: "$4.50",
          },
        ],
      },
    ],
  },

  desserts: {
    title: "Desserts",
    description: "Finish with one of our house-made desserts.",
    icon: <FaBirthdayCake size={40} />,
    subcategories: [
      {
        name: "Desserts",
        items: [
          {
            id: "ds1",
            name: "New York Cheesecake",
            description:
              "High-rise traditional cheesecake on a graham cracker crust.",
            price: "$10",
            isVegetarian: true,
          },
          {
            id: "ds2",
            name: "Tiramisu",
            description:
              "Espresso cake layers topped with a dusting of cocoa sugar.",
            price: "$8",
            isVegetarian: true,
          },
          {
            id: "ds3",
            name: "Raspberry Greek Yogurt Cheesecake",
            description:
              "Greek yogurt cheesecake with raspberry purée and raspberry cake.",
            price: "$9",
            isVegetarian: true,
          },
          {
            id: "ds4",
            name: "Chunky Chocolate Mountain",
            description:
              "Dark chocolate mousse with chunks of cheesecake, topped with slivered almonds and caramel cream.",
            price: "$9",
            isVegetarian: true,
          },
          {
            id: "ds5",
            name: "Chocolate Bombe",
            description:
              "Smooth chocolate mousse with a caramel centre on chocolate genoise, coated with dark chocolate.",
            price: "$8",
            isVegetarian: true,
          },
          {
            id: "ds6",
            name: "Carrot Caramel Cheesecake",
            description:
              "Chunks of carrot cake on a graham cracker crust topped with a caramel blend.",
            price: "$8.50",
          },
        ],
      },
    ],
  },
};

// Helper to get total menu items count
export const getTotalMenuItems = (): number => {
  return Object.values(menuData).reduce(
    (total, cat) =>
      total +
      cat.subcategories.reduce(
        (subTotal, sub) => subTotal + sub.items.length,
        0
      ),
    0
  );
};
