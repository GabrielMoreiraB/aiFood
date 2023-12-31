import { useEffect, useState } from 'react';
import IRestaurante from '../../../interfaces/IRestaurante';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import axios from 'axios';

const AdmRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(()=> {
    axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
    .then(resp => setRestaurantes(resp.data))
  },[])
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante =><TableRow key={restaurante.id}>
            <TableCell>{restaurante.nome}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdmRestaurantes;
