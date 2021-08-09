import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../theme/theme";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import InputScrollView from "react-native-input-scroll-view";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Boilerplate = ({ component, avatar, back, navigation, currentTheme }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: windowWidth,
        height: windowHeight + Constants.statusBarHeight,
      }}
    >
      <View
        style={{
          width: windowWidth,
          height: windowHeight / 5,
          //   backgroundColor: "red",
          //   backgroundColor: theme.main_color,
          backgroundColor: currentTheme.main_color,
        }}
      >
        {back ? (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.pop()}
            style={{
              width: 30,
              height: 30,
              marginTop: Constants.statusBarHeight + 10,
              marginLeft: 10,
            }}
          >
            <Icon
              name="arrow-back-outline"
              size={30}
              type="ionicon"
              color={theme.main_color}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      <View
        style={{
          width: windowWidth,
          height: windowHeight - windowHeight / 5 + Constants.statusBarHeight,
          //   backgroundColor: "green",
          backgroundColor: currentTheme.secondary_color,
        }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ marginTop: 75, flex: 1 }}
        >
          {component}
        </ScrollView>
      </View>

      <View
        style={{
          width: 160,
          height: 160,
          borderRadius: 100,
          backgroundColor: currentTheme.main_color,
          position: "absolute",
          flex: 1,
          alignSelf: "center",
          top: windowHeight / 5 - 110,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={avatar} style={{ width: 150, height: 150 }} />
      </View>
    </View>
  );
};

export default Boilerplate;
