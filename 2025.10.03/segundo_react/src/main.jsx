import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrimeiroComp from './components/PrimeiroComp.jsx'
import Mensagem from './components/Mensagem.jsx'
import MensagemProps from './components/MensagemProps.jsx'
import Contador from './components/Contador.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PrimeiroComp />
    <Mensagem titulo ="Olá Cauan!" subtitulo="Esse é um exemple de props no React" />
    <MensagemProps titulo="Olá Cauan!" subtitulo="React" />
    <MensagemProps titulo="Projeto em React" subtitulo="Turma Noite" />
    <Contador title="Primeiro Contador" />
    <br></br>
    <Contador title="Segundo contador" />
    <br></br>
    <Contador title="Terceiro contador" />
  </StrictMode>,
)
