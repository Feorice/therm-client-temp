import React from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PowerOffIcon from '@material-ui/icons/PowerOffOutlined';
import AcIcon from '@material-ui/icons/AcUnit';
import HeatIcon from '@material-ui/icons/WhatshotOutlined';

const ThermostatToggle = () => {
  const [alignment, setAlignment] = React.useState('off');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Grid container direction='row' alignItems='center' justify='flex-start'>
      <Grid item>
        <ToggleButtonGroup
          size='large'
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value='ac'>
            <AcIcon />
          </ToggleButton>
          <ToggleButton value='off'>
            <PowerOffIcon />
          </ToggleButton>
          <ToggleButton value='heat'>
            <HeatIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default ThermostatToggle;