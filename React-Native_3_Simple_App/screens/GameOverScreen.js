import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const GameOverScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Guees</Text>
      </View>
      <View style={styles.imageContainer}>
      {/* <Image
        source={require('.././assets/gameOver.png')}
        style={styles.image}
        /> */}
        </View>
      <View>
        <Text>
          I have taken 4 steps steps to guess the number 19
        </Text>
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Start new game</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  imageContainer:{
     width:200,
     height:200,
     textAlign:'center',
     justifyContent:'center'
  },
  image:{
    width:'100%',
    height:'100%',
    // borderRadius:100
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
})