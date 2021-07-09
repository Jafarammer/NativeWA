import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, Tab, Tabs, ScrollableTab, TabHeading, Badge } from 'native-base';
import { StatusBar } from 'react-native';
import appStyles from './appStyles';
import ChatScreen from './screens/chats';
import StatusScreen from './screens/status';
import CallScreen from './screens/call';
export default class App extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
     StatusBar.setBackgroundColor('#128C7E');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
           <Body>
             <Title style={appStyles.appTitle}>WhatsApp</Title>
           </Body>
           <Right>
             <Button transparent>
               <Icon type="MaterialIcons" name="search" />
             </Button>
             <Button transparent>
               <Icon type="MaterialIcons" name="more-vert" />
             </Button>
           </Right>
         </Header>
         <Tabs
         renderTabBar={()=> <ScrollableTab />}
          initialPage={1}
          tabContainerStyle={{elevation: 1}} 
          tabBarBackgroundColor="#075E54"
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}>
          <Tab heading={
                 <TabHeading style={{backgroundColor: '#075E54'}}>
                   <Icon name="photo-camera" type="MaterialIcons" />
                 </TabHeading>
              }>
                <Text
                  style={{
                    textAlign: 'center',
                    flex: 1,
                    textAlignVertical: 'center',
                  }}>
                  Camera Screen
                </Text>
          </Tab>
          <Tab heading={
                 <TabHeading style={{backgroundColor: '#075E54'}}>
                   <Text style={appStyles.tabText}>CHATS</Text>
                   <Badge style={appStyles.badge}>
                     <Text style={appStyles.badgeText}>2</Text>
                   </Badge>
                 </TabHeading>
              }>
          <ChatScreen />
          </Tab>
          <Tab heading={
                 <TabHeading style={{backgroundColor: '#075E54'}}>
                   <Text style={appStyles.tabText}>STATUS</Text>
                 </TabHeading>
              }>
          <StatusScreen />
          </Tab>
          <Tab heading={
                 <TabHeading style={{backgroundColor: '#075E54'}}>
                   <Text style={appStyles.tabText}>CALLS</Text>
                 </TabHeading>
              }>
          <CallScreen />
          </Tab>
        </Tabs>
      </Container>        
    );
  }
}