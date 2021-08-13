import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import '../../sass/alert/alert.scss';

function Alert({ message }) {
    const [show, setShow] = useState(true)
    const toggleShow = () => setShow(!show);
    console.log(show)
    
    useEffect(() => {
        //Luego de 3 segundos. la notificacion desaparace.
        const timer = setTimeout(() => {
        setShow(!show);
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    
    return (
        <Toast className="alert p-0 bg-white" show={show} onClose={toggleShow} position="top-end">
            <Toast.Header>
                <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body className="body">{ message }</Toast.Body>
        </Toast>
    )
}

export default Alert
