import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>
              What Do You Want to{'\n'}Teach Today
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Row 1 */}
            <View style={styles.formRow}>
              {/* Category */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Category</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="e.g., biology"
                    placeholderTextColor="#979797"
                  />
                  <Text style={styles.dropdownIcon}>▼</Text>
                </View>
              </View>

              {/* Class */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Class</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="e.g., Junior High..."
                    placeholderTextColor="#979797"
                  />
                  <Text style={styles.dropdownIcon}>▼</Text>
                </View>
              </View>
            </View>

            {/* Row 2 */}
            <View style={styles.formRow}>
              {/* How Many Student */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>How Many Student?</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="e.g., 40 students"
                    placeholderTextColor="#979797"
                  />
                  <Text style={styles.dropdownIcon}>▼</Text>
                </View>
              </View>

              {/* Duration */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Duration</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="e.g., 1 month"
                    placeholderTextColor="#979797"
                  />
                  <Text style={styles.dropdownIcon}>▼</Text>
                </View>
              </View>
            </View>

            {/* Course Name */}
            <View style={styles.fullWidthInputContainer}>
              <Text style={styles.inputLabel}>Name Your Course?</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="e.g., how do plants photosynthesize"
                  placeholderTextColor="#979797"
                />
              </View>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Make Your Class</Text>
            </TouchableOpacity>
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
    backgroundColor: '#4c6ed7',
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
  formContainer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputContainer: {
    width: '48%',
  },
  fullWidthInputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#181818',
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#181818',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#979797',
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#4c6ed7',
    borderRadius: 12,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default App;