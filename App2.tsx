import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import Pdf from 'react-native-pdf';

const App = () => {
  const [selectedPDF, setSelectedPDF] = useState<
    DocumentPickerResponse[] | null
  >(null);

  const handleSetPDF = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res);
      setSelectedPDF(res);
    } catch (error) {
      console.log('Error selecting PDF:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Set PDF" onPress={handleSetPDF} />
      </View>
      <View>
        {selectedPDF ? (
          selectedPDF.map((pdf, index) => (
            <View>
              <Pdf
                key={pdf.uri} // Add a unique key prop
                trustAllCerts={false}
                onLoadComplete={() => {
                  // can add code here for analytics
                  console.log('on pdf load complete');
                }}
                fitPolicy={1}
                maxScale={10}
                source={{uri: 'bundle-assets://pdf.pdf', cache: true}}
              />
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>
            Select PDF file by clicking on the button above
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
