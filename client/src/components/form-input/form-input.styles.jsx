import styled, {css} from 'styled-components';

const subColor = '#c4c2c2';
const mainColor = '#807d7d';

const ShrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupContainer = styled.div`
    position: relative;
    display: flex;
    input[type='password'] {
        letter-spacing: 0.3em;
    }
    input[type='number']::-webkit-inner-spin-button, 
    input[type='number']::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`;

export const FormInputLabel = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 1%;
    top: 1em;
    transition: 300ms ease all;

    &.shrink {
        ${ShrinkLabelStyles};
    }
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: "black";
    font-size: 18px;
    padding: 1% 1% 1% 1%;
    display: block;
    width: 100%;
    height: 2em;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 5px 10px #00000029;
    margin-bottom: 25px;
    &:focus {
        outline: none;
    }

    &:focus ~ .label {
        ${ShrinkLabelStyles};
    }
`;

export const FormTextAreaContainer = styled.textarea`
    background: none;
    background-color: white;
    color: "black";
    font-size: 18px;
    padding: 1% 1% 1% 1%;
    display: block;
    width: 65em;
    height: 13em;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 5px 10px #00000029;
    resize: none;
    margin-bottom: 2em;
    outline: none;
    &:focus ~ .label {
        ${ShrinkLabelStyles};
    }
`;