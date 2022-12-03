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
  },
  title:{
    fontSize:22,
    fontFamily:"Anek-Bold",
    borderBottomWidth:1,
    borderBottomColor:COLORS.danger,
    width:"80%"
  },
  detailsContainer:{
    paddingVertical:5
  },
  description:{
    fontSize:15,
    fontFamily:"Anek-Regular"
  },
  price:{
    paddingTop:10,
    fontSize:20,
    fontFamily:"Anek-SemiBold",
  },
})