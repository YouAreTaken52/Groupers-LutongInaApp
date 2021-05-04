import React, {Component} from 'react';
import {View, Button, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import food1 from './food-banner4.jpg';
import food2 from './food-banner3.jpg';
import food3 from './food-banner2.jpg';
import food4 from './food-banner1.jpg';




export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       
            
           
                 
                <ScrollView>   
                    <View>
                    <Image source={food1}  style={styles.headerImage} />
                    <Text style={styles.textBrand}>Lutong Ina</Text>
                    </View>
                <View style={styles.container}>
                  

                    <View style={styles.cardBox}>
                        
                    <TouchableOpacity style={{
                        
                        backgroundColor: "white",
                        borderColor: 'black',
                        marginTop: 20,
                        borderRadius: 15,
                        width: 200,
                        height: 250,
                        padding: 10,
                        marginLeft:10,
                        marginRight:10,
                        elevation: 5,
                        shadowOffset: { width: 1, height: 2},
                        shadowOpacity: 0.2,
                        shadowRadius: 2
                        
                      }}onPress={() => this.props.navigation.navigate('LutongBahay')}>
                          <Image source={food1}  style={styles.headerImage} />
                          <Text style={styles.cardText} >Lutong Bahay</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={{
                        
                        backgroundColor: "white",
                        borderColor: 'black',
                        marginTop: 20,
                        borderRadius: 15,
                        width: 200,
                        height: 250,
                        padding: 10,
                        marginLeft:10,
                        marginRight:10,
                        elevation: 5,
                        shadowOffset: { width: 1, height: 2},
                        shadowOpacity: 0.2,
                        shadowRadius: 2
                      }}onPress={() => this.props.navigation.navigate('Panghimagas')}>
                          <Image source={food2}  style={styles.headerImage} />
                          <Text style={styles.cardText} >Panghimagas</Text>
                   </TouchableOpacity>
                   </View>
                            
                               
                 </View>
                 </ScrollView>  
                
                
              
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Century Gothic',

        
        

    },
  
  
    textBrand:{
      position: "absolute",
      fontSize: 30,
      paddingTop: 100,
      fontSize: 65,
      color:'white',
      alignSelf: 'center',
      alignItems:'center',
      textAlign:'center',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      backgroundColor: 'black',
      height: 300,
      width: '100%',
      opacity: 0.6,
      flex: 1,
      
      
      
      
      
  
  
    },
    headerImage: {
        height: 300,
        width: '100%',
        alignItems: 'center',
       
        alignSelf:'center',
        flex: 1,
      
        
        
        
        
       


    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        
        
      },
      cardBox:{
        
        justifyContent:'space-between',
        flexDirection: 'row',
        padding: 25,
        alignItems:'center',
        margin: 5,
        textAlign:'center',
      

        

        


    },
    

    cardText:{
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        paddingTop: 15,
        



        


    },
  });