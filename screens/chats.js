import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Title, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Left, 
    Right, 
    Body, 
    Icon, 
    Text, 
    Thumbnail,
    ListItem,
    Badge,
    Fab,
    List
    } from 'native-base';
import appStyles from '../appStyles';
export default class ChatScreen extends Component {
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
                  <Text note>Kamu lagi apa yang</Text>
              </Body>
              <Right>
                  <Text note style={{color: "#25D366"}}>
                      3:43 pm
                    </Text>
                  <Badge style={appStyles.badgeChats}>
                      <Text style={appStyles.badgeTextChats}>1</Text>
                  </Badge>
              </Right>
          </ListItem>
          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} />
              </Left>
              <Body>
                  <Text>Hasanudin Ongki</Text>
                  <Text note>Je, ana mau bayar utang nih</Text>
              </Body>
              <Right>
                  <Text note style={{color: "#25D366"}}>
                      3:43 pm
                    </Text>
                  <Badge style={appStyles.badgeChats}>
                      <Text style={appStyles.badgeTextChats}>1</Text>
                  </Badge>
              </Right>
          </ListItem>
          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} />
              </Left>
              <Body>
                  <Text>Herman</Text>
                  <Text note>Ngopi nich</Text>
              </Body>
              <Right>
                  <Text note style={{color: "#25D366"}}>
                      3:43 pm
                    </Text>
                  <Badge style={appStyles.badgeChats}>
                      <Text style={appStyles.badgeTextChats}>1</Text>
                  </Badge>
              </Right>
          </ListItem>
          <ListItem avatar noBorder>
              <Left>
                  <Thumbnail
                    source={require('../assets/image/1.jpg')} />
              </Left>
              <Body>
                  <Text>Syifa Hadju</Text>
                  <Text note>Kamu jangan lupa makan yah</Text>
              </Body>
              <Right>
                  <Text note style={{color: "#25D366"}}>
                      3:43 pm
                    </Text>
                  <Badge style={appStyles.badgeChats}>
                      <Text style={appStyles.badgeTextChats}>3</Text>
                  </Badge>
              </Right>
          </ListItem>
        </List>
          <Footer style={{height: 150}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button full>
              <Text style={appStyles.footerContent}>Archived (4)</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Content>
        <Fab style={appStyles.fabColor}>
            <Icon name="chat" type="MaterialIcons" />
        </Fab>
      </Container>
    );
  }
}