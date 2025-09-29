import React from 'react'
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity, Vibration } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

const StartScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Guess My Number</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardText}> Enter a number</Text>
                </View>

                <View style={styles.numberInputContainer}>
                    <TextInput
                        style={styles.numberInput}
                        keyboardType='number-pad'
                    />
                </View>


                <View style={styles.actionButtonsContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>

            </View>
        </View>
    )
}

export default StartScreen;

const styles = StyleSheet.create({
    screenContainer: {
        width: '80%',
        flex: 1
    },
    headerContainer: {
        borderWidth: 3,
        borderColor: 'transparent',
        padding: 12,
        marginBottom: 24,
        backgroundColor: '#fff'
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    cardContainer: {
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingBlock:18,
        gap: 12,
        elevation:1,
        shadowColor:'red',
        shadowOffset:{width:2,height:3},
        shadowRadius:6,
        shadowOpacity:0.35

    },
    cardHeader: {

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
        justifyContent: 'space-around',
        width: '90%',
        paddingHorizontal: 20,
    }
});