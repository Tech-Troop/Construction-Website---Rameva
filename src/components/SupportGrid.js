import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
import {
  AccountCircle,
  Security,
  BugReport,
  HelpOutline,
} from '@mui/icons-material';

// Theme colors for consistency
const colors = {
  backgroundDark: '#111',
  backgroundLight: '#222',
  textLight: '#f1f1f1',
  accent: '#ffcc00',
};

const Container = styled.div`
  padding: 50px;
  background-color: ${colors.backgroundDark};
  width: 60%;
  margin: 0 auto;
`;

const StyledGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${colors.backgroundLight};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: ${colors.textLight};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
  color: ${colors.accent};
`;

const ServiceName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.textLight};
`;

const services = [
  { name: 'Getting Started', icon: <AccountCircle />, link: '/getting-started' },
  { name: 'Book an Appointment', icon: <CalendarMonthIcon />, link: '/howtobookanAppointment' },
  { name: 'Privacy & Security', icon: <Security />, link: '/privacy-security' },
  { name: 'Become a Partner', icon: <HandshakeIcon />, link: '/becomeaPartner' },
  { name: 'Troubleshooting', icon: <BugReport />, link: '/troubleshooting' },
  { name: 'Advanced Features', icon: <HelpOutline />, link: '/advanced-features' },
];

const SupportGrid = () => (
  <Container>
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <a href={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledGridItem>
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceName>{service.name}</ServiceName>
            </StyledGridItem>
          </a>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default SupportGrid;
