export interface IBeer {
  abv: number,
  attenuation_level: number,
  boil_volume: {
    unit: string,
    value: number
  },
  brewers_tips: string, // Поради пивоварів
  contributed_by: string,
  description: string,
  ebc: number, // колір European Brewery Convention
  first_brewed: string,
  food_pairing: string[],
  ibu: number, // гіркота International Bitterness Units
  id: number,
  image_url: string,
  ingredients: {
    hops: IHops[],
    malt: IMalt[],
    yeast: string
  },
  method: {
    fermentation: {
      temp: {
        unit: string
        value: number
      }
    },
    mash_temp: IMashTemp[],
    twist: null
  },
  name: string,
  ph: number, // лужність, гіркота?
  srm: number, // колір Standard Reference Method
  tagline: string,
  target_fg: number,
  target_og: number,
  volume: {
    unit: string,
    value: number
  }
}

//Хміль
export interface IHops {
  add: string,
  amount: {
    unit: string,
    value: number
  },
  attribute: string,
  name: string
}

//Солод
export interface IMalt {
  amount: {
    unit: string,
    value: number
  },
  name: string
}

interface IMashTemp {
  temp: {
    unit: string,
    value: number
  },
  duration: number
}