import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements'; 
import { API_URL } from '../helpers/apiurl';
import * as Animatable from 'react-native-animatable';
import Axios from 'axios';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    InputContainerStyle: {
        marginBottom: 100,
        marginTop: 50,
        width: '100%'
    }
})

class RegisterForm extends React.Component {
    state = { email: '',
            username: '', 
            password: '', 
            hidePass: true,
            conPass: '',
            hideConPass: true,
            btnLoading: false,
            error: ''
        }

    onBtnRegister = async () => {
        try {
            this.setState({ btnLoading: true, error: '' })
            if(this.state.email !== '' && this.state.password !== ''
                && this.state.username !== '') {
                    if (this.state.password === this.state.conPass){
                        const res = await Axios.post(API_URL + `/user/register`, {
                                                email: this.state.email,
                                                username: this.state.username,
                                                password: this.state.password
                                            })
                        console.log(res.data)
                        this.setState({ btnLoading: true })
                        } else {
                            this.setState({ btnLoading: false, error: 'Password dan Confirm Password tidak sesuai'})
                        }
            } else {
                this.setState({ btnLoading: false, error: 'Semua input harus diisi'})
            }
            this.setState({ btnLoading: false,
                            email: '',
                            username: '', 
                            password: '',
                            conPass: ''                     
            })


        } catch(err) {
            this.setState({ btnLoading: false, 
                error: err.response ? err.response.data.message : err.name })
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Animatable.Text animation={'fadeIn'} duration={2000} >
                    <Text h3>Welcome!</Text>
                </Animatable.Text>
                <View style={styles.InputContainerStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                            name='email'
                            size={24}
                            color='black'
                            />
                        }
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                        />
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                            name='account-box'
                            size={24}
                            color='black'
                            />
                        }
                        value={this.state.username}
                        onChangeText={(val) => this.setState({ username: val.toLowerCase().replace(/\s/g, '') })}
                        />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='black'
                            />
                        }
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                        secureTextEntry={this.state.hidePass}
                        rightIcon={
                            <Icon 
                                name={this.state.hidePass ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={this.state.hidePass ? '#bfc3c9' : 'black'}
                                onPress={() => this.setState({ hidePass: !this.state.hidePass })} 
                            
                            />
                        }
                        />
                    <Input
                        placeholder='Confirm Password'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='black'
                            />
                        }
                        value={this.state.conPass}
                        onChangeText={(val) => this.setState({ conPass: val })}
                        secureTextEntry={this.state.hideConPass}
                        rightIcon={
                            <Icon 
                                name={this.state.hideConPass ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={this.state.hideConPass? '#bfc3c9' : 'black'}
                                onPress={() => this.setState({ hideConPass: !this.state.hideConPass })} 
                            
                            />
                        }
                        />
                </View>
                <Text style={{ color: 'red' }}>{this.state.error}</Text>
                <Button 
                    title='Register'
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ borderColor: 'black', borderBottomWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={this.onBtnRegister}
                    loading={this.state.btnLoading}

                />
                <Button 
                    title="Back to Login"
                    containerStyle={{width: '95%', marginBottom: 10}}
                    buttonStyle={{ backgroundColor: 'green' }}
                    onPress={() => this.props.navigation.navigate('Login')}

                />

            </View>
        )
    }
}

export default RegisterForm;