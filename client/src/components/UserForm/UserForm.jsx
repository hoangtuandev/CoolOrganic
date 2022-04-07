import { React } from 'react';
import Login from './Login';
import Register from './Register';

function UserForm(props) {

    return (
        <div>
            <Register></Register>
            <Login></Login>
        </div>
    );
}

export default UserForm;