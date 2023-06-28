import {Component} from 'react';
import Pdf from 'react-native-pdf';
import {Dimensions, View} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

export const PdfScreen = () => {
  //   const route = useRoute();
  //   const {selectedFile} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PdfShow />
    </View>
  );
};

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

let iitr = true;

if (iitr) {
  styles.pdf.width = Dimensions.get('window').width * 3;
  styles.pdf.transform = [{translateX: 150}];
}
