import * as React from 'react'; //Importing react from reactnative
import { Text, View, StyleSheet, Image } from 'react-native'; //Importing all main classes from reactnative

export default class AssetExample extends React.Component { //Exporting the AssetExpample class that extends react component
  render() {
    return (
      <View style={styles.container}> //Making the style container part of the style function
        <Text style={styles.paragraph}> //Text for the style to set it in paragraphs
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        //Styling for the logo putting the file link of the image
        <Image style={styles.logo} source={require('../assets/snack-icon.png')} />         
      </View>
    );
  }
}

const styles = StyleSheet.create({ //Style sheet for all styling in this file (Container,paragraph & logo)
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
