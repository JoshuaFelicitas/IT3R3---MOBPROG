import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // 
import styles from '../styles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (email) {
      Alert.alert('Password Reset Request', 'Password reset link sent to your email.');
      navigation.navigate('Login');
    } else {
      Alert.alert('Password Reset Error', 'Please enter your email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.passwordResetSteps}>
        Password Reset Steps:
      </Text>
      <View style={styles.passwordResetStep}>
        <Icon name="check" size={20} color="green" />
        <Text style={styles.passwordResetStepText}>
          Check your email inbox.
        </Text>
      </View>
      <View style={styles.passwordResetStep}>
        <Icon name="link" size={20} color="blue" />
        <Text style={styles.passwordResetStepText}>
          Click on the password reset link.
        </Text>
      </View>
      <View style={styles.passwordResetStep}>
        <Icon name="cogs" size={20} color="gray" />
        <Text style={styles.passwordResetStepText}>
          Follow the instructions to reset your password.
        </Text>
      </View>
      <Button title="Reset Password" onPress={handleForgotPassword} />
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
