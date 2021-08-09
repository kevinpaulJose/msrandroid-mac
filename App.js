import * as React from "react";
import { View, Text, Image, LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import Router from "./Components/RouterComponent";
import NetInfo from "@react-native-community/netinfo";
import { firestore } from "./firebase/script";
LogBox.ignoreLogs(["Setting a timer"]);
function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isReady: false,
    data: "",
  };

  _loadAssetsAsync = async () => {
    NetInfo.fetch().then(async (state) => {
      if (state.isConnected) {
        const ref = firestore
          .collection("metadata")
          .doc("w5O0vANoqoj7XjnZPx7f");
        const doc = await ref.get();
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          this.setState({ data: doc.data() });
          const imageAssets = cacheImages(doc.data().promotions);
          const internalAssets = cacheImages([
            require("./assets/img/logo.png"),
            require("./assets/img/residential.png"),
            require("./assets/img/non-residential.png"),
            require("./assets/img/interior.png"),
            require("./assets/resources/residential_background.jpg"),
            require("./assets/resources/interioi_background.png"),
            require("./assets/icons/residence_icon.png"),
            require("./assets/icons/non_residence_icon.png"),
            require("./assets/icons/money.png"),
            require("./assets/icons/next.png"),
            require("./assets/icons/file.png"),
            require("./assets/icons/sign.png"),
            require("./assets/icons/phone-call.png"),
            require("./assets/icons/warning.png"),
            require("./assets/icons/loan.png"),
            require("./assets/icons/tools.png"),
            require("./assets/icons/www.png"),
            require("./assets/icons/email.png"),
            require("./assets/icons/google-maps.png"),
          ]);
          await Promise.all([...imageAssets, ...internalAssets]);
        }
      } else {
        const internalAssets = cacheImages([
          require("./assets/img/logo.png"),
          require("./assets/img/residential.png"),
          require("./assets/img/non-residential.png"),
          require("./assets/img/interior.png"),
          require("./assets/resources/residential_background.jpg"),
          require("./assets/resources/interioi_background.png"),
          require("./assets/icons/residence_icon.png"),
          require("./assets/icons/non_residence_icon.png"),
          require("./assets/icons/money.png"),
          require("./assets/icons/next.png"),
          require("./assets/icons/file.png"),
          require("./assets/icons/sign.png"),
          require("./assets/icons/phone-call.png"),
          require("./assets/icons/warning.png"),
          require("./assets/icons/loan.png"),
          require("./assets/icons/tools.png"),
          require("./assets/icons/www.png"),
          require("./assets/icons/email.png"),
          require("./assets/icons/google-maps.png"),
        ]);
        await Promise.all([...internalAssets]);
      }
    });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <Router props={this.state.data} />;
  }
}
