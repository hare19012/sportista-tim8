import React, {useEffect, useState} from "react";
import axios from "axios";
import DeleteConfirmationModalUser from "./DeleteConfirmationModalUser";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function UsersTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get(`http://127.0.0.1:8000/admin/users/getUsers/`)
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.error('Error fetching fields:', error);
            });
    }

    return (
        <div className="mt-5">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Email address</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.gender ? 'male' : 'female'}</TableCell>
                                <TableCell>{user.city}</TableCell>
                                <TableCell>
                                    <div>
                                        <Button variant="outlined">WARNING</Button>
                                        <DeleteConfirmationModalUser user_id={user.id} getU={getUsers}/>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UsersTable;