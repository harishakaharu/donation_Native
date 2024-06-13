import { StyleSheet } from "react-native";

const TabsStyles = StyleSheet.create({
  main: {
    borderWidth: 1,
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#2979f2",
    borderColor: "#ccc",
  },
  disabledStyle: { backgroundColor: "#f3f5f9" },
  txt: { fontFamily: "Inter", color: "white", textAlign: "center" },
  disabledTxt: { fontFamily: "Inter", color: "#a8a5a5", textAlign: "center" },
});
export default TabsStyles;
