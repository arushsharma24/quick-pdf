import React, {Component} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  readFromFile,
  writeTextToFile,
  getDirectoryContents,
} from './helpers/fileWriter';
import {useNavigation} from '@react-navigation/native';
import Pdf from 'react-native-pdf';
import {styles} from './styles';
import {
  StyleSheet,
  useColorScheme,
  Dimensions,
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // Text,
  View,
  Button,
  // Platform
} from 'react-native';

class PdfShow extends Component {
  static navigationOptions = {
    title: 'PDF',
  };

  render() {
    const source = {uri: 'bundle-assets://pdf.pdf', cache: true};
    return (
      <Pdf
        trustAllCerts={false}
        onLoadComplete={() => {
          // can add code here for analytics
        }}
        fitPolicy={1}
        maxScale={10}
        source={source}
        style={styles.pdf}
      />
    );
  }
}

let isFirstTime = false;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const navigation = useNavigation();

  const setPDF = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      isFirstTime = false;
      console.log(res);
      App();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isFirstTime ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button title="Select your PDF File" onPress={setPDF} />
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <PdfShow />
        </View>
      )}
    </>
  );
}

export default App;
