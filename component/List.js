import React, {Component} from 'react';
import {List, ListItem, Text, Right, Left, Button, Icon} from 'native-base';

class Listing extends Component{
  constructor(props) {
    super(props);
  }

  redirect(user) {
    this.props.navigation.navigate('Detail', user);
  }

  render() {
    return (
      <List keyval={this.props.keyval}>
        <ListItem>
          <Left>
            <Text>{this.props.val.title}</Text>
          </Left>
          <Right>
            <Button transparent dark onPress={()=>{this.redirect({id: this.props.val.id, name: this.props.val.name})}}>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </ListItem>
      </List>
    )
  }
}

export default Listing;
