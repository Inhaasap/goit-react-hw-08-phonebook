import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: teal;
  &.active {
    color: gray;
  }
`;

export const AuthNav = () => {
  return (
    <Flex align="center" gap="15px">
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Flex>
  );
};
