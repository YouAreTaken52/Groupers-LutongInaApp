import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

const slides = [
    {
      key: "1",
      title: "Reginald C. Bollosa",
      text: 'GROUPERS DEVELOPER',
      image: require("./regipicture.jpg"),
      backgroundColor: '#59b2ab',
    },
    {
      key: "2",
      title: "Ken Haedreich C. Delapaz",
      text: "GROUPERS DEVELOPER",
      image: require("./kenpicture.png"),
      backgroundColor: '#febe29',
    },
    {
      key: "3",
      title: "Tom Derick L. Espeña",
      text: 'GROUPERS DEVELOPER',
      image: require("./tompicture.jpg"),
      backgroundColor: '#22bcb5',
    },
    {
        key: "4",
        title: "Laurence S. Flores",
        text: 'GROUPERS DEVELOPER',
        image: require("./laurencepicture.png"),
        backgroundColor: '#22bcb5',
    },
    {
        key: "5",
        title: "Ryan-Russel P. Quilang",
        text: 'GROUPERS DEVELOPER',
        image: require("./ryanpicture.jpg"),
        backgroundColor: '#22bcb5',
    },
    {
        key: "6",
        title: "Jerico Paulo D. Reyes",
        text: 'GROUPERS DEVELOPER',
        image: require("./jericopicture.jpg"),
        backgroundColor: '#22bcb5',
      },
    
  ];
  export default class DeveloperScreen extends Component  {
    constructor(){  
        super();  
        this.state={  
        isVisible : true,  
       }  
     }  
     _renderItem = ({item}) => {
        return (
            
          <View style={{flex:1}}>
            
            <View style={styles.header}>
            
            <Text style={{fontSize: 30, fontWeight: 'bold', color:'white'}}>Developers</Text>
            
            </View>
            <Image source={item.image} style={{ resizeMode: "contain", height: 350, width: "100%", marginTop: 40}} />
            <Text
              style={{
                paddingTop: 25,
                paddingBottom: 10,
                fontSize: 23,
                fontWeight: "bold",
                color: "#21465b",
                alignSelf: "center",
              }}
            >
              {item.title}
            </Text>
    
            <Text style={{
              textAlign:"center",
              color:"#b5b5b5",
              fontSize:15,
              paddingHorizontal:30
            }}>
              {item.text}
            </Text>
           
          
    
            
          </View>
        );
       
      };

      render() {
        return (
            <View style={{flex: 1}} >
        <AppIntroSlider
          renderItem={this._renderItem} 
          data={slides} 
         
          activeDotStyle={{
            backgroundColor:"#21465b",
            
            width:30
            
          }}  />
          
     
           </View>
        );
  }
  
}

const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems:'center',
      alignSelf:'center',
      textAlign:'center',
      backgroundColor: '#0c82e8',
      width:'100%',
      paddingLeft: 10,
     marginBottom: 5,

      elevation: 5,
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
      },
  });

