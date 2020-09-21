import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const styles = {
    thumbnailStyle: {
      height: 50,
      width: 50,
    },
    headerContentStyle: {justifyContent: 'space-around'},
    headerTextStyle: {fontSize: 18},
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 300,
      flex: 1,
    },
  };

  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle,
  } = styles;
  const {title, artist, thumbnail_image, image, url} = album;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now!</Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
