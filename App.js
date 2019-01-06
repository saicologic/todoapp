import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import {
  ListItem,
  CheckBox,
  FormInput,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from './firebase';

const styles = StyleSheet.create({
  itemView: {
  },
  plus: {
  },
  checkBox: {
    backgroundColor: 'white',
    borderColor: 'white',
    width: 46,
  },
  listItem: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderBottomWidth: 1,
  },
  formView: {
    paddingTop: 30,
    flexDirection: 'row',

  },
  formInput: {
    borderWidth: 0,
    width: 250,
  },
  todoList: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
    height: '100%',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      items: [],
    };
  }

  componentWillMount() {
    this.getItems();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={styles.itemView}>
      <ListItem
        containerStyle={styles.listItem}
        title={item.content}
        leftIcon={
          <CheckBox
            iconLeft
            size={28}
            containerStyle={styles.checkBox}
            onPress={() => {
              this.completeItem(item);
            }}
            checked={false}
          />}
        hideChevron
      />
    </View>
  )

  completeItem = async (item) => {
    await firebase.complteItem(item);
    await this.getItems();
  }

  addItem = async () => {
    const { text } = this.state;
    const inputText = text;
    if (inputText !== '') {
      await firebase.addItem(inputText);
      await this.getItems();
      this.setState({
        text: '',
      });
    }
  }

  getItems = async () => {
    firebase.getItems().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.itemId = doc.id;
        items.push(data);
      });
      this.setState({ items });
    });
  }

  render() {
    const { text, items } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formView}>
          <FormInput
            inputStyle={styles.formInput}
            onChangeText={(changedText) => {
              this.setState({ text: changedText });
            }}
            value={text}
            clearButtonMode="always"
          />
          <Icon
            style={styles.plus}
            name="plus-circle"
            size={32}
            onPress={() => {
              this.addItem();
            }}
          />
        </View>
        <View style={styles.todoList}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={items}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
