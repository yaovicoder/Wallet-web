import React from "react";
import styled from "styled-components";

//COMPONENTS
import TabsBuilder from "Components/Tabs";

// PAGE
import Account from "./Account";
// import Backup from "./Backup/backup";
// import Rescue from "./Rescue/rescue";

const Container = styled.div`
  padding: 50px 100px;
  width: 90%;
`;

const tabTitle = [
	'User data',
  'Notification',
  'Account'
]

class Configuration extends React.Component {

  render() {
    return (
      <Container>
        <TabsBuilder tabTitle={tabTitle} tabContent={['UserData', 'Notifications', <Account />]}/>
      </Container>
    );
  }
}

export default Configuration;
