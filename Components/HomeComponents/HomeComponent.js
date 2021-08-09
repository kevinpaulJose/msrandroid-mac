import React from "react";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import { theme } from "../../theme/theme";
import Boilerplate from "../SharedComponents/LayoutBoilerplate";
import NewConstruction from "./NewConstructionComponent";
import RenovationDesignComponent from "./RenovationDesignComponent";
import SocialComponent from "./SocialComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeComponent = ({ props, navigation }) => {
  //   props = props.props;
  return (
    <Boilerplate
      component={<HomeBodyComponent navigation={navigation} />}
      avatar={require("../../assets/img/logo.png")}
      navigation={navigation}
      back={false}
      currentTheme={theme.main}
    />
  );
};

const HomeBodyComponent = ({ navigation }) => {
  return (
    <>
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.success_light,
            content: "You're just a call away!",
            icon: require("../../assets/icons/phone-call.png"),
            fontSize: 25,
            url: theme.url.phone,
            small_content: "+91 - 9487854458",
          }}
          touchable
          reversed={false}
        />
      </View>
      <NewConstruction navigation={navigation} />
      <RenovationDesignComponent navigation={navigation} />
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.site_light,
            content: "Checkout our Website",
            icon: require("../../assets/icons/www.png"),
            fontSize: 25,
            url: "https://msrconstruction.co.in",
            small_content: "https://msrconstruction.co.in",
          }}
          touchable
          reversed={false}
        />
      </View>
      <SocialComponent />
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.mail_background,
            content: "Simply write to us",
            icon: require("../../assets/icons/email.png"),
            fontSize: 25,
            url: "mailto:msrconstruction.co.in@gmail.com",
            small_content: "msrconstruction.co.in@gmail.com",
          }}
          touchable
          reversed={false}
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <SimpleCard
          props={{
            bgcolor: theme.maps_background,
            content: "Find us here!",
            icon: require("../../assets/icons/google-maps.png"),
            fontSize: 25,
            url: theme.url.location,
            small_content: "Navigate (Google Maps)",
          }}
          touchable
          reversed={false}
        />
      </View>
    </>
  );
};
export default HomeComponent;
