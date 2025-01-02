import { useState } from "react";

function UserSearch(props) {

    const [searchTerm, setSearchTerm] = useState('');

    const { handleSearch, handleReset } = props;
    function reset () {
        console.log('reset');
        setSearchTerm('');
        handleReset();
    }
    return (
    <div className="d-flex justify-content-center align-items-center gap-1">
        <div class="input-group" style={{ width: "fit-content" }}>
            <span className="input-group-text" id="basic-addon1">Email</span>
            <input type="text" className="form-control" placeholder="Please type user email" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} aria-label="Please type user email" aria-describedby="basic-addon1"/>
        </div>
        <button className="btn btn-primary" onClick={() => handleSearch(searchTerm)}>Search</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
    </div>
    );
}

export default UserSearch;