import React from 'react';

// importa o Title de styled
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Aluno() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get();
    }
  }, []);
  return (
    <Container>
      <h1>Aluno</h1>
    </Container>
  );
}
