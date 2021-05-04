import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './crispy-pata.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CrispyPata extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('LutongBahay', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold',  fontFamily:'Century Gothic', color:'white'}}>Lutong Bahay Recipe</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View
        style={{
          flex:1,
          alignItems: 'center',
          padding: 20,
          
        }}>
        <Image source={imgparsley} style={{height: 300, width: '100%'}} />
      </View>
      <View style={style.details}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Ingredients
          </Text>
          <View style={style.iconContainer}>
            <Icon name="favorite-border"  size={25} />
          </View>
        </View>
        <Text style={style.detailsText}>
1 Kg Pork Leg{"\n"}
1 Piece Bay Leaf{"\n"}
0.5 tbl Black Peppercorn{"\n"}
2 Sachets MAGGI速 Magic Sarap速{"\n"}
8 Cups Vegetable Oil{"\n"}
0.25 Cup Spiced Vinegar{"\n"}
2 tbls Soy Sauce{"\n"}
2 Cloves Garlic{"\n"}
1 Piece Red Onion{"\n"}
1 Piece Hot Chili Peppers{"\n"}
0.25 tsp Ground Pepper{"\n"}
3 tbls Brown Sugar{"\n"}
        </Text>
        <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Procedure{"\n"}
          </Text>
          <Text style={style.detailsText}>
          Step 1: 15 Min
Simmer pork in water for 1 hour. Add bay leaf, pepper and season with MAGGI速 MAGIC SARAP速. Simmer until tender. Remove pork and set aside to cool. Reserve broth for other dishes.{"\n"}
        Step 2: 5 Min
For the Vinegar-Soy dip, combine vinegar, soy sauce, garlic, onion, chili, pepper and sugar in a bowl. Mix well and set aside.{"\n"}
        Step 3: 5 Min
Deep fry pork in preheated oil until crispy. Set aside to drain excess oil. Chop, transfer on a serving plate and serve with Vinegar-Soy dip.

        </Text>
        <View style={{marginTop: 10, marginBottom: 40}}>
        <TouchableOpacity style={{
                        
                        backgroundColor: "#0cf2a2",
                        marginTop: 20,
                        borderRadius: 15,
                        width: 300,
                        height: 50,
                        padding: 10,
                        alignSelf: "center",
                        flex: 1,
         
                      }}onPress={() => this.props.navigation.navigate('LutongBahayScreen')}>
                    <Text style={{
                        textAlign:"center",
                        color:"white",
                        fontSize:20,
                        flex:1,
                        
                        
                      }} >{"Get Started"}</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
    );
  }
}
const style = StyleSheet.create({
  header: {
    fontFamily: 'Century Gothic',
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
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#0c82e8',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    fontFamily:'Century Gothic'
  },
  iconContainer: {
    backgroundColor: '#fff',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: '#fff',
  },
})