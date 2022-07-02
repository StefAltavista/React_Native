import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreens";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        List: ListScreen,
        Images: ImageScreen,
        Counter: CounterScreen,
        Color: ColorScreen,
        Square: SquareScreenReducer,
        Text: TextScreen,
        Box: BoxScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "My Firts App",
        },
    }
);

export default createAppContainer(navigator);
