import {
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Home.styles';
import {COLORS, DIMENSIONS, SPACING} from '../../theme/theme';
import InputHeader from '../../components/InputHeader';
import useApiData from '../../hooks/useApiData';
import {
  baseImagePath,
  nowPlayingMovies,
  popularMovies,
  upcomingMovies,
} from '../../api/apiUrl';
import CategoryHeader from '../../components/CategoryHeader';
import SubMovieCard from '../../components/SubMovieCard';
import MovieCard from '../../components/MovieCard';

const Home = ({navigation}: any) => {
  const [moviesData, setMoviesData] = useState<any>({
    nowPlayingMovies: undefined,
    popularMovies: undefined,
    upcomingMovies: undefined,
  });

  const {data: nowPlayingData} = useApiData(nowPlayingMovies);
  const {data: popularData} = useApiData(popularMovies);
  const {data: upcomingData} = useApiData(upcomingMovies);

  useEffect(() => {
    (async () => {
      if (nowPlayingData) {
        setMoviesData((prevData: any) => ({
          ...prevData,
          nowPlayingMovies: [
            {id: 'dummy-left'},
            ...nowPlayingData.results,
            {id: 'dummy-right'},
          ],
        }));
      }
      if (popularData) {
        setMoviesData((prevData: any) => ({
          ...prevData,
          popularMovies: popularData.results,
        }));
      }
      if (upcomingData) {
        setMoviesData((prevData: any) => ({
          ...prevData,
          upcomingMovies: upcomingData.results,
        }));
      }
    })();
  }, [nowPlayingData, popularData, upcomingData]);

  const handleSearchMovie = () => {
    navigation.navigate('Search');
  };

  const isLoading = Object.values(moviesData).every((data: any) => {
    return data === undefined;
  });

  const handleOnPressMovieCard = (id: any) => {
    navigation.push('MovieDetails', {movieId: id});
  };

  const renderCardList = ({item, index}: any) => {
    return (
      <SubMovieCard
        shouldMarginatedAtEnd={true}
        onPressSubMovieCard={() => handleOnPressMovieCard(item.id)}
        title={item.original_title}
        width={DIMENSIONS.width / 3}
        isFirst={index == 0 ? true : false}
        isLast={index == moviesData.upcomingMovies?.length - 1 ? true : false}
        imagePath={baseImagePath('w342', item.poster_path)}
      />
    );
  };

  const renderNowPlayingList = ({item, index}: any) => {
    if (!item.original_title) {
      return (
        <View
          style={{
            width:
              (DIMENSIONS.width -
                (DIMENSIONS.width * 0.7 + SPACING.space_32 * 2)) /
              2,
          }}></View>
      );
    }
    return (
      <MovieCard
        shouldMarginatedAtEnd={true}
        onPressSubMovieCard={() => handleOnPressMovieCard(item.id)}
        title={item.original_title}
        width={DIMENSIONS.width * 0.7}
        isFirst={index == 0 ? true : false}
        isLast={index == moviesData.upcomingMovies?.length - 1 ? true : false}
        imagePath={baseImagePath('w780', item.poster_path)}
        genre={item.genre_ids.slice(1, 4)}
        vote_average={item.vote_average.toFixed(1)}
        vote_count={item.vote_count}
      />
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar hidden />
      <View style={styles.inputHeaderContainer}>
        <InputHeader handleSearchMovie={handleSearchMovie} />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
      ) : (
        <ScrollView>
          <CategoryHeader title={'Now Playing'} />
          <FlatList
            horizontal
            bounces={false}
            decelerationRate={0}
            snapToInterval={DIMENSIONS.width * 0.7 + SPACING.space_32}
            data={moviesData.nowPlayingMovies}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={styles.containerGap32}
            renderItem={renderNowPlayingList}
          />
          <CategoryHeader title={'Popular'} />
          <FlatList
            horizontal
            bounces={false}
            data={moviesData.popularMovies}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={styles.containerGap32}
            renderItem={renderCardList}
          />
          <CategoryHeader title={'Upcoming'} />
          <FlatList
            horizontal
            bounces={false}
            data={moviesData.upcomingMovies}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={styles.containerGap32}
            renderItem={renderCardList}
          />
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default Home;
