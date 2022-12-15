import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Anek-Regular',
    marginBottom: 10,
  },
  message: {
    marginBottom:15
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Anek-Regular',
    color: COLORS.helperText,
  },
});
