
import { totaleVerkopen } from './productsSold.js'
import originalStock from './originalStock.js';
// vraag 1e   HOEVEEL MOETEN ER NOG VERKOCHT WORDEN

export const toBeSold = originalStock - totaleVerkopen;

