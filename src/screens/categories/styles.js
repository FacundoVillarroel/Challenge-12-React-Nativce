import { StyleSheet, StatusBar } from 'react-native';

import { isAndroid } from "../../utils/index"
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.background,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
    paddingTop: 20
  }
});
