import React, {Component} from 'react';
import {View, Button, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import imgparsley from './sinigang.png';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Sinigang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff'}}>
      <View style={style.header}>
      <Icon name="arrow-back-ios" size={28} onPress={() => this.props.navigation.navigate('LutongBahay', {title: 'Shop'})} />
      <Text style={{fontSize: 30, fontWeight: 'bold', fontFamily:'Century Gothic', color:'white'}}>Sinigang</Text>
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
            Sinigang
          </Text>
          <View style={style.iconContainer}>
            <Icon name="favorite-border"  size={25} />
          </View>
        </View>
        <Text style={style.detailsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries.
        </Text>
        <Text style={style.detailsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries.
        </Text>
        <Text style={style.detailsText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries.
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