import { StyleSheet } from "react-native";

const DonationItemStyle = StyleSheet.create({
  main: { marginBottom: 20 },
  headerImg: { height: 170, width: 185, borderRadius: 20 },
  priceTxt: { color: "#2979f2", marginTop: 2, fontFamily: "Inter" },
  donaTitle: { fontFamily: "Inter", fontWeight: "700", fontSize: 16 },
  badge: { position: "absolute", top: 13, left: 10, zIndex: 1 },
  donationInfo: {
    marginTop: 5,
  },
});
export default DonationItemStyle;
