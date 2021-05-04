import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import logo from './logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';






const slides = [
    {
      key: "1",
      title: "COOK WHAT YOU WANT",
      text: 'Expand your mind. Learning to cook will help you understand world cultures, customs and flavors. ',
      image: require("./1.png"),
      backgroundColor: '#59b2ab',
    },
    {
      key: "2",
      title: "ENJOY COOKING",
      text: "Be confident. You can do this. Step up to the cutting board, the oven, or the stovetop with full confidence in your abilities.",
      image: require("./2.png"),
      backgroundColor: '#febe29',
    },
    {
      key: "3",
      title: "COOK FOR YOUR FAMILY",
      text: 'If you are a chef, no matter how good a chef you are, its not good cooking for yourself; the joy is in cooking for others.',
      image: require("./3.png"),
      backgroundColor: '#22bcb5',
    }
  ];

export default class OnBoarding extends Component  {
    constructor(){  
        super();  
        this.state={  
        isVisible : true,  
       }  
     }  
      Hide_Splash_Screen=()=>{  
       this.setState({   
         isVisible : false   
       });  
     }  
      
     componentDidMount(){  
       var that = this;  
       setTimeout(function(){  
         that.Hide_Splash_Screen();  
       }, 3000);  
      }  
    
      _renderItem = ({item}) => {
        return (
          <View style={{flex:1}}>
            <Image source={item.image} style={{ resizeMode: "contain", height: 350, width: "100%", marginTop: 40}} />
            <Text
              style={{
                paddingTop: 25,
                paddingBottom: 10,
                fontSize: 23,
                fontWeight: "bold",
                color: "#0c82e8",
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
            {
                item.key == 3 && (
                    <TouchableOpacity style={{
                        
                        backgroundColor: "#0cf2a2",
                        marginTop: 20,
                        borderRadius: 15,
                        width: 300,
                        height: 50,
                        padding: 10,
                        alignSelf: "center",
                        
                        
                        
                        
                        
                        
                      }}onPress={() => this.props.navigation.navigate('BotTabs')}>
                    <Text style={{
                        textAlign:"center",
                        color:"white",
                        fontSize:20,
                        flex:1,
                        
                        
                      }} >{"Get Started"}</Text></TouchableOpacity>
                )
            }
          
    
            
          </View>
        );
       
      };
     
  
    render() {
        let Splash_Screen = (  
            <View style={styles.SplashScreen_RootView}>  
                <View style={styles.SplashScreen_ChildView}>  
                      <Image source={logo}
                   style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
               </View>  
            </View> )  
     
          return (
              <View style={{flex: 1}} >
          <AppIntroSlider
            renderItem={this._renderItem} 
            data={slides} 
           
            activeDotStyle={{
              backgroundColor:"#21465b",
              
              width:30
              
            }}  />
            {  
                (this.state.isVisible === true) ? Splash_Screen : null  
              }  
       
             </View>
          );
    }
    
  }
  const styles = StyleSheet.create(  
    {  
       
       
        SplashScreen_RootView:  
        {  
            justifyContent: 'center',  
            flex:1,  
            position: 'absolute',  
            width: '100%',  
            height: '100%',
            backgroundColor: 'white'  
          },  
       
        SplashScreen_ChildView:  
        {  
            justifyContent: 'center',  
            alignItems: 'center',  
            backgroundColor: 'white',  
            flex:1,  
        },  
    });  