import { Text, TouchableOpacity, StyleSheet, View } from "react-native"

const PrimaryButton = ({ children }) => {
    return (
        <View>
            <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
                <Text style={styles.actionButtonText}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PrimaryButton;
const styles = StyleSheet.create({
    actionButton: {
        // flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#318cdbff',
        borderRadius: 16
    },
    actionButtonText: {
        textAlign: 'center',
        padding: 6,
        paddingHorizontal:18,
        color: '#fff',
        fontWeight: 400
    }

});