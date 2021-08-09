import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../theme/theme";
import Boilerplate from "../SharedComponents/LayoutBoilerplate";
import SimpleCard from "../SharedComponents/SimpleCardComponent";
import InternshipFormComponent from "./InternshipFormComponent";

const InternshipComponent = ({ props, navigation }) => {
  //   props = props.props;
  return (
    <Boilerplate
      component={<RenovationBody navigation={navigation} />}
      avatar={require("../../assets/img/internship.png")}
      back
      navigation={navigation}
      currentTheme={theme.internship}
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
            content: "We provide Internships and Inplant tranings for College Students",
            icon: require("../../assets/icons/sign.png"),
            fontSize: 18,
          }}
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 500 }}>
        <InternshipFormComponent
          title="Register for Traning"
          bgcolor={theme.internship.secondary_color}
          about="Internships and Inplant trainings"
          btnColor={theme.internship.main_color}
        />
      </View>
    </View>
  );
};

export default InternshipComponent;
