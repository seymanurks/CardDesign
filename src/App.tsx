import React from "react";
import {
  SafeAreaView, 
  StyleSheet, 
} from "react-native";
import Card from "./components/Card" ;

const App = () => {
    return(
      <SafeAreaView style = {styles.container}>
        <Card 
        title = "Bill Gates" 
        text = "Yazılım, sanat ve mühendislik arasında harika bir kombinasyondur.">
        </Card>
        <Card 
        title = "Joel Spolsky" 
        text = "Şarap gibi iyi bir yazılım zaman alır.">
        </Card>
        <Card 
        title = "Bill Gates" 
        text = "Yazılım, önemi yalnızca zamanla artan sihirli bir şeydir.">
        </Card>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  }
})

export default App;
