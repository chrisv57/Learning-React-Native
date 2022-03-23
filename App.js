import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [myText, setMyText] = useState("Hello World");
  const [person,setPerson] = useState({name: "Manav", age: 40});
  const clickHandler =()=>{
    setMyText('Just the world!');
    setPerson({name: "Amit", age: 20});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Person: {person.name} , Age: {person.age}</Text>
      <Text style={styles.text}>Text is {myText}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update State" onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
  buttonContainer: {
    margin: 20
  }
});
