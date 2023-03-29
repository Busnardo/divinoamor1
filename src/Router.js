import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { feather } from '@expo/vector-icons';
import { touchableOpacity } from '@react-navigation/native';
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import { Header } from "react-native/Libraries/NewAppScreen";


const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.navigator>
                <Stack.screen
                    name="Home"
                    component={Home}
                />

                <Stack.screen
                    name="Detail"
                    component={Detail}
                />
            </Stack.navigator>
        </NavigationContainer>
    );
}

export default Router;
