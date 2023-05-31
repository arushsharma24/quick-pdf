import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Platform
} from 'react-native';

import Pdf from 'react-native-pdf';

class PdfScreen extends Component {
	static navigationOptions = {
		title: 'PDF',
	};

	render() {
    const source = {uri:'bundle-assets://resume.pdf', cache:true };
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
		width: Dimensions.get('window').width,
    // width: 200
	},
});

export default App;
