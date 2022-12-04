import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.secondary,
    margin:10,
    borderRadius:10,
    height:100,
    justifyContent:"center"
  },
  headerContainer:{
    alignSelf:"center",
  },
  date:{
    color:COLORS.primaryText,
    fontSize:20,
    fontFamily:"Anek-Bold"
  },
  contentContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20
  },
  total:{
    color:COLORS.primaryText,
    fontFamily:"Anek-Regular",
    fontSize:16,
  },
})