import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Pdf from 'react-native-pdf';

const PDFScreen = () => {
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
};
let isPdfThereOrNot = true;
const App = () => {
  return <Text>Hello</Text>;
};

export default App;
