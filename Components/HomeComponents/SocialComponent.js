import React from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../../theme/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default SocialComponent = () => {
  return (
    <View>
      <View
        style={{
          width: windowWidth - 40,
          //   backgroundColor: theme.social_bg,
          height: 100,
          flexDirection: "row",
          marginBottom: 20,
          marginLeft: 20,
          //   padding: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Linking.openURL(theme.url.facebook)}
          style={{
            // width: (windowWidth - 40) / 5,
            // height: 60,
            backgroundColor: "#c7d7ff",
            padding: 10,
            // margin: 10,
            marginTop: 10,
            marginBottom: 10,
            flex: 1,
            borderRadius: 20,
          }}
        >
          <Icon
            containerStyle={{ flex: 1 }}
            name="logo-facebook"
            size={40}
            type="ionicon"
            color="#4267B2"
            containerStyle={{ flex: 1, justifyContent: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Linking.openURL(theme.url.instagram)}
          style={{
            // width: (windowWidth - 40) / 5,
            // height: 60,
            backgroundColor: "#ffe9e8",
            padding: 10,
            // margin: 10,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 20,
            flex: 1,
          }}
        >
          <Icon
            containerStyle={{ flex: 1 }}
            name="logo-instagram"
            size={40}
            type="ionicon"
            color="#F77737"
            containerStyle={{ flex: 1, justifyContent: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Linking.openURL(theme.url.youtube)}
          style={{
            // width: (windowWidth - 40) / 5,
            // height: 60,
            backgroundColor: "#ffbdbd",
            padding: 10,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 20,
            flex: 1,
          }}
        >
          <Icon
            containerStyle={{ flex: 1 }}
            name="logo-youtube"
            size={40}
            type="ionicon"
            color="#FF0000"
            containerStyle={{ flex: 1, justifyContent: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Linking.openURL(theme.url.whatsapp)}
          style={{
            // width: (windowWidth - 40) / 5,
            // height: 60,
            backgroundColor: "#d5ded8",
            padding: 10,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 20,
            flex: 1,
          }}
        >
          <Icon
            containerStyle={{ flex: 1 }}
            name="logo-whatsapp"
            size={40}
            type="ionicon"
            color="#25D366"
            containerStyle={{ flex: 1, justifyContent: "center" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
