export interface iIconType {
  type: string;
  icon: string;
}
export interface iPokemon {
  num: number;
  hp: number;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  types: string[];
}

export interface iApi {
  count: number;
  next: string | null;
  previous: string | null;
  results: iPokemon[];
}

export interface iTypeColor {
  type: string;
  color: string;
}

export interface iPokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  species: iSpeciesResponse;
  stats: iStats[];
  types: iTypes[];
  moves: iMoves[];
  abilities: iAbility[];
}

export interface iAbility {
  ability: { name: string; url: string };
  is_hidden: boolean;
}

export interface iStats {
  base_stat: number;
  effort: number;
  stat: iStat;
}

export interface iStat {
  name: string;
  url: string;
}

export interface iTypes {
  slot: number;
  type: iType;
}
export interface iType {
  name: string;
  url: string;
}

export interface iMoves {
  move: iMove;
}

export interface iMove {
  name: string;
  url: string;
}

export interface iSpeciesResponse {
  base_happiness: number;
  capture_rate: number;
  evolution_chain: EvolutionChain;
  evolves_from_species: iEvolvesFromSpecies;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  order: number;
  shape: Shape;
  varieties: iVariety[];
}

export interface EvolutionChain {
  url: string;
}
export interface iEvolvesFromSpecies {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface iVariety {
  is_default: boolean;
  pokemon: iPokemonVariety;
}

export interface Shape {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface iPokemonVariety {
  name: string;
  url: string;
}

export interface iEvolutionResponse {
  chain: iChainEvolution;
  id: number;
}
export interface iChainEvolution {
  evolves_to: iEvolvesTo[];
  is_baby: boolean;
  species: iSpecies;
}
export interface iEvolvesTo {
  evolves_to: iEvolvesTo[];
  is_baby: boolean;
  species: iSpecies;
}
export interface iSpecies {
  name: string;
  url: string;
}

