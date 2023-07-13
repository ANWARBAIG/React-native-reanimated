import React, { useState } from 'react';
import { View, Text, FlatList, Image ,Dimensions} from 'react-native';
import SliderItem from './SliderItem.js';

const App = () => {
  const [currentIndex,setCurrentIndex]=useState(0);
  const images = [
    { id: 1, source: require('./assets/images/slide1.jpeg') },
    { id: 2, source: require('./assets/images/slide2.jpeg') },
    { id: 3, source: require('./assets/images/slide3.jpeg') },
    { id: 4, source: require('./assets/images/slide4.jpeg') },
    { id: 5, source: require('./assets/images/slide5.jpeg') },
    { id: 6, source: require('./assets/images/slide6.jpeg') },
  ];

  return (
    <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
      <FlatList
        data={images}
        horizontal
        onScroll={e=>{
          const X=e.nativeEvent.contentOffset.x;
          console.log('Dimension.get(window).width',Dimensions.get('window').width)
          console.log('X',X);
          let currIndex=Math.floor((X/(Dimensions.get('window').width-60).toFixed(0)))
          console.log('currIndex',currIndex)
          setCurrentIndex(currIndex)
          console.log(',,lkhiajk',(X/(Dimensions.get('window').width)));
          console.log('CurrentIndex:',currentIndex)
        }
        }
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <SliderItem image={item.source} index={index} currentIndex={currentIndex}/>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;
