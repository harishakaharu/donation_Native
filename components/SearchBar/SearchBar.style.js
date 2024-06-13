import { StyleSheet } from "react-native";

const searchBarStyle = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 10,
    paddingVertical: 5,
    color: "#686C7A",
  },

  iconStyle: { color: "#2979f2", marginLeft: 15 },
  searchBar: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 16,
    marginLeft: 6,
    backgroundColor: "#F3F5F9",
    color: "black",
    marginRight: 6,
  },
});

export default searchBarStyle;
