import { iIconType, iTypeColor } from '@/@types';
import bug from '../assets/icons/bug.svg';
import dark from '../assets/icons/dark.svg';
import dragon from '../assets/icons/dragon.svg';
import electric from '../assets/icons/electric.svg';
import fairy from '../assets/icons/fairy.svg';
import fighting from '../assets/icons/fighting.svg';
import fire from '../assets/icons/fire.svg';
import flying from '../assets/icons/flying.svg';
import ghost from '../assets/icons/ghost.svg';
import grass from '../assets/icons/grass.svg';
import ground from '../assets/icons/ground.svg';
import ice from '../assets/icons/ice.svg';
import normal from '../assets/icons/normal.svg';
import poison from '../assets/icons/poison.svg';
import psychic from '../assets/icons/psychic.svg';
import rock from '../assets/icons/rock.svg';
import steel from '../assets/icons/steel.svg';
import water from '../assets/icons/water.svg';

export const typesColor: iTypeColor[] = [
  { type: 'normal', color: '#A8A77A' },
  { type: 'fire', color: '#EE8130' },
  { type: 'water', color: '#6390F0' },
  { type: 'electric', color: '#F7D02C' },
  { type: 'grass', color: '#7AC74C' },
  { type: 'ice', color: '#74b9ff' },
  { type: 'fighting', color: '#C22E28' },
  { type: 'poison', color: '#A33EA1' },
  { type: 'ground', color: '#E2BF65' },
  { type: 'flying', color: '#A98FF3' },
  { type: 'psychic', color: '#F95587' },
  { type: 'bug', color: '#A6B91A' },
  { type: 'rock', color: '#B6A136' },
  { type: 'ghost', color: '#735797' },
  { type: 'dragon', color: '#6F35FC' },
  { type: 'dark', color: '#705746' },
  { type: 'steel', color: '#B7B7CE' },
  { type: 'fairy', color: '#D685AD' },
];

export const IconType: iIconType[] = [
  { type: 'bug', icon: bug },
  { type: 'dark', icon: dark },
  { type: 'dragon', icon: dragon },
  { type: 'electric', icon: electric },
  { type: 'fairy', icon: fairy },
  { type: 'fighting', icon: fighting },
  { type: 'fire', icon: fire },
  { type: 'flying', icon: flying },
  { type: 'ghost', icon: ghost },
  { type: 'grass', icon: grass },
  { type: 'ground', icon: ground },
  { type: 'ice', icon: ice },
  { type: 'normal', icon: normal },
  { type: 'poison', icon: poison },
  { type: 'psychic', icon: psychic },
  { type: 'rock', icon: rock },
  { type: 'steel', icon: steel },
  { type: 'water', icon: water },
];
