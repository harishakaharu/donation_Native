import { StyleSheet } from "react-native";

const footerBtnStyles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: 200,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#2979f2",
    borderColor: "#ccc",
  },
  disabledStyle: { opacity: 0.5 },
  txt: { fontFamily: "Inter", color: "white", textAlign: "center" },
});
export default footerBtnStyles;
