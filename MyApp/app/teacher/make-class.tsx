import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              What Do You Want to{'\n'}Teach Today
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    height: 250,
    backgroundColor: '#3366cc',
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 42,
  },
});

export default App;