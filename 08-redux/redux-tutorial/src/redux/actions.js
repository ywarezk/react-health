/**

action = { type: 'DEPOSIT', payload: 10}


 */
 
import { createAction } from '@reduxjs/toolkit';

export const deposit = createAction('DEPOSIT');