import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './yema.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class YemaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('Panghimagas', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>Yema</Text>
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
        7 pieces egg yolks{"\n"}
1 can condensed milk (14 oz.){"\n"}
3 tablespoons butter{"\n"}
5 tablespoons chopped walnuts or peanuts{"\n"}

        </Text>
        <Text
            style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
            Procedure{"\n"}
          </Text>
          <Text style={style.detailsText}>
1.	Combine egg yolks and condensed milk. Mix well.{"\n"}
2.	Add chopped walnuts. Whisk until well blended.{"\n"}
3.	Melt butter in a cooking pot or pan. Pour the egg yolk mistuxe into the pan.{"\n"}
4.	Continue to cook until the consistency becomes very thick to the point that it can easily form a shape when molded.{"\n"}
5.	Transfer the mixture to a bowl. Let it cool down.{"\n"}
6.	Cut the cellophane into 3x3 inch pieces. Scoop 1 tablespoons of mixture and place at the middle of the cellophane. Wrap the yema while molding to form a pyramid shape piece (note: watch the video for details). Continue to wrap the yema until all the mixture are consumed.{"\n"}
7.	Serve . Share and enjoy.{"\n"}

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
    marginTop: 25,
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