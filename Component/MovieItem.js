import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {getImageFromApi} from '../TMDBManager';

class MovieItem extends React.Component {
    render() {
        const movie = this.props.movie;
        return (
            <View style={styles.main_container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{uri: getImageFromApi(movie.poster_path)}}
                    />
                </View>
                <View style={styles.info}>
                    <View style={styles.topPart}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title_text}>{movie.title}</Text>
                        </View>
                        <View style={styles.votesContainer}>
                            <Text style={styles.votes}>{movie.vote_average}</Text>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.description_text}
                              numberOfLines={7}>
                            {movie.overview}
                        </Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.date_text}>Sortie le {movie.release_date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        marginTop: 1,
        marginLeft: 1,
        backgroundColor: 'gray',
    },
    topPart: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white"
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        margin: 1,
    },
    image: {
        margin: 1,
    },
    info: {
        flex: 2,
        margin: 1
    },
    votes: {
        margin: 2
    },
    votesContainer: {
        flex: 1,
    },
    title_text: {
        flex: 5,
        margin: 2,
    },
    titleContainer: {
        flex: 5,
        borderBottomColor: "gray",
        borderBottomWidth: 1    },
    description: {
        flex: 5,
        backgroundColor: "white",
    },
    description_text: {
        margin: 10,
    },
    date: {
        flex: 1,
        backgroundColor: "white",

    },
    date_text: {
        textAlign: "right",
        marginRight: 5,
    }
});
export default MovieItem;