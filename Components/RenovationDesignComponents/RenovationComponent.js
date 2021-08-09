import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { theme } from "../../theme/theme";
import FormComponent from "../SharedComponents/FormComponent";
import Boilerplate from "../SharedComponents/LayoutBoilerplate";
import SimpleCard from "../SharedComponents/SimpleCardComponent";

const RenovationComponent = ({ props, navigation }) => {
  //   props = props.props;
  return (
    <Boilerplate
      component={<RenovationBody navigation={navigation} />}
      avatar={require("../../assets/img/interior.png")}
      back
      navigation={navigation}
      currentTheme={theme.interior}
    />
  );
};

const RenovationBody = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.success_light,
            content: "Have a complete Hassle free Experience with us",
            icon: require("../../assets/icons/sign.png"),
            fontSize: 18,
          }}
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 500 }}>
        <FormComponent
          title="Tell us what you need!"
          bgcolor={theme.interior.secondary_color}
          about="Interior Designing / Renovations"
          btnColor={theme.interior.main_color}
        />
      </View>
    </View>
  );
};

export default RenovationComponent;
