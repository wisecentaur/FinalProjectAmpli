import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './card.scss'


interface IProps {
children?:React.ReactNode;
class?:string;
}


export default function Card(this: any, props:IProps) {
    return (

    <div className={'card '+props.class}>
        {props.children} 
    </div>  
    )
}