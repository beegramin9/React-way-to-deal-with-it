import React from 'react';
import {Button, Event, Validation, ValidationRef} from '../components';

type Props = {}

export function Main({}: Props) {
  return (
    <div>
        <Event/>
        <Button/>
        <Validation/>
        <ValidationRef/>
    </div>
  )
}