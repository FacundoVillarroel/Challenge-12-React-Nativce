import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:20,
    flex: 1,
    justifyContent:"space-evenly",
    backgroundColor: COLORS.background,
  },
  title: {
    fontFamily: 'Anek-Bold',
    fontSize: 22,
    color: COLORS.primary,
    alignSelf:"center",
  },
  detailContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  description:{
    fontSize: 18,
    fontFamily: 'Anek-Regular',
    color:COLORS.primaryText,
    maxWidth:"80%"
  },
  price:{
    fontFamily: 'Anek-SemiBold',
    fontSize:20,
    color:COLORS.primary
  },
  addToCartContainer:{
    backgroundColor:COLORS.primary,
    height:75,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
  },
  addToCart:{
    color:COLORS.primaryText,
    fontSize:20,
    fontFamily:"Anek-Bold"
  },
});
