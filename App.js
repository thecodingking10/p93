import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import { Header } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.array = [{
      title: 'ONE'
    },
    {
      title: 'TWO'
    },
    {
      title: 'THREE'
    },
    {
      title: 'FOUR'
    },
    {
      title: 'FIVE'
    }
    ],
    this.state = {
      totalDuration: 1500,
      arrayHolder:[],
      textInputHolder:''
    };
  }

  componentDidMount(){
    this.setState({ arrayHolder: [...this.array] })
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item: list }) => {
    return <ListCard list={list}/>;
  };
  
  addToList=()=>{
    //This requires a database
  }
  joinData = () => {
    this.array.push({title : this.state.textInput_Holder});
    this.setState({ arrayHolder: [...this.array] })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {
    Alert.alert(item);
  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#1b5c74'}
          centerComponent={{
            text: 'EF App',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('./assets/logo.png')}
        />
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          style={{marginLeft:165, marginTop:-150}}
          digitStyle={{backgroundColor:'#1b5c74'}}
          digitTxtStyle={{color:'white'}}
          timetoShow={['H', 'M', 'S']}
          //formate to show
          onFinish={() => alert('Good job!')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Time in minutes"
          onChangeText={text => {
            this.setState({ totalDuration: text*60 });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder="Add to list"
          onChangeText={text => this.setState({ textInput_Holder:text})}
          value={this.state.text}/>
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Add item to list</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.arrayHolder}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  imageIcon: {
    width: 150,
    height: 180,
    marginLeft: 35,
    marginTop:5
  },
  inputBox: {
    marginTop: 10,
    marginLeft:175,
    width: '50%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
  inputBox2: {
    marginTop: 40,
    justifyContent:'center',
    marginLeft:10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
});