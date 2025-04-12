import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    
  },
  input: {
    height: 50,
    width: 200,
    borderColor: '#aaa',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    borderRadius: 8,
    color: '#fff' 
  },
  brailleContainer: {
    flexDirection: 'row',
    marginTop: 10,
   
  },
  cela: {
    width: 60,
    height: 100,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555',
    margin: 3,
    backgroundColor: '#FFFF00'
  },
  filled: {
    backgroundColor: '#222'
  },
  plvLabel: {
    marginTop: 5,
    fontSize: 16,
    textTransform: 'uppercase',

  }
});

export default styles;