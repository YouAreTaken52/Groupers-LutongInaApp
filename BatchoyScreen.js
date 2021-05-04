import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './batchoy.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BatchoyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('LutongBahay', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>Batchoy</Text>
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
        1/4 pound coagulated blood drained{"\n"}
water{"\n"}
1 tablespoon oil{"\n"}
1 onion peeled and sliced thinly{"\n"}
4 cloves garlic peeled and minced{"\n"}
2 thumb-sized ginger peeled and julienned{"\n"}
1/2 pound pork tenderloin cut into thin strips{"\n"}
1/4 pound pork heart about 1 piece, cut into thin strips{"\n"}
2 tablespoons fish sauce{"\n"}
1/4 pound pork liver cut into thin strips{"\n"}
salt and pepper to taste{"\n"}
2 ounces miswa{"\n"}
1 bunch fresh sili leaves stems trimmed{"\n"}

        </Text>
        <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Procedure{"\n"}
          </Text>
          <Text style={style.detailsText}>
1.	In a sauce pot, combine pork blood and enough water to cover. Bring to a boil for about 2 to 3 minutes or until firm. Drain well and cut into cubes.{"\n"}
2.	a large pot over medium heat, heat oil. Add onions, garlic and ginger, and cook until aromatic. Add pork and heart. Cook, stirring occasionally, until lightly browned. Add fish sauce and cook for about 2 to 3 minutes.{"\n"}
3.	Add about 4 cups of water and bring to a boil. Lower heat, cover and continue to cook for about 15 to 20 minutes or until meat are tender. Add pork liver and cook for about 5 minutes. Add coagulated blood and cook for another 3 to 5 minutes.{"\n"}
4.	Season with salt and pepper to taste. Add miswa and continue to cook for 1 to 2 minutes. Add chili leaves, pressing down into broth. Turn off heat and cover to allow residual steam to cook leaves. Serve hot.{"\n"}


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