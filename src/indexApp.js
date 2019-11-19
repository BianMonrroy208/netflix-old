import {  createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import home from "./app";
import search from "./componentes/Search";
import header from "./componentes/Header";

const MainNavigator = createStackNavigator({
    home: {screen: home, 
    navigationOptions:{
        header: null
    }    },
    search: {screen:search,
    navigationOptions:{
        header: null
    }},
    header: {screen:header}
    
});

const indexApp = createAppContainer(MainNavigator);

export default indexApp;