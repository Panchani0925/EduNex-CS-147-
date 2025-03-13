import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';

const OnboardingScreen = ({ onNext, onSkip }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Blue semicircle with illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.blueCircle}>
            <Image 
              source={require('./assets/woman-working.png')} 
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>
        
        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Education is the most powerful weapon which you can use to change the world.
          </Text>
        </View>

          {/* Progress indicator */}
          <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator} />
          </View>
        </View>
        
        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={onNext}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Bottom home indicator area */}
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicatorBar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueCircle: {
    width: '100%',
    aspectRatio: 1,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    backgroundColor: '#4263EB',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  progressBar: {
    width: 100,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  progressIndicator: {
    width: '30%',
    height: '100%',
    backgroundColor: '#4263EB',
    borderRadius: 4,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4263EB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  skipText: {
    color: '#4263EB',
    fontSize: 16,
  },
  homeIndicator: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 8,
  },
  homeIndicatorBar: {
    width: 134,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 2.5,
  },
});

export default OnboardingScreen;
        

