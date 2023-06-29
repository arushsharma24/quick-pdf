import React, {Component} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  readFromFile,
  writeTextToFile,
  getDirectoryContents,
} from './helpers/fileWriter';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
  AppState,
  // Platform
} from 'react-native';

import ShowPDF from './screens/ShowPDF';
import SelectPDF from './screens/SelectPDF';

const Stack = createStackNavigator();

export let isFirstTime = true;

function App() {
  return (
    <Stack.Navigator>
      {console.log('ok here')}
      <Stack.Screen name="SelectPDF" component={SelectPDF} />
      {console.log('did i get here?')}
      {/* <Stack.Screen name="ShowPDF" component={ShowPDF} /> */}
    </Stack.Navigator>
  );
}

// function App2() {
//   console.log('how many times does this run?');
//   return isFirstTime ? (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button title="Select your PDF File" onPress={setPDF} />
//     </View>
//   ) : (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <PdfShow />
//     </View>
//   );
// }

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return <>{run_my_app()}</>;
// }
