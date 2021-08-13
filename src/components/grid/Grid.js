import React, { useState, useEffect }  from 'react';
import { get } from '../../hook/httpUsers';
import Item from './Item';
import { SearchQuery } from '../../hook/searchQuery';
import '../../sass/grid/grid.scss';

function Grid() {
    const [users, setusers] = useState([]);
    
    const query = SearchQuery();
    const search = query.get("search");
    
    useEffect(() => {
        //Llama a la funcion get para realizar la peticion.
        get("users", search).then(data => setusers(data.items));
    }, [search])

    if(search == null){
        //Si NO se realiza ninguna busqueda
        return(
            <p className="startMessage">
                Search users with the Github API :)
            </p>
        )
    }else{
        //Si se realiza una busqueda
        return (
            <div className="grid">
                {users.map((user) => (
                    <Item key={user.id} image={user.avatar_url} name={user.login} id={user.id} />
                ))}
            </div>
        )
    }

}

export default Grid
