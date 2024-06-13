import { View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import searchBarStyle from "./SearchBar.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (value) => {
    setSearchVal(value);
  };
  return (
    <View style={searchBarStyle.searchContainer}>
      <TouchableOpacity>
        <FontAwesomeIcon
          style={searchBarStyle.iconStyle}
          icon={faSearch}
          size={22}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="search.."
        style={searchBarStyle.searchBar}
        value={searchVal}
        onChangeText={(value) => handleSearch(value)}
      />
    </View>
  );
};

export default SearchBar;
