import React from 'react';
import {Button, Event, Validation, ScrollBoxRef, ScssComponent} from '../components';

type Props = {}

export function Main({}: Props) {
  return (
    <div>
        <Event/>
        <Button/>
        <Validation/>
        <ScrollBoxRef/>
        <ScssComponent/>
    </div>
  )
}