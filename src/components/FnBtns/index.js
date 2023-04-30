import React from 'react';
import './Btn.css';

export const EyeBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`eyeBtn ${props.className !== undefined ? props.className : ''}`}
            style={props.style !== undefined ? props.style :  {}}
            >
                <i className="fad fa-eye" aria-hidden="true"></i>
        </button>
    )
} 
export const BanBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`banBtn ${props.className !== undefined ? props.className : ''}`}
            style={props.style !== undefined ? props.style :  {}}
            >
                <i className="fad fa-ban" aria-hidden="true"></i>
        </button>
    )
} 

export const UnBanBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`unBanBtn ${props.className !== undefined ? props.className : ''}`}
            style={props.style !== undefined ? props.style :  {}}
            >
                <i className="fas fa-check" aria-hidden="true"></i>
        </button>
    )
}

export const EditBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`EditBtn ${props.className !== undefined ? props.className : null}`}

            style={props.style !== undefined ? props.style :  null}
            >
            <i className="fas fa-edit"></i>
        </button>
    )
} 


export const RemoveBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`RemoveBtn ${props.className !== undefined ? props.className : null}`}
            style={props.style !== undefined ? props.style :  null}
            >
                <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
    )
} 


export const AddBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`AddBtn ${props.className !== undefined ? props.className : null}`}

            style={props.style !== undefined ? props.style :  null}
            >
            <i className="fa fa-plus" aria-hidden="true" ></i>
        </button>
    )
} 


export const CopyBtn = (props) => {
    return(
        <button 
            onClick={props.onClick} 
            className={`CopyBtn ${props.className !== undefined ? props.className : null}`}

            style={props.style !== undefined ? props.style :  null}
            >
            <i className="fas fa-copy" aria-hidden="true" ></i>
        </button>
    )
} 
