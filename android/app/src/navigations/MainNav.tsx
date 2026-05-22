import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from '../utils';

// screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList } from '../types/type';
import OrdersScreen from "../screens/OrderScreen";
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';


const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={ROUTES.ORDERS}component={OrdersScreen}/>
      <Stack.Screen name={ROUTES.PRODUCTS} component={ProductsScreen} />
      <Stack.Screen name={ROUTES.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;