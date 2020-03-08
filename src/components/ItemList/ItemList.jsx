import React, { useContext } from 'react';
import { 
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import Item from './Item/Item';
import { AppContext } from '../../context';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ItemList = () => {

    const appContext = useContext(AppContext);
    const classes = useStyles();

    const renderItems = () => {
        if(appContext.items.length > 0){
            return appContext.items.map((item, index) => (
                <Item 
                    key={item.id}
                    index={index}
                    { ...item }
                    deleteItem={() => appContext.deleteItem(item.id)}
                />
            ));
        }
        else{
            return (
                <TableRow>
                    <TableCell colSpan={5} style={{padding: '15px', textAlign: 'center'}}><strong>There is no item</strong></TableCell>
                </TableRow>
            )
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="items table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Views</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        renderItems()
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ItemList;
