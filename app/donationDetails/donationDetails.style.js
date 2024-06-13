import { StyleSheet } from "react-native";

const donationDetailsStyles = StyleSheet.create({
  main: { alignItems: "center" },
  imgCont: { maxWidth: "95%", marginHorizontal: 10 },
  headerImg: { widht: 100, height: 500 },
  badge: { width: 200, marginTop: 10 },
  donaTitleCont: {
    alignItems: "center",
    paddingVertical: 10,
  },
  donaTitle: { fontFamily: "Inter", fontSize: 20, fontWeight: "bold" },
  priceTxt: { color: "#2979f2", fontFamily: "Inter" },
  desc: { fontSize: 16, lineHeight: 24, color: "#333", textAlign: "left" },
  descCont: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
export default donationDetailsStyles;
