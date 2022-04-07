import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './Products.module.scss'

function PricingRange(props) {

    const { setPricingRange } = props

    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([0, 1000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPricingRange(newValue)
    };

    const formatCashVND = (total) => {
        return ('' + total).split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    return (
        <div className={`${styles.pricingRange}`}>
            <Box sx={{ width: 300 }} className={`${styles.pricingRange}`}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    min={0}
                    max={1000000}
                    step={50000}
                    color="success"
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <div className={`${styles.valueRange}`}>
                <span>
                    {formatCashVND(value[0])}<sup>đ</sup>
                </span>
                -
                <span>
                    {formatCashVND(value[1])}<sup>đ</sup>
                </span>
            </div>
        </div>
    );
}

export default PricingRange;