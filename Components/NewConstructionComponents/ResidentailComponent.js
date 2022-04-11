import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { theme } from "../../theme/theme";
import FormComponent from "../SharedComponents/FormComponent";
import Boilerplate from "../SharedComponents/LayoutBoilerplate";
import SimpleCard from "../SharedComponents/SimpleCardComponent";
import OfferComponent from "./OfferComponent";

const ResidentialComponent = ({ props, navigation }) => {
  //   props = props.props;
  return (
    <Boilerplate
      component={<ResidentialBody navigation={navigation} />}
      avatar={require("../../assets/img/residential.png")}
      back
      navigation={navigation}
      currentTheme={theme.residence}
    />
  );
};

const ResidentialBody = ({ navigation }) => {
  return (
    <View>
      <View style={{ marginLeft: 20 }}>
        <OfferComponent betaColor={theme.residence.beta_color} />
      </View>
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.success_light,
            content:
              "We will take care of all the legal Paperworks and Plan Approvals!",
            icon: require("../../assets/icons/file.png"),
            fontSize: 18,
          }}
        />
      </View>
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.success_light,
            content: "Loan Approval Guidance and Support",
            icon: require("../../assets/icons/loan.png"),
            fontSize: 18,
          }}
        />
      </View>
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
      <View style={{ marginLeft: 20 }}>
        <SimpleCard
          props={{
            bgcolor: theme.residence.secondary_color,
            content: "Checkout our latest Projects",
            icon: require("../../assets/icons/next.png"),
            fontSize: 22,
            url: theme.url.baseURL,
          }}
          reversed
          touchable
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 500 }}>
        <FormComponent
          title="You are on the right Spot!"
          bgcolor={theme.residence.secondary_color}
          about="New Construction - Residential Homes"
          btnColor={theme.residence.main_color}
          construction
        />
      </View>
    </View>
  );
};

export default ResidentialComponent;
