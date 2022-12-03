import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.primary,
    margin:10,
    borderRadius:10,
    padding:10,
    height:150
  },
  itemContainer:{
    flex:1,
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  title:{
    fontSize:20,
    fontFamily:"Anek-Bold",
    borderBottomWidth:1,
    borderBottomColor:COLORS.danger,
  },
  detailsContainer:{
    paddingVertical:5
  },
  price:{
    borderTopColor:COLORS.danger,
    fontSize:18,
    fontFamily:"Anek-SemiBold",
  },
})