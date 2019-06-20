import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {
    Form,
    Container,
    Content,
    Input,
    Item as FormItem,
    Button,
    Label,
    Text
} from 'native-base';


const styles = StyleSheet.create({

    textContent: {
        marginTop: 200,  
        textAlign: 'center',
    },
    
});

class SignIn extends Component {

    render(){
        return(
            <Container>
                <Text style={styles.textContent}>Signin</Text>
            </Container>
        )
    }
}

export default SignIn;