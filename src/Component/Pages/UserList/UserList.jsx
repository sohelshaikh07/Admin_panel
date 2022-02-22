import './userList.css'
import { rows } from '../../../DummyData'
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function UserList() {

    const [data, setData] = useState(rows);
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'avatar', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={`${params.row.avatar}`} alt="sfd" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'userName', headerName: 'User Name', width: 200, sortable: true, },
        {
            field: 'email',
            headerName: 'Email address',
            width: 200,
            sortable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: true,
            width: 160,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            sortable: true,
            width: 160,
        },
        {
            field: "actions",
            headerName: 'Actions',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit"><Edit /></button>
                        </Link>

                        <Delete className="userListDelete" onClick={() => setData(data.filter(item =>item.id!==params.row.id))}/>
                    </>
                )
            }
        }
    ];



    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default UserList;
