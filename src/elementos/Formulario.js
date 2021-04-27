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

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    input{
        margin-right: 10px;
    }
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    @media(max-width: 800px){
        grid-column: span 1;
    }
`;

const Boton = styled.button`
    height: 50px;
    line-height: 45px;
    width: 170px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    font-size:20px;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
`;

const MensajeExito = styled.p`
font-size: 14px;
color: ${colores.exito};
/* display: none; */
`;

const FooterAll = styled.div`
background-color: #fff;
    color: #000;
    padding: 2em;
    /* display: flex; */
    /* flex-direction:column; */
    margin-top: auto;
`;

const MensajeError = styled.div`
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;
    p {
        margin: 0;
    }
    b{
        margin-left: 1.2%;
    }
    @media(max-width: 800px){
        grid-column: span 1;
    }
    @media(max-width: 550px){
        grid-column: span 1;
        font-size: 85%;
    }
    @media(max-width: 500px){
        grid-column: span 1;
        font-size: 80%;
    }
    @media(max-width: 450px){
        grid-column: span 1;
        font-size: 75%;
    }
    @media(max-width: 400px){
        grid-column: span 1;
        font-size: 70%;
    }
    @media(max-width: 375px){
        grid-column: span 1;
        font-size: 65%;
        padding: 0px 10px;
    }
    @media(max-width: 350px){
        grid-column: span 1;
        font-size: 60%;
        padding: 0px 10px;
    }
    @media(max-width: 325px){
        grid-column: span 1;
        font-size: 50%;
        padding: 0px 10px;
    }
    @media(max-width: 300px){
        grid-column: span 1;
        font-size: 50%;
        padding: 0px 10px;
    }
    @media(max-width: 275px){
        grid-column: span 1;
        font-size: 45%;
        padding: 0px 10px;
    }
    @media(max-width: 260px){
        grid-column: span 1;
        font-size: 40%;
        padding: 0px 10px;
    }
    @media(max-width: 250px){
        grid-column: span 1;
        font-size: 35%;
        padding: 0px 10px;
    }
    @media(max-width: 235px){
        grid-column: span 1;
        font-size: 30%;
        padding: 0px 5px;
    }
`;

const Divide = styled.div`
    display: inline-block;
    /* grid-template-columns: 1fr 1fr; */
    width: 50%;
    padding-top: 3%;
    @media (max-width: 800px){
        /* grid-template-columns: 1fr; */
        width: 90%;
        padding-top: 3%;
    }
    @media (max-width: 600px){
        /* grid-template-columns: 1fr; */
        width: 90%;
        padding-top: 4%;
    }
`;

export {Formulario,
        Label,
        GrupoInput,
        Input,
        LeyendaError,
        MensajeExito,
        MensajeError,
        IconoValidacion,
        ContenedorBotonCentrado,
        Boton,
        ContenedorTerminos,
        FooterAll,
        Divide
    };