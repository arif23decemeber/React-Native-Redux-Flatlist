import React, {Component} from 'react';
import {Container, Header, Right, Body, Left, Text, Content, Button} from 'native-base';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  redirect() {
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const name = navigation.getParam('name');
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={()=>{this.redirect()}} transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Text>{name}</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Text>{id} - {name}</Text>
        </Content>
      </Container>
    )
  }
}

export default Detail;
