import React, {useState } from "react";
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import { styles } from "./styles";

const App = () => {
  const [newSkill, setNewSkill] = useState<string>('');

  return (
    <View style={styles.container}>
    
      <Text style={styles.title1}>Entrar</Text>
      
        <Text style={styles.title}>E-mail ou nome do usuário</Text>
        <TextInput
         style= {styles.input}
         onChangeText={setNewSkill}
         keyboardType="new skill"
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
         style= {styles.input}
         onChangeText={setNewSkill}
         keyboardType="new skill"
        />
      <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </View>
        </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button2}>
            <Text style={styles.buttonText}>Entrar sem senha</Text>
        </View>
      </TouchableOpacity>
      
    
    </View>
    
)};

export default App;

