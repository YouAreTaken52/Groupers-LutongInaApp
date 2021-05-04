import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './Arroz-Caldo.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ArrozCaldoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('LutongBahay', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>ArrozCaldo</Text>
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
        4 Pieces Chicken Wings{"\n"}
2 tbls Vegetable Oil{"\n"}
4 Cloves Garlic{"\n"}
2 Pieces Ginger{"\n"}
1 Piece Onion{"\n"}
6 tbls Glutinous Rice{"\n"}
6 Cups Water{"\n"}
1 oz Kasubha{"\n"}
2 Sachets MAGGI® Magic Sarap®{"\n"}
0.25 tsp Ground Pepper{"\n"}
0.5 Cup Chicharon{"\n"}
3 Pieces Egg{"\n"}
1 tbl Toasted Garlic{"\n"}
1 tbl Onion Springs{"\n"}
6 Pieces Lime{"\n"}

        </Text>
        <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Procedure{"\n"}
          </Text>
          <Text style={style.detailsText}>
          1.
0 Min
Sauté chicken in oil. Remove and set aside.{"\n"}
2.
0 Min
Sauté garlic, ginger and onion in the same pot. Add rice, pour water and simmer while covered for 30 minutes. Stir occasionally.{"\n"}
3.
15 Min
Add chicken and kasubha and cook for another 15 minutes. Season with MAGGI® MAGIC SARAP® and pepper. Serve with preferred garnishes.{"\n"}


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