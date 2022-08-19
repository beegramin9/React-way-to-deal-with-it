import React, { useState, ReactComponentElement } from 'react'
type TodoInsertType = {
    children: ReactComponentElement
}

const SELECT_TAB = {
    STAKING: 'STAKING',
    UNSTAKING: 'UNSTAKING',
  } as const;
type SELECT_TAB = typeof SELECT_TAB[keyof typeof SELECT_TAB];
  
      
export function TodoInsert({children}: TodoInsertType) {
    const [tab, selectTab] = useState<SELECT_TAB>(SELECT_TAB.STAKING);

  return (
    <div className='TodoTemplate'>
        
    </div>
  )
}