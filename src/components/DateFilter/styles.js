import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    overflow: 'hidden',
  },
  picker: {
    height: 48,
    width: '100%',
    color: '#444',
    borderWidth: 0,
    borderColor: 'transparent',
    backgroundColor: '#fff'
  },
});

export default styles;
