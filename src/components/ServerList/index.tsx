import React from 'react';

 import { Container, Separator } from './styles';

 import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={4} />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton mentions={99}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={109} />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
    </Container>

    
  );
}

export default ServerList;