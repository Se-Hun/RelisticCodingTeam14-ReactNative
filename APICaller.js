import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import WeatherDetailScreen from './WeatherDetailScreen';

export default class APICaller extends Component {
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
                //console.log(this.state.main)
            });
    }

    render() {
        const isLoaded = this.state.isLoaded;

        return(
            <View style={styles.container}>
                {isLoaded ? (
                    <WeatherDetailScreen
                        temperature={this.state.main.temp}
                        name={this.state.weather[0].main}/>
                ) : (
                    <ActivityIndicator
                        size="large"
                        style={styles.loading}
                        animtating={true}/>
                    )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})