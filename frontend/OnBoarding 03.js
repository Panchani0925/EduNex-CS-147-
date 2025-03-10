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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras netus mauris pulvinar suspendisse. Et sit ac lacus in rhoncus.
        </Text>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>


