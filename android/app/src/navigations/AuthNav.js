import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from '../utils';

//screens
import Login from '../screens/auth/Login'

const Stack = createNativeStackNavigator ();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName= {ROUTES.LOGIN}>
            <Stack.Screen name={ROUTES.LOGIN} component ={Login} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;