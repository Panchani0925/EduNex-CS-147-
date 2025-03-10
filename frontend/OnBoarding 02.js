import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const OnboardingScreen = ({ onNext, onSkip }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main Content */}
      <View style={styles.content}>
        {/* Blue Circle Background with Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.blueCircle}>
            <Image
              source={require('./assets/person-working.png')}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>

         
        {/* Text Content */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvinar suspendisse. Et sit ac lacus in rhoncus.
        </Text>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
        
        {/* Action Buttons */}
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
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




