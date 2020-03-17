import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

export const WIZARDS = [
  {
    name: 'Dorothy of Wizard of Oz',
    image: require('./images/dorothy.jpg'),
  },
  {
    name: 'Harry Potter',
    image: require('./images/harry.jpg'),
  },
  {
    name: 'Doctor Strange',
    image: require('./images/strange.jpg'),
  },
];

const App = () => {
  const [selectedWizard, setSelectedWizard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectWizard = name => () => {
    setSelectedWizard(name);
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View testID="brand" style={styles.brandContainer}>
            <Text style={styles.brand}>
              <Text style={styles.first}>WIZ</Text>
              <Text style={styles.second}>ARD</Text>
            </Text>
            <ActivityIndicator
              animating={isLoading}
              testID="loading"
              size="large"
              color="#f2b21b"
              style={styles.activity}
            />
          </View>
          <View style={styles.selectorContainer}>
            <Text style={styles.choose} testID="choose-wizard">
              Choose your wizard
            </Text>
            <View style={styles.imagesContainer}>
              {WIZARDS.map(wizard => (
                <TouchableOpacity
                  testID={`wizard-${wizard.name}`}
                  style={styles.imageContainer}
                  key={wizard.name}
                  onPress={selectWizard(wizard.name)}>
                  <Image
                    resizeMode="cover"
                    source={wizard.image}
                    style={[
                      styles.image,
                      selectedWizard === wizard.name && styles.selectedImage,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
            {selectedWizard && (
              <Text testID="selected-wizard-text" style={styles.selectedWizard}>
                <Text>{`Your wizard is `}</Text>
                <Text style={styles.wizardName}>{selectedWizard}.</Text>
              </Text>
            )}
          </View>
          <TouchableOpacity
            testID="choose-wizard-button"
            disabled={!selectedWizard || isLoading}
            onPress={toggleLoading}
            style={[
              styles.selectButton,
              (!selectedWizard || isLoading) && styles.selectButtonDisabled,
            ]}>
            <Text style={styles.selectButtonText}>
              {isLoading ? 'CHOOSING WIZARD...' : 'CHOOSE WIZARD'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
