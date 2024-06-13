import { StyleSheet } from "react-native";

const BadgesStyles = StyleSheet.create({
  main: {
    borderWidth: 1,

    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#145855",
    borderColor: "#ccc",
  },
  txt: {
    fontFamily: "Inter",
    color: "white",
    textAlign: "center",
    fontSize: 10,
    flexWrap: "nowrap",
    paddingHorizontal: 10,
  },
});
export default BadgesStyles;
