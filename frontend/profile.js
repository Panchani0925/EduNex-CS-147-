import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Software Developer | Tech Enthusiast | Traveler</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>thangavelabishek5@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoText}>+1 234 567 890</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoText: {
    color: 'gray',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
