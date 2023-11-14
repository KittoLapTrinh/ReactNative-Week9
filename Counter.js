import { StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import increment from './redux/actionIn';
import disIncrement from './redux/actionDis'

const Counter =({count, increment, disIncrement})=>{
    return (
        <View style={styles.container}>
            
            
            <Pressable style={{width: 100, height: 100, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }} onPress={()=>{
               
            }} >
               
                
                <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}
                                    onPress={
                                        // store.dispatch(increment);
                                        // setCount(store.getState().count)
                                        disIncrement
                                    }>
                     <Text style={{fontSize: 30 }} >-</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 30}}>{count}</Text>
                
                
                <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'}}
                                    onPress={
                                        // store.dispatch(increment);
                                        // setCount(store.getState().count)
                                        increment
                                    }>
                    <Text style={{fontSize: 30 }}>+</Text>
                </TouchableOpacity>
                
            </Pressable>

            
          
           
            
           
        </View>
    )
}

var mapStateToProps = (state) =>({
    count: state.count
})

var mapDispatchToProps = (dispatch) =>({
    increment: ()=>{return dispatch(increment)},
    disIncrement: ()=>{return dispatch(disIncrement)}
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});