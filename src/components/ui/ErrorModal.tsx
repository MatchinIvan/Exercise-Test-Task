import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: colors.green,
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 30
  },
  text: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 14,
  }
});

interface ErrorModalProps {
  isVisible: boolean;
  closeModal: (bool: boolean) => void;
}

const ErrorModal: FC<ErrorModalProps> = ({isVisible, closeModal}) => {
  const handleClosingModal = () => {
    closeModal(false)
  }

  return (
    <View style={styles.container}>
      <Modal style={styles.container} isVisible={isVisible} onBackdropPress={handleClosingModal}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Oops !</Text>
          <Text style={styles.text}>No results were found with these parameters</Text>
        </View>
      </Modal>
    </View>
  );
};

export default ErrorModal;
