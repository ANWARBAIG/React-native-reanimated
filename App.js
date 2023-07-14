import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView, } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

function App() {
  const [btn, setbtn] = useState(true)
  const ht = useSharedValue(130)
  console.log('Initial btn value', btn)
  console.log('initial height.value', ht.value)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(ht.value, { duration: 200 }),
    }
  })
  return (
    <SafeAreaView style={styles.outercontainer}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <TouchableOpacity activeOpacity={true} style={styles.btn} onPress={() => {
          setbtn(!btn),
          ht.value = btn ? 130 : 400;
        }}>
          {!btn ? <Text style={styles.txtbtncss}>SHOW MORE</Text> : <Text style={styles.txtbtncss}>SHOW LESS</Text>}
        </TouchableOpacity>
        <Text style={{ color: "white",fontSize:16 }}>
          When using an application, the smooth movement of objects, pages, modals, and other components improves our UX and encourages users to return. No one wants to use an app that glitches and{!btn?<>.....</>:null} does not move properly.
          Creating animations and object transitions might be a burden for frontend developers since we typically want to focus on writing code for our application and not bother calculating where to place an object or where to move that object when a user hits an event on our application.
          Working with UI designers can also be a challenge, especially when expectations are misaligned — for example, when designers expect to see their complex animations recreated as-is. Finding a good tool and package to solve this issue is not so easy, either — but that is exactly why the react-native-reanimated package was built.
        </Text>
      </Animated.View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  outercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 5
  },
  txtbtncss: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white',
    padding: 5,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  }
})
export default App;