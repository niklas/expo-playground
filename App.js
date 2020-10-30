import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const items = [
  {id: "1", name:"Peter" },
  {id: "2", name:"Paul" },
  {id: "3", name:"Mary" },
]

const Item = ({name}) => {
  console.debug("rendering Item", name);
  return <Text style={styles.item}>{name}</Text>
}

const renderItem = ({item}) => (
  <Item name={item.name}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#afa'
  }
});
