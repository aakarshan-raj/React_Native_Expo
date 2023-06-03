import {View,Text, TextInput, Button,StyleSheet} from "react-native"
import { useState } from "react";

 export default App = ()=> {
  
  const [value,updateValue] = useState('');
  const [goals,setGoals] = useState([]);
  function grabInput(input_data){
      updateValue(input_data)
  };

  function addGoalHandler(){
    setGoals((currentGoals)=>[...currentGoals,value])
    
  }

  return (

    
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}> 
             <TextInput style={styles.TextInput} placeholder="Write something" onChangeText={grabInput}/>
             <Button title="Add" onPress={addGoalHandler}/>
        </View>
        <View style={styles.goalContainer}>
            {goals.map((item,item_number)=><Text key={item_number}>{item_number} {item}</Text>)}
         </View>
    </View>

  );

}

const styles = StyleSheet.create(
{
 appContainer:{
  flex:1,
  padding:50,
 },
 inputContainer:{
  flex:1,
 flexDirection:"row",
 alignItems:'center',
 justifyContent:'space-between',
 marginBottom:20,
 borderBottomWidth:2
 

 },
 TextInput:{
  padding:8,
   borderColor:'#2aff',
   width:"80%"
 },
 goalContainer:{
  flex:5,
 }

}
);
