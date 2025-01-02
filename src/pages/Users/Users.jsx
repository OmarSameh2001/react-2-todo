import { useEffect, useState } from "react";
import Usercard from "../../components/UserCard/UserCard";
import UserSearch from "../../components/UserSearch/UserSearch";

function Users() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        try {
            const response = await fetch('/assets/users.json');
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.error(err.message);
        }
    }

    function handleSearch(email) {
        const filteredUsers = users.filter((user) => user.email.includes(email));
        if (filteredUsers.length === 0) {
            alert('No users found');
            return
        }
        setUsers(filteredUsers);
    }
    function handleReset() {
        fetchUsers();
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.length > 0 && (
                <div className="mt-5">
                    <h1>Users</h1>
                    <UserSearch handleSearch={handleSearch} handleReset={handleReset}/>
                    <div className="card-group d-flex justify-content-center align-items-center">
                        {users ? users.map((user) => (
                            <Usercard user={user} />
                        )) : <p>No users found</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Users;
