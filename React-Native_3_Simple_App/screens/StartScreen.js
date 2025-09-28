import React from 'react'
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity, Vibration } from 'react-native'

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
                    <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                        <Text style={styles.actionButtonText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                        <Text style={styles.actionButtonText}>Confirm</Text>
                    </TouchableOpacity>
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
    cardContainer: {
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        paddingBlock: 12,
        gap: 12

    },
    cardHeader: {

    },
    cardText: {
        fontWeight: 400,
        fontSize: 16
    },
    numberInputContainer: {
        // borderWidth: 3,
        // borderColor: 'black',
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