import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },
  buttonContainer:{
    borderTopColor:COLORS.secondary,
    borderTopWidth:2,
    borderStyle:"dashed",
    marginHorizontal:10,
    height:90,
    backgroundColor: COLORS.background,
    justifyContent:"center"
  },
  buttonConfirm:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    backgroundColor:COLORS.primary,
    borderRadius:10,
  },
  textConfirm:{
    color:COLORS.primaryText,
    fontFamily:"Anek-Bold",
    fontSize:20
  },
  total:{
    color:COLORS.primaryText
  },
})