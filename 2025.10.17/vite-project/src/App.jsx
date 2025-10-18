import Mural from "./components/Mural"
import './App.css'

function App(){
  const alunos = [
    {id: 1, nome: "Ana", idade: 20, foto: "https://i.pravatar.cc/150?img=1", cor: "ciano"},
    {id: 2, nome: "Bruno", idade: 3, foto: "https://i.pravatar.cc/150?img=2", cor: "marrom"},
    {id: 3, nome: "Carlos", idade: 21, foto: "https://i.pravatar.cc/150?img=3", cor: "rosa"},
    {id: 4, nome: "Diego", idade: 8, foto: "https://i.pravatar.cc/150?img=4", cor: "verde"},
    {id: 5, nome: "Fernanda", idade: 19, foto: "https://i.pravatar.cc/150?img=5", cor: "amarelo"},
    {id: 6, nome: "Joao", idade: 49, foto: "https://i.pravatar.cc/150?img=6", cor: "roxo"},
    {id: 6, nome: "Roberto", idade: 28, foto: "https://i.pravatar.cc/150?img=7", cor: "preto"},
    {id: 6, nome: "Luciano", idade: 32, foto: "https://i.pravatar.cc/150?img=8", cor: "vermeho"},
    {id: 6, nome: "Rafaela", idade: 21, foto: "https://i.pravatar.cc/150?img=9", cor: "azul"}
  ];

  return (
    <div className="App">
      <h1>Mural da Turma</h1>
      <Mural alunos={alunos} />
    </div>
  );
}

export default App