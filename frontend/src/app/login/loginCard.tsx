import { Card, CardContent, CardHeader, Box, Tabs, Tab } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import RegisterUser from './registerUser';
import LoginUser from './loginUser';
import TabPanel from './TabPanel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LoginCard = () => {
  const [isRegistering, setisRegistering] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setisRegistering(newValue);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 1000,
          minWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#ffb6c1',
        }}
      >
        <CardHeader
          title="Login to your user"
          subheader="Register a new user if you need"
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={isRegistering}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={isRegistering} index={0}>
            <LoginUser />
          </TabPanel>
          <TabPanel value={isRegistering} index={1}>
            <RegisterUser />
          </TabPanel>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginCard;
