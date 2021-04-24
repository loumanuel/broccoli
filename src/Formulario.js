import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const colores = {
    borde: "#495464",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;

`;

const Input = styled.input`
    width: 100%;
    background: rgba(59, 59, 59, 0.15);
    opacity: 0.4;
    border-radius: 3px;
    height: 40px;
    line-height: 45px;
    padding: 0 35px 0 10px;
    transition: .3s ease all;
    border: 1px solid transparent;
    &:focus{
        border: 0.1px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;
    
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 30%;
    z-index: 100;
    font-size: 100%%;
    /* opacity: 0; */
`;

const MensajeExito = styled.p`
font-size: 14px;
color: ${colores.exito};
display: none;
`;

const MensajeError = styled.p`
    height: 40px;
    line-height: 40px;
    background: #F66060;
    padding: opx 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
    }
    b{
        margin-left: 1.2%;
    }
`;

export {Formulario,
        Label,
        GrupoInput,
        Input,
        LeyendaError,
        MensajeExito,
        MensajeError,
        IconoValidacion
    };