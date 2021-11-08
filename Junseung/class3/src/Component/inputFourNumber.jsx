import { Button, TextField } from '@mui/material';
import React, { memo } from 'react';

function InputFourNumber(props){
    const {inputChangeEvent, inputSubmitEvent} = props;
    
    return (
        <div className = "inputNumber">
            <form onSubmit = {inputSubmitEvent}>
                <TextField
                    className = "txtField"
                    helperText="4자리 숫자를 입력하세요"
                    id="demo-helper-text-aligned"
                    label="Number"
                    onChange = {inputChangeEvent}
                />
                <Button
                    className = "submitBtn"
                    variant="contained" 
                    type = "submit"
                >
                    제출
                </Button>
            </form>
        </div>
    )
}

export default memo(InputFourNumber);