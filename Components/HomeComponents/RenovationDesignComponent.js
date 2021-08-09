import React from "react";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { View, Text, Image } from "react-native";
import { theme } from "../../theme/theme";
import { BlurView } from "expo-blur";
import { ImageBackground } from "react-native";
import { Icon } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default RenovationDesignComponent = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RenovationComponent")}
      activeOpacity={1}
      style={{
        width: windowWidth - 40,
        // height: 300,
        flex: 1,
        marginLeft: 20,
        flexDirection: "column",
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
      }}
    >
      <View
        style={{
          height: 400,
          backgroundColor: theme.main_color,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <ImageBackground
          source={require("../../assets/resources/interioi_background.png")}
          style={{
            width: windowWidth - 40,
            height: 400,
          }}
          imageStyle={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
          // blurRadius={2}
          resizeMode="cover"
        ></ImageBackground>

        <View
          style={{
            width: windowWidth - 40,
            height: 50,
            // backgroundColor: "red",
            position: "absolute",
            flex: 1,
            alignItems: "center",
            right: 10,
            top: 30,
            // left: 20,
          }}
        >
          <Text
            style={{
              color: theme.logo_color_dark,
              //   color: "white",
              fontWeight: "bold",
              fontSize: 25,
              fontStyle: "normal",
              fontFamily: theme.font_family,
            }}
          >
            {"Home Renovations &" + "\n" + "Interior Designing"}
          </Text>
        </View>
      </View>
      <View
        style={{
          //   height: 100,
          // backgroundColor: "blue",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          flexDirection: "column",
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("RenovationComponent")}
          style={{
            flex: 1,
            backgroundColor: theme.interior.card_color,
            flexDirection: "row",
            height: 80,
            borderBottomColor: theme.logo_color_light,
            borderBottomWidth: 0.5,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <View style={{ width: (windowWidth - 40) / 3 }}>
            <Image
              source={require("../../assets/icons/tools.png")}
              style={{
                width: (windowWidth - 40) / 3,
                height: 60,
                marginTop: 10,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              //   backgroundColor: "blue",
              width: windowWidth - 40 - (windowWidth - 40) / 3,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  flex: 2,
                  textAlign: "center",
                  color: theme.logo_color_dark,
                  //   color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontFamily: theme.font_family,
                }}
              >
                Designing & Renovations
              </Text>
              <Icon
                containerStyle={{ flex: 1 }}
                name="chevron-forward"
                size={30}
                type="ionicon"
                color={theme.logo_color_dark}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
