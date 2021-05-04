import React, {Component} from 'react';
import {View, Button, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import food1 from './Arroz-Caldo.png';
import food2 from './batchoy.png';
import food3 from './crispy-pata.png';
import food4 from './daing.png';
import food5 from './Eskabeche.png';
import food6 from './sinigang.png';
import food7 from './nilaga.png';


import FoodBanner3 from './food-banner2.jpg'

import logo from './logo.png';




export default class LutongBahaysScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       
            
           
                 
                <ScrollView>
                   <View style={styles.header}>
            <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('BotTabs', {title: 'Shop'})} />
            <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>Lutong Bahay Recipe</Text>
            
            </View>   
                  <View>
          
          <Image source={FoodBanner3}  style={styles.headerImage} />
          <Image source={logo}  style={styles.logoImage} />
          </View>

            <View style={styles.PanghimagasContainer}>
               <View style={styles.cardBox}> 
                    <TouchableOpacity style={styles.touchableContainer}
                        onPress={() => this.props.navigation.navigate('ArrozCaldo')}>
                        <Image source={food1}  style={styles.cardImage} />
                        <Text style={styles.cardText} >ArrozCaldo</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.touchableContainer}
                      onPress={() => this.props.navigation.navigate('Batchoy')}>
                          <Image source={food2}  style={styles.cardImage} />
                          <Text style={styles.cardText} >Batchoy</Text>
                   </TouchableOpacity>
                </View>

                   <View style={styles.cardBox}>
                        <TouchableOpacity style={styles.touchableContainer}
                        onPress={() => this.props.navigation.navigate('CrispyPata')}>
                              <Image source={food3}  style={styles.cardImage} />
                              <Text style={styles.cardText} >CrispyPata</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={styles.touchableContainer}
                        onPress={() => this.props.navigation.navigate('Daing')}>
                              <Image source={food4}  style={styles.cardImage} />
                              <Text style={styles.cardText} >Daing</Text>
                       </TouchableOpacity>
                      </View>    
                      <View style={styles.cardBox}> 
                    <TouchableOpacity style={styles.touchableContainer}
                        onPress={() => this.props.navigation.navigate('Eskabeche')}>
                        <Image source={food5}  style={styles.cardImage} />
                        <Text style={styles.cardText} >Eskabeche</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.touchableContainer}
                      onPress={() => this.props.navigation.navigate('Sinigang')}>
                          <Image source={food6}  style={styles.cardImage} />
                          <Text style={styles.cardText} >Sinigang</Text>
                   </TouchableOpacity>
                </View>

                   <View style={styles.cardBox}>
                        <TouchableOpacity style={styles.touchableContainer}
                        onPress={() => this.props.navigation.navigate('Nilaga')}>
                              <Image source={food7}  style={styles.cardImage} />
                              <Text style={styles.cardText} >Nilaga</Text>
                       </TouchableOpacity>
                      </View>       
                 </View>
                 </ScrollView>  
                
                
              
    );
  }
}
const styles = StyleSheet.create({
    PanghimagasContainer:{
        flex: 1,
        alignSelf:'center',
        fontFamily:'Century Gothic'
        

    },
    logoImage:{
      flex: 1,
      height: 300,
        width: '100%',
        alignItems: 'center',
        
        backgroundColor:'black',
        opacity:0.6,
        position: 'absolute'

    },
    headerImage: {
        height: 300,
        width: '100%',
        alignItems: 'center',
        
        flex: 1,
    },
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      backgroundColor: '#0c82e8',
      width:'100%',
      paddingLeft: 10,
     marginBottom: 5,

      elevation: 5,
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
        
      },
      cardImage: {
        height: 200,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        
        
      },
      cardBox:{
        flexDirection: 'row',
        alignItems:'center',
        width: '100%',
        alignSelf:'center',
        textAlign:'center',
        margin: 10,
        flex: 1,
    },
    

    cardText:{
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        paddingTop: 15,

    },
    touchableContainer:{
         
      backgroundColor: "white",
      borderColor: 'black',
      marginTop: 20,
      borderRadius: 15,
      width: 200,
      height: 250,
      marginLeft: 10,
      elevation: 5,
      shadowOffset: { width: 1, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2
    }
  });