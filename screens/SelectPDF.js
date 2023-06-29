import {View, Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useNavigation} from '@react-navigation/native';

const setPDF = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(res);

    // AppState.exitApp();
  } catch (err) {
    console.log(err);
  }
};

export default function SelectPDF() {
  return <Text>Hello</Text>;
  // const navigation = useNavigation();

  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <Button title="Select your PDF File" onPress={setPDF} />
  //     <Button
  //       title="See the file!!"
  //       onPress={() => navigation.navigate('ShowPDF')}
  //     />
  //   </View>
  // );
}
