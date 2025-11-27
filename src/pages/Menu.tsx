import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FreeBreakfast,
  Restaurant,
  LocalBar,
  Cake,
  LocalFireDepartment,
  Spa
} from '@mui/icons-material';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils';
import { MENU_CATEGORIES } from '@/constants';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: string[];
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

interface MenuData {
  [key: string]: {
    title: string;
    description: string;
    icon: React.ReactNode;
    items: MenuItem[];
  };
}

const menuData: MenuData = {
  breakfast: {
    title: "Breakfast",
    description:
      "All classic breakfast items are accompanied with home fries and fresh fruit.",
    icon: <FreeBreakfast sx={{ fontSize: 40 }} />,
    items: [
      // OUR CLASSIC BREAKFAST
      {
        id: "b_classic_breakfast",
        name: "Classic Breakfast",
        description:
          "Three eggs, any style, served with a choice of bacon, sausages, or ham and toast.",
        price: "$12",
        tags: ["Our Classic Breakfast"],
      },
      {
        id: "b_hearty_breakfast",
        name: "Hearty Breakfast",
        description: "Three eggs any style and a 6oz sirloin steak with toast.",
        price: "$20",
        tags: ["Our Classic Breakfast"],
      },
      {
        id: "b_grand_slam",
        name: "The Grand Slam",
        description:
          "Three eggs any style, two buttermilk pancakes, two slices bacon, two slices ham and two sausages with toast.",
        price: "$18",
        tags: ["Our Classic Breakfast"],
      },
      {
        id: "b_french_toast_stack",
        name: "French Toast Stack",
        description:
          "Three large slices of Texas toast dipped in cinnamon egg batter, dusted with cinnamon and icing sugar.",
        price: "$10",
        tags: ["Our Classic Breakfast"],
      },
      {
        id: "b_buttermilk_pancakes",
        name: "Buttermilk Pancakes",
        description:
          "Four large buttermilk pancakes dusted with icing sugar and a side of syrup.",
        price: "$12",
        tags: ["Our Classic Breakfast"],
      },
      {
        id: "b_french_toast_combo",
        name: "French Toast Combo",
        description: "Three eggs any style, two bacon and two sausages.",
        price: "$16",
        tags: ["Our Classic Breakfast"],
      },

      // OMELETTES
      {
        id: "b_western_omelette",
        name: "The Western",
        description:
          "Diced onions, ham, and sweet peppers. Cheese it up for $2.",
        price: "$13",
        tags: ["Omelette"],
      },
      {
        id: "b_say_cheese",
        name: "Say “Cheese”",
        description:
          "Choice of Swiss, cheddar or feta cheese. Add sautéed mushrooms $2, ham $2.",
        price: "$13",
        tags: ["Omelette"],
      },
      {
        id: "b_vegetarian_omelette",
        name: "Vegetarian Omelette",
        description: "Diced tomatoes, onions, sweet peppers, and mushrooms.",
        price: "$13",
        tags: ["Omelette"],
      },
      {
        id: "b_meat_lovers_omelette",
        name: "Meat Lovers",
        description:
          "Crumbled chorizo sausage, bacon, ham, and cheddar cheese.",
        price: "$16",
        tags: ["Omelette"],
      },
      {
        id: "b_greek_omelette",
        name: "Greek Omelette",
        description:
          "Diced tomatoes, feta cheese, olives, onions and green peppers.",
        price: "$14",
        tags: ["Omelette"],
      },
      {
        id: "b_oh_canada",
        name: "Oh Canada",
        description: "Maple bacon, mushrooms and cheddar cheese.",
        price: "$15",
        tags: ["Omelette"],
      },
      {
        id: "b_extravaganza",
        name: "Extravaganza",
        description:
          "Sausage, bacon, ham, onions, peppers, mushrooms, tomato and cheddar cheese.",
        price: "$18",
        tags: ["Omelette"],
      },
      {
        id: "b_spinach_florentine",
        name: "Spinach Florentine",
        description:
          "Spinach, onions, tomato, Béarnaise sauce, and Swiss cheese.",
        price: "$14",
        tags: ["Omelette"],
      },

      // HANDHELDS
      {
        id: "b_breakfast_wrap",
        name: "Breakfast Wrap",
        description:
          "Scrambled eggs, spinach, Tex-Mex cheese, salsa, and ham. Served with home fries and fresh fruit.",
        price: "$16",
        tags: ["Handheld"],
      },
      {
        id: "b_breakfast_panini",
        name: "Breakfast Panini",
        description:
          "Fried egg, ham, mozzarella cheese, peppers and onions. Served with home fries and fresh fruit.",
        price: "$15",
        tags: ["Handheld"],
      },

      // SKILLETS
      {
        id: "b_rolling_skillet",
        name: "Rolling Skillet",
        description:
          "Sautéed onions and peppers with pastrami, Swiss cheese, and Russian dressing. Tossed with home fries, served with three eggs and toast.",
        price: "$16",
        tags: ["Skillet"],
      },
      {
        id: "b_the_skillet",
        name: "The Skillet",
        description:
          "Tossed with bacon, hot Italian sausage and mushrooms, topped with melted cheddar. Served with home fries, three eggs and toast.",
        price: "$16",
        tags: ["Skillet"],
      },

      // EGGS BENEDICT
      {
        id: "b_traditional_benedict",
        name: "Traditional",
        description:
          "Poached eggs with a choice of bacon or ham, served on an English muffin and topped with Hollandaise sauce. Substitute Peameal Bacon $2.",
        price: "$15",
        tags: ["Eggs Benedict"],
      },
      {
        id: "b_eggs_florentine_benedict",
        name: "Eggs Florentine",
        description:
          "Poached eggs topped with Béarnaise sauce, Swiss cheese, and baby spinach, served on a toasted English muffin.",
        price: "$15",
        tags: ["Eggs Benedict"],
      },
      {
        id: "b_french_benedict",
        name: "French Benedict",
        description:
          "Poached eggs on two slices of French toast with bacon, topped with Béarnaise sauce.",
        price: "$16",
        tags: ["Eggs Benedict"],
      },
      {
        id: "b_southwestern_waffle_benedict",
        name: "Southwestern Waffle Benedict",
        description:
          "Poached eggs, salsa, cheddar cheese, chipotle aioli and bacon.",
        price: "$15",
        tags: ["Eggs Benedict"],
      },
      {
        id: "b_smoked_salmon_benedict",
        name: "Smoked Salmon Benedict",
        description:
          "Poached eggs, smoked salmon, spinach, asparagus and Béarnaise sauce.",
        price: "$18",
        tags: ["Eggs Benedict"],
      },

      // SIDE ORDERS
      {
        id: "b_single_egg",
        name: "Single Egg",
        description: "Poached, fried, or scrambled.",
        price: "$1.50",
        tags: ["Side Order"],
      },
      {
        id: "b_bacon_ham_sausage",
        name: "Bacon, Ham, Sausage (3 pcs)",
        description: "",
        price: "$4",
        tags: ["Side Order"],
      },
      {
        id: "b_peameal",
        name: "Peameal (3 pcs)",
        description: "",
        price: "$5",
        tags: ["Side Order"],
      },
      {
        id: "b_home_fries",
        name: "Home Fries",
        description: "",
        price: "$4",
        tags: ["Side Order"],
      },
      {
        id: "b_toast",
        name: "Toast",
        description: "White, whole wheat, or marble rye.",
        price: "$2",
        tags: ["Side Order"],
      },

      // DRINKS (from breakfast menu PDF)
      {
        id: "b_fountain_pop",
        name: "Fountain Pop",
        description:
          "Pepsi, Diet Pepsi, Ginger Ale, 7Up, Iced Tea, Mugs Root Beer.",
        price: "$2.75",
        tags: ["Drink"],
      },
      {
        id: "b_perrier",
        name: "Perrier",
        description: "",
        price: "$3.50",
        tags: ["Drink"],
      },
      {
        id: "b_water_bottle",
        name: "Water Bottle",
        description: "",
        price: "$2.75",
        tags: ["Drink"],
      },
      {
        id: "b_chocolate_milk",
        name: "Chocolate Milk 237ml / 473ml",
        description: "",
        price: "$2.50 / $3.50",
        tags: ["Drink"],
      },
      {
        id: "b_white_milk",
        name: "2% White Milk 237ml / 473ml",
        description: "",
        price: "$2.50 / $3.50",
        tags: ["Drink"],
      },
      {
        id: "b_apple_juice",
        name: "Apple Juice",
        description: "",
        price: "$3.50",
        tags: ["Drink"],
      },
      {
        id: "b_orange_juice",
        name: "Orange Juice",
        description: "",
        price: "$3.50",
        tags: ["Drink"],
      },
      {
        id: "b_hot_chocolate",
        name: "Hot Chocolate",
        description: "",
        price: "$3.50",
        tags: ["Drink"],
      },
      {
        id: "b_tea_coffee",
        name: "Tea / Coffee",
        description: "",
        price: "$3",
        tags: ["Drink"],
      },
      {
        id: "b_mimosa",
        name: "Mimosa",
        description: "",
        price: "$7.25",
        tags: ["Drink"],
      },
      {
        id: "b_caesar",
        name: "Caesar",
        description: "",
        price: "$7.25",
        tags: ["Drink"],
      },
    ],
  },
  main: {
    title: "Main Course",
    description: "Satisfy your hunger with our signature dishes",
    icon: <Restaurant sx={{ fontSize: 40 }} />,
    items: [
      {
        id: "m1",
        name: "Barrel Burger",
        description:
          "8oz Angus beef, aged cheddar, caramelized onions, special sauce",
        price: "$18.99",
        isPopular: true,
      },
      {
        id: "m2",
        name: "Grilled Salmon",
        description:
          "Atlantic salmon, lemon butter sauce, asparagus, and wild rice",
        price: "$24.99",
      },
      {
        id: "m3",
        name: "Chicken Parmesan",
        description:
          "Breaded chicken breast, marinara, mozzarella, served with pasta",
        price: "$19.99",
        isPopular: true,
      },
      {
        id: "m4",
        name: "Prime Ribeye Steak",
        description:
          "12oz ribeye, garlic butter, mashed potatoes, seasonal vegetables",
        price: "$34.99",
      },
      {
        id: "m5",
        name: "Mushroom Risotto",
        description:
          "Creamy arborio rice, wild mushrooms, parmesan, truffle oil",
        price: "$17.99",
        isVegetarian: true,
      },
      {
        id: "m6",
        name: "Spicy Thai Noodles",
        description: "Rice noodles, vegetables, peanuts, choice of protein",
        price: "$16.99",
        isSpicy: true,
        isVegetarian: true,
      },
      {
        id: "m7",
        name: "BBQ Baby Back Ribs",
        description: "Full rack, house-made BBQ sauce, coleslaw, fries",
        price: "$28.99",
        isPopular: true,
      },
      {
        id: "m8",
        name: "Mediterranean Bowl",
        description: "Quinoa, grilled chicken, hummus, feta, olives, tzatziki",
        price: "$16.99",
      },
    ],
  },
  drinks: {
    title: "Drinks",
    description: "Refresh yourself with our curated beverage selection",
    icon: <LocalBar sx={{ fontSize: 40 }} />,
    items: [
      {
        id: "d1",
        name: "Barrel Signature Cocktail",
        description: "Bourbon, honey, lemon, bitters, served over ice",
        price: "$14.99",
        isPopular: true,
      },
      {
        id: "d2",
        name: "Fresh Squeezed Lemonade",
        description: "House-made lemonade with fresh mint",
        price: "$4.99",
        isVegetarian: true,
      },
      {
        id: "d3",
        name: "Craft Beer Selection",
        description: "Ask about our rotating selection of local craft beers",
        price: "$7.99",
      },
      {
        id: "d4",
        name: "Espresso Martini",
        description: "Vodka, espresso, coffee liqueur, vanilla",
        price: "$13.99",
        isPopular: true,
      },
      {
        id: "d5",
        name: "Tropical Smoothie",
        description: "Mango, pineapple, coconut milk, banana",
        price: "$6.99",
        isVegetarian: true,
      },
      {
        id: "d6",
        name: "Red Wine Selection",
        description: "Curated selection of premium red wines by the glass",
        price: "$12.99",
      },
    ],
  },
  desserts: {
    title: "Desserts",
    description: "End your meal on a sweet note",
    icon: <Cake sx={{ fontSize: 40 }} />,
    items: [
      {
        id: "ds1",
        name: "Molten Chocolate Cake",
        description:
          "Warm chocolate cake with liquid center, vanilla ice cream",
        price: "$10.99",
        isPopular: true,
        isVegetarian: true,
      },
      {
        id: "ds2",
        name: "New York Cheesecake",
        description: "Classic creamy cheesecake with berry compote",
        price: "$9.99",
        isVegetarian: true,
      },
      {
        id: "ds3",
        name: "Tiramisu",
        description: "Layers of espresso-soaked ladyfingers and mascarpone",
        price: "$9.99",
        isVegetarian: true,
        isPopular: true,
      },
      {
        id: "ds4",
        name: "Apple Crumble",
        description:
          "Warm spiced apples, oat crumble, caramel sauce, ice cream",
        price: "$8.99",
        isVegetarian: true,
      },
      {
        id: "ds5",
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar top",
        price: "$8.99",
        isVegetarian: true,
      },
    ],
  },
};

const Menu = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentCategory = category || 'breakfast';
  const currentMenu = menuData[currentCategory] || menuData.breakfast;

  const handleCategoryChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(`/menu/${newValue}`);
  };

  const getCategoryIndex = () => {
    return MENU_CATEGORIES.findIndex(cat => cat.id === currentCategory);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(139, 38, 53, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(212, 165, 116, 0.1) 0%, transparent 40%),
            linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)
          `,
          textAlign: 'center'
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
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 4,
                  mb: 2,
                  display: 'block'
                }}
              >
                DISCOVER
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #8B2635 0%, #5D1A23 50%, #D4A574 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Our Menu
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 600,
                  mx: 'auto',
                  fontWeight: 400
                }}
              >
                Crafted with love, served with passion
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Box
        sx={{
          position: 'sticky',
          top: { xs: 70, md: 80 },
          zIndex: 100,
          bgcolor: 'background.paper',
          borderBottom: '1px solid rgba(139, 38, 53, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Container maxWidth="lg">
          <Tabs
            value={getCategoryIndex()}
            onChange={(e, index) => handleCategoryChange(e, MENU_CATEGORIES[index].id)}
            variant={isMobile ? 'scrollable' : 'fullWidth'}
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                height: 4,
                borderRadius: 2,
                bgcolor: 'primary.main'
              },
              '& .MuiTab-root': {
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 600,
                py: 2.5,
                minWidth: { xs: 100, md: 'auto' },
                transition: 'color 0.3s ease',
                '&.Mui-selected': {
                  color: 'primary.main'
                }
              }
            }}
          >
            {MENU_CATEGORIES.map((cat) => (
              <Tab
                key={cat.id}
                label={cat.label}
                icon={
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {menuData[cat.id]?.icon}
                  </Box>
                }
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* Menu Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    mb: 3,
                    boxShadow: '0 10px 30px rgba(139, 38, 53, 0.3)'
                  }}
                >
                  {currentMenu.icon}
                </Box>
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {currentMenu.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
                  {currentMenu.description}
                </Typography>
              </Box>

              {/* Menu Items Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Grid container spacing={3}>
                  {currentMenu.items.map((item) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.id}>
                      <motion.div
                        variants={staggerItem}
                        whileHover={{ y: -5 }}
                      >
                        <Card
                          sx={{
                            height: '100%',
                            p: 3,
                            border: '1px solid rgba(139, 38, 53, 0.1)',
                            position: 'relative',
                            overflow: 'visible',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'primary.main',
                              boxShadow: '0 15px 40px rgba(139, 38, 53, 0.15)'
                            }
                          }}
                        >
                          {item.isPopular && (
                            <Chip
                              label="Popular"
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: -10,
                                right: 16,
                                bgcolor: 'primary.main',
                                color: 'white',
                                fontWeight: 600
                              }}
                            />
                          )}
                          <CardContent sx={{ p: 0 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Typography variant="h6" sx={{ fontWeight: 700, pr: 2 }}>
                                {item.name}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  color: 'primary.main',
                                  fontWeight: 800,
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 2, lineHeight: 1.6 }}
                            >
                              {item.description}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              {item.isVegetarian && (
                                <Chip
                                  icon={<Spa sx={{ fontSize: 16 }} />}
                                  label="Vegetarian"
                                  size="small"
                                  sx={{
                                    bgcolor: 'rgba(76, 175, 80, 0.1)',
                                    color: '#4CAF50',
                                    '& .MuiChip-icon': { color: '#4CAF50' }
                                  }}
                                />
                              )}
                              {item.isSpicy && (
                                <Chip
                                  icon={<LocalFireDepartment sx={{ fontSize: 16 }} />}
                                  label="Spicy"
                                  size="small"
                                  sx={{
                                    bgcolor: 'rgba(255, 87, 34, 0.1)',
                                    color: '#FF5722',
                                    '& .MuiChip-icon': { color: '#FF5722' }
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
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* Note Section */}
      <Box
        sx={{
          py: 6,
          bgcolor: 'background.paper',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary">
            * Prices are subject to change. Please inform our staff of any allergies or dietary restrictions.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Menu;
