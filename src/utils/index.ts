import { iTypeColor } from '@/@types';
import { typesColor } from '@/constants';

export const GetTypeColor = (type: string): string => {
  let typeColor: iTypeColor | undefined = typesColor.find(
    (t) => t.type === type
  );
  return typeColor ? typeColor.color : typesColor[0].color;
};
