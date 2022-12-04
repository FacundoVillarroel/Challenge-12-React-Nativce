import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.primary,
    margin:10,
    borderRadius:10,
    height:100,
    justifyContent:"center"
  },
  headerContainer:{
    alignSelf:"center",
  },
  header:{
    color:COLORS.primaryText,
    fontSize:20,
    fontFamily:"Anek-Bold"
  },
  contentContainer:{
    paddingHorizontal:25,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  detailsContainer:{
    
  },
  quantity:{
    color:COLORS.primaryText,
    fontSize:16,
  },
  price:{
    color:COLORS.primaryText,
    fontSize:16,
  }
})