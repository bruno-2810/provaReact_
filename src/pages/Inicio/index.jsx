import { useState } from 'react';
import './styles.scss';
import Card from '../../components/card';

export default function Inicio() {

    const [titulo, setTitulo] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [status, setStatus] = useState('')
    const [afazeres, setAfazeres] = useState([])

    function adicionarAfazer() {
        let objeto = {
            titulo: titulo,
            periodo: periodo,
            status: status,
            corFundo: ''
        }

        if (titulo != '' && periodo != '' && status != '') {
            if (status == 's') {
                objeto.corFundo = '#a3b18a'
                setAfazeres([...afazeres, objeto])
                setTitulo('')
                setPeriodo('')
                setStatus('')
            }
            else {
                objeto.corFundo = '#e63946'
                setAfazeres([...afazeres, objeto])
                setTitulo('')
                setPeriodo('')
                setStatus('')
            }
        }
    }

    function enter (e) {
        if (e.key == 'Enter') {
            adicionarAfazer()
        }
    }

    return (
        <div className='pagina-inicio'>
            <h1>Inicio</h1>

            <input className='campo' placeholder='Informe o titulo' onKeyUp={enter} value={titulo} onChange={e => setTitulo(e.target.value)} />
            <input className='campo' placeholder='Informe o periodo' onKeyUp={enter} value={periodo} onChange={e => setPeriodo(e.target.value)} />
            <input className='campo' placeholder='Informe o status' onKeyUp={enter} value={status} onChange={e => setStatus(e.target.value)} />
            <button onClick={adicionarAfazer}>Adicionar a fazer</button>

            {afazeres.map((item, pos) =>
                <div>
                    <Card titulo={item.titulo} periodo={item.periodo} cor={item.corFundo} />
                </div>
            )}
        </div>
    );
}
