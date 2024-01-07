import { Card, CardContent, CardHeader, Box, Tabs, Tab } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import LoginUser from './loginUser';
import TabPanel from './tabPanel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LoginCard = () => {
  const [isRegistering, setisRegistering] = useState<0 | 1>(0);

  const handleChange = (_event: SyntheticEvent, newValue: 0 | 1) => {
    setisRegistering(newValue);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: '95%',
          minWidth: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#fce4ec',
        }}
      >
        <CardHeader
          title="Login to your user"
          subheader="Register a new user if you need"
        />
        <CardContent>
          <Box>
            <Tabs
              value={isRegistering}
              onChange={handleChange}
              aria-label="Tabs for login or registration"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={isRegistering} index={0}>
            <LoginUser newUser={false} />
          </TabPanel>
          <TabPanel value={isRegistering} index={1}>
            <LoginUser newUser={true} />
          </TabPanel>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginCard;
