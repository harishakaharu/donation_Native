import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  donationItemContainer: {
    maxWidth: "49%",
  },
  donationItem: {
    flexDirection: "row",
    paddingHorizontal: 24,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  highlightedImg: {
    height: 200,
    width: 400,
    marginHorizontal: 15,
  },
  catContainer: {
    marginLeft: 20,
    marginVertical: 16,
  },
  selectTxt: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 5,
  },
  tabView: { marginRight: 5, marginTop: 10 },
});
export default HomeStyles;
