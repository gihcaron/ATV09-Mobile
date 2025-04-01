import { StyleSheet, Text, View, Image} from 'react-native';
import Card from './components/card';
import Header from './components/header';


export default function Page() {
  return (
    <View style={styles.container}>

    
 
    <Card
    Title = "🎠"
    Description= "Eu gosto de pensar que a luz do Sol, vai iluminar o meu amanhecer."
    Subdescription= "- Edi Rock"

    />
    <Card
    Title = "🎀"
    Description= "Tem lugares que me lembram, minha vida, por onde andei"
    Subdescription= "- Rita Lee"
    />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(211,215,224,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });