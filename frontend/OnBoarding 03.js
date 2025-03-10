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

