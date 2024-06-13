import { Text, View } from "react-native";
import React from "react";
import BadgesStyles from "./Badges.style";

const Badges = ({ BadgeTxt }) => {
  return (
    <View style={BadgesStyles.main}>
      <Text style={BadgesStyles.txt}>{BadgeTxt}</Text>
    </View>
  );
};

export default Badges;
