import React from 'react';
import {View, TextInput, Button, FlatList, Text, StyleSheet} from 'react-native';
import MovieItem from "./MovieItem";
import {searchWithWord} from "../TMDBManager";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            searchField: "",
        }
    }

    _loadFilms(searchField) {
        searchWithWord(searchField).then(data => {
                this.setState(
                    {
                        films: data.results,
                    }
                )
            }
        );
    }
    _setSearchField(text) {
        this.setState(
            {searchField: text}
        )

    }

    render() {
        return (
            <View style={styles.view}>
                <TextInput placeholder='Titre du film' onChangeText={(text) => this._setSearchField(text)}/>
                <Button title='Rechercher' onPress={() => this._loadFilms(this.state.searchField)}/>
                <FlatList style={styles.list}
                          data={this.state.films}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({item}) => <MovieItem movie={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "white",
    },
    list: {
        backgroundColor: "gray",
    }
});
export default Search;