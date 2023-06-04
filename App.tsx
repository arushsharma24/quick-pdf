import React, { Component } from 'react';

import {
  StyleSheet,
  useColorScheme,
  Dimensions,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // Text,
  View,
  // Platform
} from 'react-native';

import Pdf from 'react-native-pdf';

class PdfScreen extends Component {
  static navigationOptions = {
    title: 'PDF',
	};

	render() {
    const source = {uri:'bundle-assets://pdf.pdf', cache:true };
		return (
      <Pdf 
        trustAllCerts={false} 
        onLoadComplete={()=>{
          // can add code here for analytics
        }}
        fitPolicy={1}
        maxScale={10}
        source={source} 
        style={styles.pdf}/>
    )
	}
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
    <View style={styles.container}>
    <PdfScreen/>
    </View> 
    </>

  );
}

const iitr = true     // !TODO: Figure out a way to pass this through a parameter while running the app. Well, it would get fixed soon anyways if I am able to implement the save zoom level feature.

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	pdf: {
		flex: 1,
    width: Dimensions.get('window').width,
    transform: [{translateX: 0}]
    // transform: [{scale: 2}]//, {translateX: Dimensions.get('window').width/8}, {translateY: Dimensions.get('window').height/32}] 
    // Used this for reference: https://reactnative.dev/docs/transforms
    // however using this (transform) does not let me zoom out properly. It seems like it is a react-native-pdf bug
	},
});

// Special default zoom configuration for IITR E-ID
if(iitr){
  styles.pdf.width = Dimensions.get('window').width*3
  styles.pdf.transform = [{translateX: 150}]
}

export default App;
