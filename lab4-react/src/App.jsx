import { useState } from 'react';
import Card from './Card';

// Exercitiul 4: Array de proiecte
const projects = [
  { title: 'Portofoliu Personal',  description: 'Pagina personala cu HTML si CSS',    tech: 'HTML · CSS'             },
  { title: 'Pagina Interactiva',   description: 'Formulare si DOM manipulation',       tech: 'JavaScript · DOM'       },
  { title: 'Array Lab',            description: 'Metode array si fetch din JSON',      tech: 'JS · Fetch API'         },
  { title: 'Dashboard React',      description: 'Componente, props si state',          tech: 'React · Vite'           },
  { title: 'Weather App',          description: 'Date meteo in timp real',             tech: 'React · OpenWeather'    },
];

// Exercitiul 1: Componenta App
function App() {
  // Exercitiul 5: useState pentru contor
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard">

      {/* ── Header (Ex. 1) ── */}
      <header className="dashboard-header">
        <h1>Dragos Andrei<br /><em>Filip</em></h1>
        <p>Student · <Calculatoare>Calculatoare</Calculatoare> · Anul II — Dashboard React</p>
      </header>

      {/* ── Proiecte (Ex. 2, 3, 4) ── */}
      <section className="dashboard-section">
        <div className="section-label">— 01 / Proiecte</div>
        <h2>Proiectele mele</h2>
        <div className="cards-grid">
          {projects.map(function(item, index) {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                tech={item.tech}
              />
            );
          })}
        </div>
      </section>

      {/* ── Contor (Ex. 5, 6) ── */}
      <section className="dashboard-section">
        <div className="section-label">— 02 / Interactivitate</div>
        <h2>Contor cu useState</h2>
        <div className="counter-block">
          <div>
            <div className="counter-display">{count}</div>
            <div className="counter-label">apăsări</div>
          </div>
          <div className="counter-controls">
            {/* Exercitiul 5: buton +1 */}
            <button className="btn btn-accent" onClick={() => setCount(count + 1)}>
              + Incrementează
            </button>
            {/* Exercitiul 6 bonus: buton -1 */}
            <button className="btn" onClick={() => setCount(count - 1)}>
              − Decrementează
            </button>
            {/* Exercitiul 6 bonus: buton Reset */}
            <button className="btn btn-muted" onClick={() => setCount(0)}>
              ↺ Reset
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
