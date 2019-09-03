import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

// Import components
import BarcodeScanner from '../components/BarcodeScanner.js';
import Header from '../components/Header.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

const ScanScreen = (props) => {

  // Hooks
  const [barcode, setBarcode] = useState('');



  return (
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
    >
      <View style={styles.screen}>
        <Header />
        <View style={styles.barCodeScannerContainer}>
          <BarcodeScanner />
        </View>
        <View style={styles.scanResultContainer}>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  barCodeScannerContainer: {
    width: 300,
    maxWidth: '80%',
    height: 500,
    maxHeight: '80%',
    paddingVertical: 30
  },
  scanResultContainer: {
    flexDirection: 'column',

  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default ScanScreen;
