import { View, Text, Image } from "react-native";
import React from "react";
import welcomeHdrStyle from "./Welcome.style";

const WelcomeHdr = ({ titleName, titleDesc, profImg }) => {
  return (
    <View style={welcomeHdrStyle.main}>
      <View style={welcomeHdrStyle.textMain}>
        <Text style={welcomeHdrStyle.txt}>{titleDesc}</Text>
        <Text style={welcomeHdrStyle.nameTxt}>{titleName}</Text>
      </View>
      <Image
        style={welcomeHdrStyle.img}
        source={profImg}
        resizeMode="cover"
      ></Image>
    </View>
  );
};

export default WelcomeHdr;
