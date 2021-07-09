import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Badge, Thumbnail, View, List, Fab } from 'native-base';
import appStyles from '../appStyles';
export default class CallScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
        <List>
        <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Ariel Tatum</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-made" type="MaterialIcons" style={appStyles.iconCallLeft} />
                  <Text note style={appStyles.textCall}>July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="videocam" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>

        <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Pevita Pearce</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-received" type="MaterialIcons" style={appStyles.iconCallLeft} />
                  <Text note style={appStyles.textCall}>July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="call" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>

        <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Syifa Hadju</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-received" type="MaterialIcons" style={appStyles.iconCallLeft} />
                  <Text note style={appStyles.textCall}>July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="videocam" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Rokib</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-received" type="MaterialIcons" style={appStyles.iconCallLeftReject} />
                  <Text note style={appStyles.textCall}>July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="call" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Hasanudin Ongki</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-received" type="MaterialIcons" style={appStyles.iconCallLeftReject} />
                  <Text note style={appStyles.textCall}>(5) July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="call" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>

          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')}
                  ></Thumbnail>
              </Left>
              <Body>
                  <Text>Herman</Text>
                  <View style={appStyles.viewCall}>
                  <Icon name="call-made" type="MaterialIcons" style={appStyles.iconCallLeftReject} />
                  <Text note style={appStyles.textCall}>July 9, 10:27 AM</Text>
                  </View>
              </Body>
              <Right>
              <Icon name="call" type="MaterialIcons" style={appStyles.iconCall} />
              </Right>
          </ListItem>
        </List>
        <Footer style={{height: 150}}>
          <FooterTab style={{backgroundColor: 'white'}}></FooterTab>
        </Footer>
        </Content>
        <Fab style={appStyles.fabColor}>
            <Icon name="phone-in-talk" type="MaterialIcons" />
        </Fab>
      </Container>
    );
  }
}