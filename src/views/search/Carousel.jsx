import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Button from '../../components/buttons/Button';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default () => {
  const slides = [
    {
      backgroundColor: 'red',
      title: 'Kauan Mello Cancelier',
      description: 'Programador, amante de carros e de vôlei.',
    },
    {
      backgroundColor: 'blue',
      title: 'Eduarda Manenti',
      description: 'Amante de livros e de tartarugas, codo durante a noite.',
    },
  ];

  const scrollViewRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveSlide(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        snapToInterval={screenWidth}
        decelerationRate="fast">
        {slides.map((slide, index) => (
          <View
            key={index}
            style={[
              styles.slide,
              {
                width: screenWidth - 20,
                height: screenHeight * 0.8,
                backgroundColor: slide.backgroundColor || 'transparent',
              },
            ]}>
            <View style={styles.buttonContainer}>
              <Button type="black" label="♥" />
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{slides[activeSlide].title}</Text>
        <Text style={styles.description}>{slides[activeSlide].description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: 'absolute',
    right: 16,
    justifyContent: 'center',
    height: '50%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});
