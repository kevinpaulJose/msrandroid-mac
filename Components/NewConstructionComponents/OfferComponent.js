import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { firestore } from "../../firebase/script";
import NetInfo from "@react-native-community/netinfo";
import SimpleCard from "../SharedComponents/SimpleCardComponent";
import { theme } from "../../theme/theme";
import { ActivityIndicator } from "react-native";

class OfferComponent extends React.Component {
  state = {
    connected: false,
    price: "",
  };
  componentDidMount() {
    NetInfo.fetch().then(async (state) => {
      if (state.isConnected) {
        const ref = firestore
          .collection("metadata")
          .doc("w5O0vANoqoj7XjnZPx7f");
        const doc = await ref.get();

        if (!doc.exists) {
          console.log("No such document!");
        } else {
          this.setState({ connected: true, price: doc.data().price_sq_ft });
        }
      } else {
        <></>;
      }
    });
  }
  render() {
    return this.state.connected ? (
      <View>
        <SimpleCard
          props={{
            bgcolor: this.props.betaColor,
            content: this.state.price + "/- Per sq. Feet only",
            icon: require("../../assets/icons/money.png"),
            fontSize: 25,
            url: "",
            small_content: "Offer applicable to selected regions only*",
          }}
          reversed={false}
        />
      </View>
    ) : (
      <View style={{ height: 100 }}>
        <ActivityIndicator
          size="large"
          color={theme.residence.main_color}
          style={{
            marginBottom: 20,
          }}
        />
      </View>
    );
  }
}

export default OfferComponent;
