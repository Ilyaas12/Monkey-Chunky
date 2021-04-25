import * as React from 'react'; //Importing react from reactnative
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'; //Importing from reactnative
import { Audio } from 'expo-av';

class PhonicSoundButton extends React.Component { //Making PhonicSoundButton class & extending it from react comp
  playSound = async (soundChunk) => { //Playing the sound for all phonic sounds
    console.log('soundChunk: ' + soundChunk); //Adding the sound chunks into logs of console
    //SoundLink function has the sound link adding the Sound Chunks then stating it as an mp3(sound) file
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3'; 
    await Audio.Sound.createAsync( //Awaiting the sound to play 
      {
        uri: soundLink,
      },
      { shouldPlay: true } //Stating that it should play
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton} //Styling of the button in the app
        onPress={() => { //When pressed the console will log 'wordChunk' and the props of word chunk
          console.log('wordChunk: '+this.props.wordChunk);
          this.playSound(this.props.soundChunk); //Will play all sounds from the chunk sounds when a word is typed
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text> //Will display words that are typed & giving them the chunks of the word
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({ //Style sheet(Styling) for the text and button
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});

export default PhonicSoundButton;
