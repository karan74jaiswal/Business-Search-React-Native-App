import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setTerm] = useState("");

  return (
    <View style={styles.screenViewStyle}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(value) => setTerm(value)}
        onSubmitTerm={() => {
          console.log(searchTerm);
        }}
      />
      <Text>Searched Term is {searchTerm}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenViewStyle: {},
});

export default SearchScreen;
