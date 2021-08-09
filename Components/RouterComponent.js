import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "./HomeComponents/HomeComponent";
import ResidentialComponent from "./NewConstructionComponents/ResidentailComponent";
import NonResidentialComponent from "./NewConstructionComponents/NonResidentailComponent";
import RenovationComponent from "./RenovationDesignComponents/RenovationComponent";

const Stack = createStackNavigator();
class Router extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={this.Home} />
          <Stack.Screen name="Residential" component={ResidentialComponent} />
          <Stack.Screen
            name="NonResidential"
            component={NonResidentialComponent}
          />
          <Stack.Screen
            name="RenovationComponent"
            component={RenovationComponent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  Home = ({ navigation }) => {
    return <HomeComponent props={this.props} navigation={navigation} />;
  };
}

export default Router;
