import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function App() {
  const [items, setItems] = useState(initialItems)
  const [lastId, setLastId] = useState(3)

  const appendItem = () => {
    console.log("====== Button pressed")
    const newId = lastId + 1
    items.push(newItem(newId))
    setLastId(newId)
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        extraData={lastId}
      />
      <Button title="call john" onPress={appendItem}/>
      <StatusBar style="auto" />
    </View>
  );
}

const initialItems = [
  {id: "1", name:"Peter" },
  {id: "2", name:"Paul" },
  {id: "3", name:"Mary" },
]

const newItem = (id) => {
  return {id: String(id), name: "John"}
}

class Item extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.debug("rendering Item", this.props.name);
    return <Text style={styles.item}>{this.props.name}</Text>
  }
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
