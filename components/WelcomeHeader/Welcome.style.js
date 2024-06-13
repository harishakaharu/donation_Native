import { StyleSheet } from "react-native";
const welcomeHdrStyle = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#ccc",
  },
  textMain: { flexDirection: "column" },
  img: { height: 50, width: 50, borderRadius: 25 },
  txt: { fontFamily: "Inter", fontSize: 20, color: "#a1a1a1" },
  nameTxt: { fontFamily: "Inter", fontSize: 25 },
});
export default welcomeHdrStyle;
