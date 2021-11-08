import React, { memo } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function InputResult(props){
    const { inputResult } = props;

    if (inputResult.length === 0) return null

    return (
        <div className = "inputResult">
            <div className = "tries">총 시도횟수 : {inputResult.length}</div>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>시도</TableCell>
                        <TableCell align="center">strike</TableCell>
                        <TableCell align="center">ball</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        inputResult.map((resultItem, idx) => {
                            return (
                                <TableRow key = {idx}>
                                    <TableCell>{resultItem.tries}</TableCell>
                                    <TableCell align="center">{resultItem.strike}</TableCell>
                                    <TableCell align="center">{resultItem.ball}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default memo(InputResult);