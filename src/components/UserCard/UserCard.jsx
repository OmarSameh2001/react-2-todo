function Usercard (props) {
    const { user } = props;
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={user.id}>
            <div className="card m-3" style={{ minWidth: "25vw" }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {user.firstName} {user.lastName}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Username: {user.username}</p>
                    <p className="card-text">State: {user.address.state}</p>
                    <span className="badge" style={{ backgroundColor: user.role === "admin" ? "green" : user.role === "moderator" ? "#e8e800" : "red" }}>{user.role}</span>
                </div>
            </div>
        </div>

    );
}

export default Usercard