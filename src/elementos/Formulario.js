import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const colores = {
    borde: "#0075FF",
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
    text-align: left;

    ${props => props.valido === 'false' && css`
        color: ${colores.error};
    `}
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
        border: 2px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 2px solid transparent;
    `}
    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    text-align: right;
    display: none;

    ${props => props.valido === 'true' && css`
        display: none;
    `}
    ${props => props.valido === 'false' && css`
        display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 30%;
    z-index: 100;
    font-size: 100%;
    opacity: 0;
    ${props => props.valido === 'false' && css`
        opacity: 1;
        color: ${colores.error};
    `}
    ${props => props.valido === 'true' && css`
        opacity: 1;
        color: ${colores.exito};
    `}
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