import React, { useEffect, useState } from 'react';
import proyectos from './data/proyectos.json';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(proyectos);
  }, []);

  const total = data.length;
  const finalizados = data.filter(p => p.estado === 'Finalizado').length;
  const enRiesgo = data.filter(p => p.estado_semanal === 'En riesgo').length;
  const promedioAvance = total > 0 ? (data.reduce((sum, p) => sum + (p.avance_real || 0), 0) / total).toFixed(1) : 0;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>ProjectTracker360</h1>
      <p>Dashboard básico de seguimiento de proyectos</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div><strong>Total proyectos:</strong> {total}</div>
        <div><strong>% Finalizados:</strong> {(finalizados / total * 100).toFixed(1)}%</div>
        <div><strong>Avance promedio:</strong> {promedioAvance}%</div>
        <div><strong>En riesgo:</strong> {enRiesgo}</div>
      </div>
      <table border="1" cellPadding="5" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Tipología</th><th>Estado</th><th>Fase</th><th>Avance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i}>
              <td>{p.id_clarity}</td>
              <td>{p.nombre}</td>
              <td>{p.tipologia}</td>
              <td>{p.estado}</td>
              <td>{p.fase}</td>
              <td>{p.avance_real}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;