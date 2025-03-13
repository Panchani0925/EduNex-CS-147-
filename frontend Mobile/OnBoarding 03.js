import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const OnboardingScreen = ({ onStart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Blue Circle Background with Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.blueCircle}>
            <Image
              source={require('./assets/office-worker.png')}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>

         {/* Text Content */}
         <Text style={styles.text}>
          The beautiful thing about learning is that no one can take it away from you.
        </Text>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.journeyButton} onPress={onStart}>
          <Text style={styles.journeyButtonText}>Let's Make a Journey</Text>
        </TouchableOpacity>
      </View>
      
      {/* Home Indicator Line */}
      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 20,
    },
    illustrationContainer: {
      width: '100%',
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    blueCircle: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 999,
      backgroundColor: '#4169E1',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    illustration: {
      width: '80%',
      height: '80%',
    },
    text: {
      marginTop: 24,
      fontSize: 16,
      lineHeight: 24,
      textAlign: 'center',
      color: '#333',
      marginBottom: 32,
    },
    progressContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 32,
    },
    progressDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#E0E0E0',
      marginHorizontal: 4,
    },
    activeDot: {
      width: 24,
      backgroundColor: '#4169E1',
    },
    journeyButton: {
      width: '100%',
      height: 56,
      backgroundColor: '#4169E1',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    journeyButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
    homeIndicator: {
      width: 134,
      height: 5,
      backgroundColor: '#000',
      borderRadius: 2.5,
      alignSelf: 'center',
      marginBottom: 8,
    },
  });

  export default OnboardingScreen;

  // Usage in App.js:
/*
import React from 'react';
import OnboardingScreen from './OnboardingScreen';

export default function App() {
  const handleStart = () => {
    console.log('Journey button pressed');
    // Navigate to main app
  };

   return (
    <OnboardingScreen onStart={handleStart} />
  );
}
*/

  
  
  
  
  



