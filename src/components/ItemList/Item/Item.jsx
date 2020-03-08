import React from "react";
import {
    TableCell,
    TableRow,
    IconButton
} from '@material-ui/core';
import {
    PlayCircleOutline,
    MusicNote,
    Delete,
    Visibility,
    Edit
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const ItemList = props => {

    const {
        id,
        type, 
        title, 
        author, 
        views,
        index,
        deleteItem
    } = props;

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell>
            { type === 'video' ? <PlayCircleOutline /> : <MusicNote /> }
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{author}</TableCell>
            <TableCell>{views}</TableCell>
            <TableCell>
                <Link to={`/item/${id}`}>
                    <IconButton color="primary">
                        <Visibility style={{ color: 'blue' }} />
                    </IconButton>
                </Link>
                <IconButton color="primary">
                    <Edit style={{ color: 'orange' }} />
                </IconButton>
                <IconButton color="primary" onClick={deleteItem}>
                    <Delete style={{ color: 'red' }} />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default ItemList;