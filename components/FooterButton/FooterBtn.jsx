import { TouchableOpacity, Text } from "react-native";
import React from "react";
import footerBtnStyles from "./FooterBtn.style";

const FooterBtn = ({ buttonTxt, isdisabled, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        footerBtnStyles.main,
        isdisabled && footerBtnStyles.disabledStyle,
      ]}
      disabled={isdisabled}
      onPress={onPress}
    >
      <Text style={footerBtnStyles.txt}>{buttonTxt}</Text>
    </TouchableOpacity>
  );
};

export default FooterBtn;
