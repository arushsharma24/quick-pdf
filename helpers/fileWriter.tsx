import RNFS from 'react-native-fs';

export const readFromFile = async (fileName: string) => {
  try {
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    const content = await RNFS.readFile(filePath, 'utf8');
    console.log(`File read successfully at ${filePath}`);
    return content;
  } catch (error) {
    console.log('Error reading file:', error);
  }
};

export const getDirectoryContents = async (directoryPath: string) => {
  try {
    const contents = await RNFS.readDir(
      `${RNFS.DocumentDirectoryPath}/${directoryPath}`,
    );
    console.log('Directory contents:', contents);
  } catch (error) {
    console.log('Error reading directory:', error);
  }
};

export const writeTextToFile = async (fileName: string, text: string) => {
  try {
    const filePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    await RNFS.writeFile(filePath, text, 'utf8');
    console.log('File written successfully!');
  } catch (error) {
    console.log('Error writing file:', error);
  }
};
