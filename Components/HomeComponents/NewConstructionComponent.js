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

export default NewConstruction = ({ navigation }) => {
  return (
    <View
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
      <TouchableOpacity
        style={{
          height: 250,
          backgroundColor: theme.main_color,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
        activeOpacity={1}
        onPress={() => navigation.navigate("Residential")}
      >
        <ImageBackground
          source={require("../../assets/resources/residential_background.jpg")}
          style={{
            width: windowWidth - 40,
            height: 250,
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
          }}
        >
          <Text
            style={{
              color: theme.logo_color_dark,
              // color: "white",
              fontWeight: "bold",
              fontSize: 30,
              fontStyle: "normal",
              fontFamily: theme.font_family,
              // letterSpacing: 1,
            }}
          >
            Build a new Home?
          </Text>
        </View>
      </TouchableOpacity>
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
          onPress={() => navigation.navigate("Residential")}
          style={{
            flex: 1,
            backgroundColor: theme.residence.card_color,
            flexDirection: "row",
            height: 80,
            borderBottomColor: theme.logo_color_light,
            borderBottomWidth: 0.5,
          }}
        >
          <View style={{ width: (windowWidth - 40) / 3 }}>
            <Image
              source={require("../../assets/icons/residence_icon.png")}
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
                  fontSize: 20,
                  fontStyle: "normal",
                  fontFamily: theme.font_family,
                }}
              >
                Residential Homes
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
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("NonResidential")}
          style={{
            flex: 1,
            // backgroundColor: "orange",
            backgroundColor: theme.residence.card_color,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            flexDirection: "row",
            height: 80,
          }}
        >
          <View style={{ width: (windowWidth - 40) / 3 }}>
            <Image
              source={require("../../assets/icons/non_residence_icon.png")}
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
                  fontSize: 20,
                  fontStyle: "normal",
                  fontFamily: theme.font_family,
                }}
              >
                Apartments
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
    </View>
  );
};
