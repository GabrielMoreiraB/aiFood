import { TextField, Button } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';

const FormularioRestaurante = () => {
    const[nomeRestaurante, setNomeRestaurante] = useState('')
    const aoSubmeterForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/v2/restaurantes/`, {
            nome:nomeRestaurante
        })
        .then(()=> {
            alert('Restaurante cadastrado com sucesso')
        })
    }
    return ( 
        <form onSubmit={aoSubmeterForm}>
            <TextField 
            id="standard-basic" 
            label="Nome do Restaurante" 
            variant="standard" 
            value={nomeRestaurante}
            onChange={ e => setNomeRestaurante(e.target.value)}
            />
            <Button type='submit' variant="outlined">Outlined</Button>
        </form>
     );
}
 
export default FormularioRestaurante;