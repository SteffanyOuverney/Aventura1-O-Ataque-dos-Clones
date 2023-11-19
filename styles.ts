import {StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: "#212121",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
        paddingBottom: 30
    },
    title:
    {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop:10
    },
    image:
    {   
        width: 100,
        height: 80,
    },
    logo:
    {
        width: 30,
        height: 30,
    },
    buttonWTF: {
        backgroundColor: '#558B2F',
        borderColor: 'white',
        padding: 10,
        borderRadius: 100, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20,
        width: 350,
        height:60
    }, 
    button: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 100, 
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: 20,
        width: 350,
        height:60
    }, 
    buttonText:
    {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});