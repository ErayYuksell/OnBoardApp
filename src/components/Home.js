import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <Text style={{ marginLeft: 20, alignSelf: "center" }}>
          Welcome to do Home Screen!
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
