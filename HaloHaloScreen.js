import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './halo-halo.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HalohaloScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('Panghimagas', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>Halo-halo</Text>
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
crushed or shaved ice{"\n"}
milk (fresh or evaporated){"\n"}
sugar, if needed{"\n"}
sweetened saba or plantain bananas{"\n"}
sweetened sweet potatoes{"\n"}
fresh or sweetened langka (jack fruit){"\n"}
sweetened garbanzos or beans{"\n"}
coconut strips or sweetened macapuno{"\n"}
sweetened red munggo{"\n"}
nata de coco (coconut gel){"\n"}
sago or tapioca pearls or jelly cut into cubes{"\n"}
pinipig{"\n"}
leche flan (topping){"\n"}
ube jam or ube ice cream (topping){"\n"}

        </Text>
        <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Procedure{"\n"}
          </Text>
          <Text style={style.detailsText}>
          1.	In a tall glass, add a teaspoon of each of your selected ingredients.{"\n"}
2.	Add sugar if you like.{"\n"}
3.	Fill the glass with shaved ice up to the brim.{"\n"}
4.	Drizzle with milk{"\n"}
5.	Add the toppings of choice.{"\n"}
6.	Serve with a long spoon to mix ('halo') and enjoy.{"\n"}


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
         
                      }}onPress={() => this.props.navigation.navigate('Panghimagas')}>
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