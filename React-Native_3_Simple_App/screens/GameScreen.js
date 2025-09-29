import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

const GameScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Guees</Text>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>41</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
        <Text style={styles.cardText}>
          Tell Higher or Lower ?
        </Text>
        </View>
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.8} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
    screenContainer: {
        width: '80%',
        flex: 1
    },
    headerContainer: {
        borderWidth: 3,
        borderColor: '#dddbc8ff',
        padding: 12,
        marginBottom: 24,
        backgroundColor: '#fff'
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    numberContainer:{
      padding:16,
      borderBottomWidth:1,
      borderRadius:8,
      borderColor:'#96989bff',
      marginBottom:24
    },
    number:{
      textAlign:'center',
      fontSize:24,
      fontWeight:600,
      color:'#d85218ff'
    },
    cardContainer: {
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingBlock: 12,
    },
    cardHeader: {
      marginBottom:24
    },
    cardText: {
        fontWeight: 400,
        fontSize: 16
    },
    numberInputContainer: {
        width: '15%',
        marginBottom: 12
    },
    numberInput: {
        borderBottomColor: '#ebbdbdff',
        borderBottomWidth: 4
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#318cdbff',
        borderRadius: 16
    },
    actionButtonText: {
        textAlign: 'center',
        padding: 6,
        color: '#fff',
        fontWeight: 400
    }

});