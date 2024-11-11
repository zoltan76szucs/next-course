import React from "react";

import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({name}: {name : string}) => {
  return (
    <Html>
      <Preview>Welcome on borat</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://index.hu">index page</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
