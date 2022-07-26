import { useState, useEffect } from 'react';
import './modal.css';
import Card from '../card/Card';
import bitcoin from '../../assets/crypto/bitcoin.png';
import ethereum from '../../assets/crypto/ethereum.png';
import tether from '../../assets/crypto/tether.png';
import riple from '../../assets/crypto/riple.png';
import dogecoin from '../../assets/crypto/dogecoin.png';
import binance from '../../assets/crypto/binance.png';
import matic from '../../assets/crypto/matic.png';
import tron from '../../assets/crypto/tron.png';
import data from '../../../data';

const Modal = ({setModal, cards}) => {
    const [ par, setPar ] = useState({ 
        par1: {id : null, status: false, name: ''},
        par2: {id: null, status: false, name: ''}
    });
    const [dataCards, setDataCards] = useState([]);

    const [ matches, setMatches] = useState(0);

    useEffect(() => {
        reset();
    }, []);

    const handleEnd = async () => {
        setMatches(0);
        reset();
    }  

    const rand = (max, min) =>  Math.random() * (max - min) + min;

    const reset = () => { 
        let dataArray = [];
        data.map( d => {
            //la propiedad status a false
            d.status = false;
            let numRand = Math.round(rand(1, 16));  
            if(dataArray.length === 16) return;
            while(dataArray.map(card => card.id).includes(numRand)){
                numRand = Math.round(rand(1, 16));
            }
            dataArray.push(data[numRand - 1]);
        })
        setDataCards(dataArray);
        setPar({ 
            par1: {id : null, status: false, name: ''},
            par2: {id: null, status: false, name: ''}
        });
      }

    const crypto = {
        'bitcoin': { name: bitcoin },
        'ethereum': { name: ethereum },
        'tether': { name: tether },
        'riple': { name: riple },
        'dogecoin': { name: dogecoin },
        'binance': { name: binance },
        'matic': { name: matic },
        'tron': { name: tron},
    }
    
    return ( 
        <div className="modal-content">
            <div className="modal">
                <div className="modal-header">Memoriza los pares 😁</div>
                <div className="hr"></div>
                <div className="modal-score">
                    <div className='score-movie'>
                        <span>Total de movimientos</span>
                        <span className='score-points'>{matches}</span>
                    </div>
                </div>
                <div className="modal-body">
                    {dataCards.length > 0 && (
                        dataCards.map( d => (
                            <Card key={d.id} data={d} setPar={setPar} par={par} setMatches={setMatches} matches={matches} picture={crypto[d.name.toLowerCase()].name}/>
                        ))
                    )}
                </div>
                <div className="modal-footer">
                    <button onClick={() => handleEnd()}>
                        Reiniciar Juego
                    </button>
                    <button onClick={ () => { handleEnd(); setModal(false); }}>
                        Terminar Juego
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;