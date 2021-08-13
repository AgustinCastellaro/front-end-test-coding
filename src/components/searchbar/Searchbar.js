import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { useHistory } from 'react-router';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Alert from '../alert/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../sass/searchbar/searchbar.scss";

function Searchbar() {
    const [searchValue, setSearchValue] = useState("");
    let errorMessage;
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue.length)

        //Si la palabra a buscar es noloro
        if(searchValue == "noloro"){
            errorMessage = "Palabra invalida";
            render( <Alert message={errorMessage} /> )
        }else{
            //Si la cantidad de caracteres es menor a 4
            if(searchValue.length < 4){
                errorMessage = "Deben ser mas de 4 caracteres";
                render( <Alert message={errorMessage} /> )
            }else{
                history.push("/?search=" + searchValue);
            }
        }
    }
    
    return (
        <div className="searchbar">
            <form action="" onSubmit={handleSubmit}>
                <InputGroup className="mb-3 searchbar">
                    <FormControl 
                        aria-describedby="basic-addon2" 
                        placeholder="Search movies..." 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                    <Button type="submit" variant="success" id="button-addon2">Search</Button>
                </InputGroup>
            </form>
        </div>
    )
}

export default Searchbar
