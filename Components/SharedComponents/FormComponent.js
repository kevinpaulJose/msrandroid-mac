import React from "react";
import { Dimensions } from "react-native";
import { View, Text } from "react-native";
import { theme } from "../../theme/theme";
import { CheckBox, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputScrollView from "react-native-input-scroll-view";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import NetInfo from "@react-native-community/netinfo";
import { firestore } from "../../firebase/script";
import axios from "axios";
import emailjs from "emailjs-com";
import SimpleCard from "./SimpleCardComponent";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class FormComponent extends React.Component {
  state = {
    service_id: "msr_construction",
    template_id_1: "msr_construction_form",
    user_id: "user_Fshle7lhIGd5UAZiXexYL",
    id: "",
    to_name: "",
    to_email: "",
    message: "",
    accessToken: "7717287bb3920229e72ce310ae21e85c",
    phone: "",
    district: "",
    comments: "",
    address_1: "",
    address_2: "",
    email_error: false,
    name_error: false,
    phone_error: false,
    address_1_error: false,
    isLoading: false,
    district_error: false,
    checked: true,
    pin_error: false,
    pincode: "",
    ind_state: "",
    state_error: false,
    end: false,
    end_pin: false,
  };

  validateEmail = ({ str }) => {
    let filter =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    if (filter.test(str)) {
      // Yay! valid
      return true;
    } else {
      return false;
    }
  };
  validatePhone = ({ phone }) => {
    var phoneno = /^\d{10}$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
  validatePin = ({ pin }) => {
    var pinno = /^\d{6}$/;
    if (pin.match(pinno)) {
      return true;
    } else {
      return false;
    }
  };
  validateName = ({ name }) => {
    var letters = /^[A-Za-z ]+$/;
    if (name.match(letters) && name.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  validateState = ({ state }) => {
    var letters = /^[A-Za-z ]+$/;
    if (state.match(letters) && state.length >= 3) {
      return true;
    } else {
      return false;
    }
  };
  validateAddress = ({ address }) => {
    if (address.length >= 3) {
      return true;
    } else {
      return false;
    }
  };
  validateDistrict = ({ district }) => {
    var letters = /^[A-Za-z ]+$/;
    if (district.match(letters) && district.length >= 4) {
      return true;
    } else {
      return false;
    }
  };
  sendSelf = ({ templateParam }) => {
    emailjs
      .send(
        "msr_construction",
        "msr_self",
        templateParam,
        "user_Fshle7lhIGd5UAZiXexYL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  sendClient = ({ templateParam }) => {
    emailjs
      .send(
        "msr_construction",
        "msr_construction_form",
        templateParam,
        "user_Fshle7lhIGd5UAZiXexYL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  checkPin = () => {
    var options = {
      method: "POST",
      url: "https://pincode.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": "270a5bcb65msh877d6ff7f5533c0p19a716jsna517e32edc05",
        "x-rapidapi-host": "pincode.p.rapidapi.com",
      },
      data: { searchBy: "pincode", value: this.state.pincode },
    };
    return axios.request(options);
    // .then((response) => {
    //   if (response.data.length >= 1) {
    //     console.log(response.data[0].state_id);
    //     if (response.data[0].state_id == 31) {
    //       console.log("True");
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // })
    // .catch(function (error) {
    //   console.error(error);
    // });
  };
  handleForm = () => {
    NetInfo.fetch().then(async (state) => {
      if (state.isConnected) {
        this.setState({ isLoading: true });
        let formData = {
          about: this.props.about,
          to_name: this.state.to_name,
          to_email: this.state.to_email,
          address:
            this.state.address_1 +
            "\n" +
            this.state.address_2 +
            "\n" +
            this.state.district,
          phone: this.state.phone,
          message: this.state.comments,
          land: this.state.checked ? "Available" : "Not - Available",
        };
        this.validateEmail({ str: this.state.to_email })
          ? this.setState({ email_error: false })
          : this.setState({ email_error: true });
        this.validatePhone({ phone: this.state.phone })
          ? this.setState({ phone_error: false })
          : this.setState({ phone_error: true });
        this.validateName({ name: this.state.to_name })
          ? this.setState({ name_error: false })
          : this.setState({ name_error: true });
        this.validateAddress({ address: this.state.address_1 })
          ? this.setState({ address_1_error: false })
          : this.setState({ address_1_error: true });
        this.validateDistrict({ district: this.state.district })
          ? this.setState({ district_error: false })
          : this.setState({ district_error: true });
        this.validatePin({ pin: this.state.pincode })
          ? this.setState({ pin_error: false })
          : this.setState({ pin_error: true });
        this.validateState({ state: this.state.ind_state })
          ? this.setState({ state_error: false })
          : this.setState({ state_error: true });
        if (
          !this.state.email_error &&
          !this.state.name_error &&
          !this.state.phone_error &&
          !this.state.address_1_error &&
          !this.state.district_error &&
          !this.state.pin_error &&
          !this.state.state_error
        ) {
          var options = {
            method: "POST",
            url: "https://pincode.p.rapidapi.com/",
            headers: {
              "content-type": "application/json",
              "x-rapidapi-key":
                "270a5bcb65msh877d6ff7f5533c0p19a716jsna517e32edc05",
              "x-rapidapi-host": "pincode.p.rapidapi.com",
            },
            data: { searchBy: "pincode", value: this.state.pincode },
          };
          const response = await axios.request(options);
          // console.log(response.data);
          if (response.data.length >= 1) {
            if (response.data[0].state_id === 31) {
              const ref = firestore
                .collection("metadata")
                .doc("w5O0vANoqoj7XjnZPx7f");
              const doc = await ref.get();
              if (!doc.exists) {
                alert("Please try after some time");
                this.setState({ isLoading: false });
              } else {
                let id = parseInt(doc.data().last_id) + 1;
                this.setState({ id: id });
                const queryRef = firestore
                  .collection("metadata")
                  .doc("queries");
                queryRef
                  .update({
                    [id]: {
                      email: this.state.to_email,
                      about: this.props.about,
                      address:
                        this.state.address_1 +
                        "\n" +
                        this.state.address_2 +
                        "\n" +
                        this.state.district +
                        "\n" +
                        this.state.ind_state +
                        " - " +
                        this.state.pincode,
                      message:
                        this.state.comments +
                        "\n" +
                        "-------------" +
                        (this.state.checked
                          ? "Land Available with the customer"
                          : "Land Not Available with the customer"),
                      land: this.state.checked ? "Yes" : "No",
                      phone: this.state.phone,
                    },
                  })
                  .then(() => {
                    ref
                      .update({
                        last_id: id,
                      })
                      .then(() => {
                        let templateParam = {
                          service_id: "msr_construction",
                          template_id: "msr_self",
                          user_id: "user_Fshle7lhIGd5UAZiXexYL",
                          id: this.state.id,
                          about: this.props.about,
                          to_name: this.state.to_name,
                          to_email: "msrconstruction.co.in@gmail.com",
                          message:
                            this.state.comments +
                            "\n" +
                            "-------------" +
                            (this.state.checked
                              ? "Land Available with the customer"
                              : "Land Not Available with the customer"),
                          accessToken: "7717287bb3920229e72ce310ae21e85c",
                          address:
                            this.state.address_1 +
                            "\n" +
                            this.state.address_2 +
                            "\n" +
                            this.state.district +
                            "\n" +
                            this.state.ind_state +
                            " - " +
                            this.state.pincode,
                          phone: this.state.phone,
                        };

                        let templateParamClient = {
                          service_id: "msr_construction",
                          template_id: "msr_construction_form",
                          user_id: "user_Fshle7lhIGd5UAZiXexYL",
                          id: this.state.id,
                          about: this.props.about,
                          to_name: this.state.to_name,
                          to_email: this.state.to_email,
                          message:
                            this.state.comments +
                            "\n" +
                            "-------------" +
                            (this.state.checked
                              ? "Land Available with the customer"
                              : "Land Not Available with the customer"),
                          accessToken: "7717287bb3920229e72ce310ae21e85c",
                          address:
                            this.state.address_1 +
                            "\n" +
                            this.state.address_2 +
                            "\n" +
                            this.state.district +
                            "\n" +
                            this.state.ind_state +
                            " - " +
                            this.state.pincode,
                          phone: this.state.phone,
                        };
                        this.sendSelf({ templateParam: templateParam });
                        this.sendClient({ templateParam: templateParamClient });
                        this.setState({
                          isLoading: false,
                          end: true,
                        });
                      });
                  });

                // console.log(formData);
              }
            } else {
              this.setState({ end_pin: true, isLoading: false });
            }
          } else {
            this.setState({ end_pin: true, isLoading: false });
          }
        } else {
          let alert_info =
            "Please enter the correct Information for " +
            (this.state.name_error ? ", Name" : "") +
            (this.state.email_error ? ", Email" : "") +
            (this.state.phone_error ? ", Phone" : "") +
            (this.state.address_1_error ? ", Address Line 1" : "") +
            (this.state.district_error ? ", District" : "") +
            (this.state.pin_error ? ", Pincode" : "") +
            (this.state.state_error ? ", State" : "");
          alert(alert_info);
          this.setState({ isLoading: false });
        }
      } else {
        alert("Connect to Internet to get a Quote");
      }
    });
  };

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: this.props.bgcolor,
            // backgroundColor: "red",
            width: windowWidth - 40,

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
            flexDirection: "column",
            //   height: 500,
          }}
        >
          <View style={{ flex: 1, marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                fontFamily: theme.font_family,
                color: theme.logo_color_dark,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {this.props.title}
            </Text>
          </View>
          <View style={{ flex: 1, marginLeft: 20, marginTop: 10 }}>
            <Text
              style={{
                fontFamily: theme.font_family,
                color: theme.logo_color_dark,
                fontSize: 15,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              {this.props.about}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              //  backgroundColor: "red",
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            <View>
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                errorStyle={{ color: "red" }}
                errorMessage={this.state.name_error ? "ENTER A VALID NAME" : ""}
                value={this.state.to_name}
                placeholder="Name"
                onChangeText={(value) => this.setState({ to_name: value })}
                disabled={this.state.isLoading}
                maxLength={20}
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                value={this.state.to_email}
                placeholder="Email ID"
                onChangeText={(value) => this.setState({ to_email: value })}
                keyboardType="email-address"
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.email_error ? "ENTER A VALID EMAIL ID" : ""
                }
                disabled={this.state.isLoading}
                maxLength={50}
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                value={this.state.phone}
                placeholder="Phone Number"
                onChangeText={(value) => this.setState({ phone: value })}
                keyboardType="phone-pad"
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.phone_error ? "ENTER A VALID PHONE NUMBER" : ""
                }
                disabled={this.state.isLoading}
                maxLength={10}
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.address_1_error ? "ENTER A VALID ADDRESS" : ""
                }
                value={this.state.address_1}
                placeholder="Address Line 1"
                onChangeText={(value) => this.setState({ address_1: value })}
                disabled={this.state.isLoading}
                maxLength={100}
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                value={this.state.address_2}
                placeholder="Address Line 2"
                onChangeText={(value) => this.setState({ address_2: value })}
                disabled={this.state.isLoading}
                maxLength={100}
              />
              <Input
                value={this.state.district}
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.district_error ? "ENTER A VALID DISTRICT" : ""
                }
                placeholder="District"
                onChangeText={(value) => {
                  this.setState({
                    district: value,
                  });
                }}
                disabled={this.state.isLoading}
                maxLength={20}
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                value={this.state.ind_state}
                placeholder="State"
                disabled={this.state.isLoading}
                onChangeText={(value) => this.setState({ ind_state: value })}
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.state_error ? "ENTER A VALID State" : ""
                }
              />
              <Input
                style={{
                  fontFamily: theme.font_family,
                  color: theme.logo_color_dark,
                }}
                errorStyle={{ color: "red" }}
                errorMessage={
                  this.state.pin_error ? "ENTER A VALID PINCODE" : ""
                }
                value={this.state.pincode}
                placeholder="Pincode"
                onChangeText={(value) => this.setState({ pincode: value })}
                disabled={this.state.isLoading}
                keyboardType="number-pad"
                maxLength={6}
              />
              <Input
                placeholder="Additional Comments"
                multiline
                maxLength={256}
                style={{
                  height: 100,
                  textAlign: "center",
                  fontFamily: theme.font_family,
                }}
                value={this.state.comments}
                disabled={this.state.isLoading}
                onChangeText={(value) => {
                  this.setState({
                    comments: value,
                  });
                }}
              />
              {this.props.construction ? (
                <CheckBox
                  activeOpacity={1}
                  fontFamily={theme.font_family}
                  containerStyle={{ backgroundColor: this.props.bgcolor }}
                  checkedColor={this.props.btnColor}
                  textStyle={{ fontSize: 20, color: theme.logo_color_dark }}
                  center
                  title="I have a Land to start with!"
                  checked={this.state.checked}
                  onPress={() =>
                    this.setState({ checked: !this.state.checked })
                  }
                />
              ) : (
                <></>
              )}
            </View>

            <View style={{ marginBottom: 30, width: windowWidth - 40 - 20 }}>
              <Button
                title={
                  this.state.end && !this.state.end_pin
                    ? "Submitted"
                    : this.state.end_pin
                    ? "Not Serviceable"
                    : "Get Quote"
                }
                type="solid"
                buttonStyle={{
                  backgroundColor:
                    this.state.end && !this.state.end_pin
                      ? theme.residence.success_color
                      : this.state.end_pin
                      ? theme.warning_dark
                      : this.props.btnColor,
                }}
                raised
                loading={this.state.isLoading}
                onPress={!this.state.end ? this.handleForm : () => {}}
              />
            </View>
          </View>
        </View>
        {this.state.end && !this.state.end_pin ? (
          <View style={{}}>
            <SimpleCard
              props={{
                bgcolor: theme.success_light,
                content: "We will get back to you as soon as possible!",
                icon: require("../../assets/icons/phone-call.png"),
                fontSize: 18,
              }}
            />
          </View>
        ) : (
          <></>
        )}
        {this.state.end_pin ? (
          <View style={{}}>
            <SimpleCard
              props={{
                bgcolor: theme.warning_light,
                content:
                  "Oops! this location is not Serviceable at this moment",
                icon: require("../../assets/icons/warning.png"),
                fontSize: 18,
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
}

export default FormComponent;
