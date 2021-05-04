import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';


import Overview from './overview.jpg';




export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       
            
        <ScrollView>   
        <View style={styles.containerOverview}>
            <View>
            <Image source={Overview}  style={styles.headerOverview} />
            <Text style={styles.textOverview}>Overview</Text>
            </View>

            <View>
                <Text style={styles.overviewHeading}>
                    About Us
                    </Text>
                <Text style={styles.overviewParagraph}>
                Lutong Ina Application contains a lots of Pinoy Recipes which it has the capability to give guide to the user who wants to cook everyday. 
                The app has embedded different kinds of Filipino foods that can be done in the house. It focuses on Family Foods and
                basic ingredients in a affordable prices.
                    </Text>
            </View>
            <View>
                <Text style={styles.overviewHeading}>
                    Mission
                    </Text>
                <Text style={styles.overviewParagraph}>
                Our mission is to help and educate young cooks and entertain readers of all levels who are stuck in this time of pandemic.
                The Lutong Ina shall provide a helpful advice and methods in comes to cooking.
                    </Text>
            </View>
            <View>
                <Text style={styles.overviewHeading}>
                    Vision
                    </Text>
                <Text style={styles.overviewParagraph}>
                Lutong ina shall be the well-known platform which supplies recipes and knowledge in cooking.
                    </Text>
            </View>
            
          
        
                    
                       
         </View>
         </ScrollView>  
        
      
    );
  }
}
const styles = StyleSheet.create({
  
    containerOverview:{
        flex: 1,
        fontFamily:'Century Gothic'
        
       
        
        
        

    },
  
    headerTop:{
      textAlign: "center",
      height:200,
      width: '100%',
      backgroundColor: 'black',

      
  
    },
    textOverview:{
        position: "absolute",
        paddingTop: 130,
        fontSize: 55,
        color:'white',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        height: 300,
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.6,
        textAlign: 'center',
        flex: 1,
        
        
    
      },
      overviewHeading:{
          
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          fontFamily: 'Arial',
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold'
          


      },
      overviewParagraph:{
          padding: 20,
          

    },
      headerOverview: {
          height: 300,
          width: '100%',
          alignSelf: 'center',
          flex: 1,
      },
  });