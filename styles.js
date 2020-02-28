import {StyleSheet, Platform, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandContainer: {
    marginVertical: 40,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 42,
    fontWeight: '900',
  },
  first: {
    color: '#f2b21b',
  },
  second: {
    color: '#000000',
  },
  selectorContainer: {
    flex: 1,
  },
  imagesContainer: {
    marginHorizontal: -8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 8,
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: 'rgb(31, 31, 31)',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 3,
        },
      },
    }),
  },
  image: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  selectedImage: {
    borderWidth: 6,
    borderColor: '#f2b21b',
  },
  choose: {
    fontSize: 14,
    marginBottom: 16,
    opacity: 0.5,
    textAlign: 'center',
    fontWeight: '600',
  },
  selectedWizard: {
    fontSize: 14,
    marginVertical: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  wizardName: {
    fontWeight: '700',
    color: '#f2b21b',
  },
  selectButton: {
    height: 54,
    width: width - 48,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2b21b',
  },
  selectButtonDisabled: {
    opacity: 0.4,
    backgroundColor: 'rgba(31, 31, 31, 0.2)',
  },
  selectButtonText: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  activity: {
    marginTop: 24,
  },
});
