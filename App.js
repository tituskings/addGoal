import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, FlatList, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
 const [courseGoals, setCourseGoals] = useState([]);
 const [isAddMode, setIsAddMode] = useState(false);

 const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals=>[
      ...currentGoals,
      {id:Math.random().toString(),value: goalTitle }
    ]);
    setIsAddMode(false);
 };

 const removeGoalHandler = goalId => {
   setCourseGoals(currentGoals =>{
     return currentGoals.filter((goal) => goal.id !== goalId);
  });

 };

 const cancelHandler = () =>{
   setIsAddMode(false);
 }

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOALS" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} 
      onCancel = {cancelHandler}
      onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor = {(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData =>(
        <GoalItem  
        onDelete={removeGoalHandler.bind(this, itemData.item.id)} 
         title={itemData.item.value} />)}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 30,
  },
  
});
