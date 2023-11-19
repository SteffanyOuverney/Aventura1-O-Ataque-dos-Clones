import React, {useState } from "react";
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { styles } from "./styles";
import SkillCircle from "./assets/spotify.png";
import GloogleIcon from "./assets/Google.png";
import Telefone from "./assets/Telefone.png"
import Facebook from "./assets/Facebook.png"
import Apple from "./assets/Apple.png"

const imageMap = {
  'Continuar com um número de telefone': Telefone,
  'Continnuar com o google': GloogleIcon,
  'Continuar com o Facebook': Facebook,
  'Continuar com a Apple': Apple
 };
 
const App = () => {
  const [newSkill, setNewSkill] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image source={SkillCircle} style={styles.image}/>
      <Text style={styles.title}>Milhões de músicas à sua escolha.</Text>
      <Text style={styles.title}>Grátis no Spotify.</Text>
      
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.titleButt}>Inscreva-se grátis</Text>
      </TouchableOpacity>

    <FlatList
      data={['Continuar com um número de telefone','Continnuar com o google', 'Continuar com o Facebook', 'Continuar com a Apple']}
      keyExtractor={item => item}

      renderItem={({item})=>{
          return <View style={styles.buttonSkill}>
              <TouchableOpacity style={styles.button}>
                <View style={{ flexDirection: "row",  justifyContent: "flex-start"} }>
                  {imageMap[item] && <Image source={imageMap[item]} style={styles.logo} />}
                  <Text style={styles.buttonText}>{item}</Text>
                </View>
              </TouchableOpacity>
            </View>
       }}
    />
    
    <TouchableOpacity>
     <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity> 
    </View>
    
)};

export default App;

