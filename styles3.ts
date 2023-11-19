import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#212121",
        paddingTop: 60,
        alignItems: 'center',
    },
    title1:
    {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    title:
    {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor:'#424242',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 10,
        borderRadius: 7,
        width: '80%' 
    },
    button: {
        backgroundColor: '#424242',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 100, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20,
        width: 100,
        height:40,
        alignSelf: 'center'
    },
    button2:
    {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 100, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20,
        width: 160,
        height:40
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});