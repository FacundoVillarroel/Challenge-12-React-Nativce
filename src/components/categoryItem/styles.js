import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.primary,
    margin:10,
    borderRadius:10,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height:100
  },
  contentContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    paddingVertical:10,
    fontSize:20,
    fontFamily:"Anek-Bold",
    color: COLORS.primaryText,
  },
})