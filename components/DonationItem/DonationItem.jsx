import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Badges from "../Badges/Badges";
import DonationItemStyle from "./DonationItem.style";
import { router } from "expo-router";

const DonationItem = ({
  BadgeTxt,
  donationId,
  imageUri,
  donationTitle,
  price,
}) => {
  return (
    <TouchableOpacity
      style={DonationItemStyle.main}
      onPress={() => router.push(`/donationDetails/${donationId}`)}
    >
      <View>
        <View style={DonationItemStyle.badge}>
          <Badges BadgeTxt={BadgeTxt} />
        </View>
        <Image source={{ uri: imageUri }} style={DonationItemStyle.headerImg} />
      </View>
      <View style={DonationItemStyle.donationInfo}>
        <View>
          <Text style={DonationItemStyle.donaTitle}>{donationTitle}</Text>
        </View>
        <View>
          <Text style={DonationItemStyle.priceTxt}>${price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DonationItem;
