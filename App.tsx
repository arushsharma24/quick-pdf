import React, { Component } from 'react';

import {
  StyleSheet,
  useColorScheme,
  Dimensions,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // Text,
  // View,
  // Platform
} from 'react-native';

import Pdf from 'react-native-pdf';

class PdfScreen extends Component {
	static navigationOptions = {
		title: 'PDF',
	};

	render() {
    const source = {uri:'bundle-assets://pdf.pdf', cache:true };
		return <Pdf trustAllCerts={false} source={source} style={styles.pdf}/>;
	}
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
    {/* <SafeAreaView>
      <Text>This is some text</Text>
    </SafeAreaView> */}
    <PdfScreen/>
    </>

  );
}

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
    transform: [{scale: 2}, {translateX: Dimensions.get('window').width/8}, {translateY: Dimensions.get('window').height/32}] 
    // Used this for reference: https://reactnative.dev/docs/transforms
    // however using this (transform) does not let me zoom out.
	},
});

export default App;
