import React from "react";
import { TextInput, View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ onSearchTermChange, searchTerm, onSubmitTerm }) => {
  return (
    <View style={styles.searchViewStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchBarStyle}
        placeholder="Search"
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSubmitTerm}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchViewStyle: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 15,
    overflow: "hidden",
    borderRadius: 5,
    height: 50,
  },

  iconStyle: {
    color: "black",
    fontSize: 35,
    marginRight: 15,
    alignSelf: "center",
  },
  searchBarStyle: {
    fontSize: 20,
    flex: 1,
  },
});

export default SearchBar;
