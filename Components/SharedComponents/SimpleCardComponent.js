import React from "react";
import { View } from "react-native";
import { Image, Text } from "react-native";
import { Linking } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { theme } from "../../theme/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default SimpleCard = ({ props, touchable, reversed }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (touchable) {
          Linking.openURL(props.url);
        }
      }}
      activeOpacity={1}
      style={{
        backgroundColor: props.bgcolor,
        // backgroundColor: "red",
        width: windowWidth - 40,
        height: 100,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginBottom: 20,

        flexDirection: reversed ? "row-reverse" : "row",
      }}
    >
      <View
        style={{
          width: (windowWidth - 40) / 5,
          backgroundColor: props.bgcolor,
          height: 100,
          borderBottomLeftRadius: reversed ? 0 : 20,
          borderTopLeftRadius: reversed ? 0 : 20,
          borderTopRightRadius: reversed ? 20 : 0,
          borderBottomRightRadius: reversed ? 20 : 0,
        }}
      >
        <Image
          source={props.icon}
          style={{
            width: (windowWidth - 40) / 8,
            height: 60,
            marginTop: 20,
            alignSelf: "center",
          }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: windowWidth - 40 - (windowWidth - 40) / 5,
          backgroundColor: props.bgcolor,
          height: 100,
          borderTopRightRadius: reversed ? 0 : 20,
          borderBottomRightRadius: reversed ? 0 : 20,
          borderBottomLeftRadius: reversed ? 20 : 0,
          borderTopLeftRadius: reversed ? 20 : 0,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: theme.font_family,
            color: theme.logo_color_dark,
            fontSize: props.fontSize,
            textAlign: "center",
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          {props.content}
        </Text>
        {props.small_content ? (
          <Text
            style={{
              fontFamily: theme.font_family,
              color: theme.logo_color_dark,
              fontSize: 10,
              textAlign: "center",
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            {props.small_content}
          </Text>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
