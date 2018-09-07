import React, {Component} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';

import {Container, Header, Right, Body, Left, Spinner, Text, Content, Button, Icon, Item, Input, Title} from 'native-base';

import Listing from './List';
import {connect} from 'react-redux';
import {listingItems, refresh_page} from '../src/actions';


class Home extends Component {


  componentDidMount() {
    this.props.listingItems();
  }



  handleLoadMore = () => {
      this.props.listingItems(this.props.page + 1);
  }

  renderFooter = () => {
    if(!this.props.items.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#fff"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    )
  }

  handleRefresh = () => {
    this.props.refresh_page(this.props.page = 1);
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#f9f9f9", borderBottomWidth: 0 }}>
          <Left>
            <Icon />
          </Left>
          <Body>
            <Title>Listing Items</Title>
          </Body>
          <Right/>
        </Header>
        <Header searchBar rounded style={{ backgroundColor: "#f9f9f9", paddingTop: -20, borderBottomWidth: 0 }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
          <FlatList
            style={{flex:1}}
            data={this.props.items.data}
            renderItem={({item}) => (
              <ListItem
                title={`${item.title}`}
                subtitle={item.id}
                avatar={{ uri: item.thumbnailUrl }}
              />
            )}

            keyExtractor={(item, index) => item.id.toString()}
            ListFooterComponent={() => this.renderFooter()}
            refreshing={this.props.items.refreshing}
            onRefresh={() => this.handleRefresh()}
            onEndReached={() => this.handleLoadMore()}
            onEndReachedThreshold={0}
          />
      </Container>
    )
  }
}


function mapStateToProps(state) {
  return {
    items: state,
    page : state.page
  }
}


export default connect(mapStateToProps, {listingItems, refresh_page}) (Home);
