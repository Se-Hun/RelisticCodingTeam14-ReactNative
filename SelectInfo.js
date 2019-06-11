import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Weather from './Weather';

export default class SelectInfo extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
        };
    };
    state = {
        isLoaded: true
    }

    render() {
        const isLoaded = this.state.isLoaded;
        return(
            <View style={styles.container}>
                {isLoaded ? (
                    <Weather/>
                ) : (
                    <View style={styles.loading}>
                        <Text>Getting the weather ...</Text>
                    </View>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loading: {
        flex: 1,
        backgroundColor: '#FDF6AA'
    }
})