import { FlavorTextEntry, iIconType, iTypeColor } from '@/@types';
import { IconType, typesColor } from '@/constants';

export const GetTypeColor = (type: string): string => {
  let typeColor: iTypeColor | undefined = typesColor.find(
    (t) => t.type === type
  );
  return typeColor ? typeColor.color : typesColor[0].color;
};

export const IconImage = (TypeName: string): string => {
  let iconType: iIconType | undefined = IconType.find(
    (t) => t.type === TypeName
  );
  return iconType ? iconType.icon : IconType[0].icon;
};

export const GetNumberPokemon = (n: number, totalZeros: number): string => {
  return `#${String(n).padStart(totalZeros, '0')}`;
};

export const hex2rgb = (
  hex: string
): { r: number; g: number; b: number } | null => {
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const result = hexRegex.exec(hex);
  if (!result) {
    return null;
  }

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return { r, g, b };
};

export const GetPokemonText = (value: FlavorTextEntry[]): string => {
  let text = value.filter((text) => text.language.name === 'en')[0].flavor_text;
  return text;
};
