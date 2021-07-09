import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Thumbnail, Badge, Fab } from 'native-base';
import appStyles from '../appStyles';
export default class StatusScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
        <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} />
                  <Icon
                    type="MaterialIcons"
                    name="add-circle"
                    style={appStyles.addStatusIcon}
                  />
              </Left>
              <Body>
                  <Text>My status</Text>
                  <Text note>Tap to add status update</Text>
              </Body>
          </ListItem>
          <ListItem itemDivider style={appStyles.listItemDivider}>
                <Text style={{ fontSize: 12 }}>Recent updates</Text>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Badge style={appStyles.badgeStatus}>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} style={appStyles.thumbnailBorder} />
                  </Badge>
              </Left>
              <Body>
                  <Text>Ariel Tatum</Text>
                  <Text note>Today, 12:57 AM</Text>
              </Body>
          </ListItem>

          <ListItem itemDivider style={appStyles.listItemDivider}>
                <Text style={{ fontSize: 12 }}>Viewed updates</Text>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Badge style={appStyles.badgeStatusView}>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} style={appStyles.thumbnailBorder} />
                  </Badge>
              </Left>
              <Body>
                  <Text>Ariel Tatum</Text>
                  <Text note>Today, 12:57 AM</Text>
              </Body>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Badge style={appStyles.badgeStatusView}>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} style={appStyles.thumbnailBorder} />
                  </Badge>
              </Left>
              <Body>
                  <Text>Syifa Hadju</Text>
                  <Text note>Yesterday, 1:57 PM</Text>
              </Body>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Badge style={appStyles.badgeStatusView}>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} style={appStyles.thumbnailBorder} />
                  </Badge>
              </Left>
              <Body>
                  <Text>Pevita Pearce</Text>
                  <Text note>Yesterday, 1:57 PM</Text>
              </Body>
          </ListItem>
          <Footer style={{height: 150}}>
          <FooterTab style={{backgroundColor: 'white'}}></FooterTab>
        </Footer>
        </Content>
        <Fab
            style={appStyles.fabColor}
            active={true}
            direction="up"
            position="bottomRight"
        >
            <Icon name="photo-camera" type="MaterialIcons" />
        </Fab>
        <Fab
            style={appStyles.fabColorStatus}
            active={true}
            direction="up"
            position="topRight"
        >
            <Icon name="edit" type="MaterialIcons" style={{color: '#075E54'}} />
        </Fab>
      </Container>
    );
  }
}