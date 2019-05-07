import React from 'react';
import {View} from 'react-native';
import Search from "./Component/Search";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Search/>
            </View>
        );
    }
}
const styles = {
    main: {
        marginTop: 20,
        backgroundColor: "gray"
    }
}
