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
    image:
      'https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MzU5MTMyNDgyNzQxNTI4/judy-garland-1922---1969-as-dorothy-gale-in-the-wizard-of-oz-1939-photo-by-silver-screen-collection_hulton-archive_getty-images.jpg',
  },
  {
    name: 'Harry Potter',
    image:
      'https://vignette.wikia.nocookie.net/harrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest?cb=20140603201724',
  },
  {
    name: 'Doctor Strange',
    image:
      'https://fsb.zobj.net/crop.php?r=xgii1X95lVrzaD-DrswSe-1e32mfKc_mTDoKzAwIuckdZ_miltpO0gUW-Z1YdMHDoWyuRj2IUcfVVQ73_eJHPGAi4ubCd5ZBxIO2AAZqG906mpAwN7IQ9LaW02GFiDNzqYat97G2kt2Gs_PovlJfxtvUkS6eItMC0x3r14fOS2Xi2AcNFy2rrKbbK_k',
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
                    source={{
                      uri: wizard.image,
                      cache: 'force-cache',
                    }}
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
