import React from 'react';
import {Button, Event, Validation} from '../components';

type Props = {}

export function Main({}: Props) {
  return (
    <div>
        <Event/>
        <Button/>
        <Validation/>
    </div>
  )
}