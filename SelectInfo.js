import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

export default class SelectInfo extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Weather Info: ${navigation.getParam('city', 'Unknown')}`,
        };
    };
    state = {
        isLoaded: false
    }

    componentDidMount() {
        const { navigation } = this.props;
        // const city = navigation.getParam('city', null);
        const city = 'Daejeon';

        fetch(`http://demo6468405.mockable.io/weather-crawlers/current-weathers/by-city-name/${city}`)
            .then(response => response.json())
            .then(info => {
            this.setState({
                ...info,
                isLoaded: true,
                });
            //console.log(this.state);
                console.log(this.state.main)
            });
    }

    render() {
        const isLoaded = this.state.isLoaded;

        return(
            <View style={styles.container}>
                {isLoaded ? (
                    <Weather temperature={this.state.main.temp}/>
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