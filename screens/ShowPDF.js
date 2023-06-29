import {Component} from 'react';
import {styles} from '../styles';
import Pdf from 'react-native-pdf';

export default function ShowPDF() {
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
