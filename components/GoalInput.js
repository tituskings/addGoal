import React,{useState} from 'react';
import {View , TextInput , Button , StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const[enteredGoal , setEnteredGoal] = useState('');

    const goalInputHandler =(enteredText) => {
        setEnteredGoal(enteredText);
        };


    const addGoalHandler = ()=>{
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }
    return(
      <Modal visible={props.visible} animationType="slide">

        <View  style={styles.container}>
      <TextInput 
      placeholder="Course Goal" 
      style= {styles.input}
      onChangeText={goalInputHandler}
      view={enteredGoal}
      />

      <View style={styles.buttonContainer}>
      <View style={styles.button}>
          <Button title='CANCEL' color='red' onPress={props.onCancel}/>
        </View>
        <View style={styles.button}>
          <Button title='ADD' onPress={addGoalHandler} />
        </View>
      </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
      },
      input:{
        borderBottomWidth:1,
        width:'80%',
        marginBottom:10,
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'60%'
      },
      button:{
        width:'40%'
      }
});


export default GoalInput;