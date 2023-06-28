import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
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
      transform: [{translateX: 0}],
      // transform: [{scale: 2}]//, {translateX: Dimensions.get('window').width/8}, {translateY: Dimensions.get('window').height/32}]
      // Used this for reference: https://reactnative.dev/docs/transforms
      // however using this (transform) does not let me zoom out properly. It seems like it is a react-native-pdf bug
    },
  });