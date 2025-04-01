import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Card = ({Title, Description, Subdescription}) => {
    return (
      <View style={styles.content}>
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.title}>{Description}</Text>
          <Text style={styles.subtitle}>{Subdescription}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    content :{
        backgroundColor: 'rgba(143,154,186,255)',
        marginTop: 20,
        width: '90%',
        height: '32%',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
      },
      
      title: {
        padding: 2,
        fontSize: 24,
        textAlign: 'flex-start',
        fontWeight: '600',
        color: 'rgba(254,254,255,255)',
        marginTop: 5,
      },
      subtitle: {
        padding: 10,
        marginTop:'20',
        fontSize: 16,
        color: 'rgba(211,215,224,255)',
        textAlign: 'flex-start',
      },
})

export default Card;