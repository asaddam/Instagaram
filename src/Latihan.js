import React from 'react';
import { View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as Animatable from 'react-native-animatable'

class App extends React.Component {

  render() {
    return (
      
      <View>
        <Header
          placement='left'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/13/38497604/38497604_61c4b3d0-1e6b-4a25-89e9-e4575c560d68_2048_2048'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <Animatable.View animation="bounce" duration={2000} delay={2000}
              iterationCount={"infinite"}>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png'}} style={{height: 350, flex: 1}}/>
            </CardItem>
            </Animatable.View>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
      </View>
    )
  }
}
export default App;