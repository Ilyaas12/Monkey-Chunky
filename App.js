import * as React from 'react'; //Importing react from the react library 
import { // Importing all the classes/functions
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements'; //Importing header function from react-native
import db from './localdb'; //All the data from the localdb file
import PhonicSoundButton from './components/PhonicSoundButton'; //Importing PhonicSoundButton data from the file

export default class App extends React.Component { //Setting up the app function & it extends from react
  constructor() {
    super();
    this.state = {
      text: '', //Text for the app
      chunks: [], //The chunks of words from localdb
      phonicSounds: [], //The phonic sounds we need to hear
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'} //Colour of background
          centerComponent={{
            text: 'Monkey Chunky', //Text on top
            style: { color: '#fff', fontSize: 20 }, //Decorating the title
          }}
        />

        <Image
          style={styles.imageIcon} //The image used for the monkey
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png', //Importing it
          }}
        />

        <TextInput
          style={styles.inputBox} //Import box to type in
          onChangeText={text => { //When the text is changed whatever is happening in the function will occur
            this.setState({ text: text }); //Setting the state for when text is put in the input box
          }}
          value={this.state.text} //value of the text
        />
        <TouchableOpacity //Class touchable opacity for styling
          style={styles.goButton} //Creation of the go button
          onPress={() => { //When pressed whatever is in the function occurs
            console.log('this.state.text: ' + this.state.text); //Logging on console what is typed in

            var lowercaseWord = this.state.text.toLowerCase().trim(); //Used to alllow lowercase words 
            console.log('lowercaseWord: ' + lowercaseWord); //Used to allow different styles of text

            db[lowercaseWord] ? (this.setState({chunks: db[lowercaseWord].chunks}),//Will allow certain text
            this.setState({ phonicSounds: db[lowercaseWord].phones })) : alert('The Word Does Not Exist In Our Database'); //An alert if a word isn't in the database of localdb
          }}>
          <Text style={styles.buttonText}>GO</Text>  
        </TouchableOpacity> 
        <View>
          {this.state.chunks.map((item, index) => { //Using map technique to map all the chunks from the index
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({ //The style sheet for all styling of the app
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor:'green'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});
