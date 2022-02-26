import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

export const PriceRanger = () => {

// Our States
const [value, setValue] = React.useState([1,100]);

// Changing State when volume increases/decreases
const rangeSelector = (event, newValue) => {
	setValue(newValue);
	console.log(newValue)
};

return (
	<div style={{
	margin: 'auto',
	display: 'block',
	width: 'fit-content'
	}}>
	{/* <h3></h3> */}
	<Typography id="range-slider" gutterBottom>
		Select Price Range:
	</Typography>
	<Slider
		value={value}
		onChange={rangeSelector}
		valueLabelDisplay="auto"
	/>
Min :{value[0]} - Max :{value[100]}
	</div>
);
}
