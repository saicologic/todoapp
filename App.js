import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert
} from 'react-native';

import {
  ListItem,
  CheckBox,
  FormInput
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          name: 'AAAA',
        },
        {
          name: 'BBBBB',
        },
        {
          name: 'AAAAA',
        },
        {
          name: 'CCCC',
        },
        {
          name: 'DDDD',
        },
        {
          name: 'EEEE',
        },
        {
          name: 'FFFF',
        },
        {
          name: 'GGGG',
        },
        {
          name: 'HHHH',
        },
        {
          name: 'IIII',
        },
        {
          name: 'JJJJ',
        },
      ]
    }
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <View style={styles.itemView}>
    <ListItem
      containerStyle={styles.listItem}
      title={item.name}
      leftIcon={
        <CheckBox iconLeft size={28} containerStyle={styles.checkBox} checked={true} />}
      hideChevron={ true }
    />
    </View>
  )

  someFunction = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formView}>
          <FormInput inputStyle={styles.formInput} />
          <Icon style={styles.plus}
              name='plus-circle'
              size={32}
              onPress={() => {
                Alert.alert('You tapped the button!');
              }} />
        </View>
        <View style={styles.todoList} >
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.list}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemView: {
  },
  plus: {
  },
  checkBox: {
    backgroundColor: 'white',
    borderColor: 'white',
    width: 46
  },
  listItem: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    borderBottomWidth: 1,
  },
  formView: {
    paddingTop: 40,
    flexDirection:'row',

  },
  formInput: {
    width: "100%",
    borderWidth: 0,
    width: 250
  },
  todoList: {
    paddingTop: 10
  },
  container: {
    flex: 1,
    height: '100%',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});
