import { useState, useEffect } from 'react';
import './card.css';
import logo from '../../assets/logo.png';

const Card = ({data, par, setPar, matches, setMatches, picture}) => {

    const [ flip, setFlip ] = useState(false);
    
    useEffect(() => {
        if(par.par2.status){
            comparePar();
            setMatches(matches + 1)
        }
    }, [par]);

    const closeFlip = () => {
        if(data.status == false){
            setFlip(false);
        }
    }

    const comparePar = () => {
        
            const time = setTimeout(() => {
                if(par.par1.name != par.par2.name) {
                    if(par.par1.id == data.id || par.par2.id == data.id){
                        data.status = false;
                    }
                }
                // if(par.par1.name === par.par2.name){
                    
                // }
                setPar({ 
                    par1: { id: null, status: false, name: ''},
                    par2: { id: null, status: false, name: ''}
                });
                closeFlip();
            }, 1500);
            
        
    }

    const handleClick = () => {
        if(!par.par1.status || !par.par2.status && !data.status){
            data.status = true;
            setFlip(true);
            if(par.par1.name === '') setPar( { ...par, par1: { id: data.id, status: true, name: data.name} });
            if(par.par1.name != '') setPar( { ...par, par2: { id: data.id, status: true, name: data.name} });
        }
    }
 
    return ( 
        <div className={data.status ? "card card-selected" : "card"} onClick={() => handleClick()}>
            <div className="card-base">{!flip && <img className='img' src={logo} />}</div>
            <div className='card-back'>{flip && <img src={picture} title={data.name} />}</div>
        </div>
     );
}
 
export default Card;