import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.secondary,
    margin:10,
    borderRadius:10,
    height:120,
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
  buttonDetailContainer:{
    borderColor:COLORS.primaryText,
    borderWidth:1,
    alignSelf:"center",
    padding:10,
    borderRadius:5,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  details:{ 
    color:COLORS.primaryText,
    fontFamily:"Anek-SemiBold",
    fontSize:16
  },
})