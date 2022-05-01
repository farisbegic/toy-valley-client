export enum CategoryName{
  action_figures = 'action_figures',
  arts_and_crafts = 'arts_and_crafts',
  building_and_construction = 'building_and_construction',
  dolls = 'dolls',
  vehicles = 'vehicles',
  electronic = 'electronic',
  educational = 'educational',
  games_and_puzzles = 'games_and_puzzles',
  infant_toys = 'infant_toys',
  musical_instruments = 'musical_instruments',
  outdoor_seasonal_toys = 'outdoor_seasonal_toys',
  other = 'other',
}

export const CategoryNameMapping = {
  [CategoryName.action_figures]: {
    label: 'Action Figures',
    value : CategoryName.action_figures,
  },
  [CategoryName.arts_and_crafts]: {
    label: 'Arts and Crafts',
    value : CategoryName.arts_and_crafts,
  },
  [CategoryName.building_and_construction]: {
    label: 'Building and Construction',
    value : CategoryName.building_and_construction,
  },
  [CategoryName.dolls]: {
    label: 'Dolls',
    value : CategoryName.dolls,
  },
  [CategoryName.vehicles]: {
    label: 'Vehicles',
    value : CategoryName.vehicles,
  },
  [CategoryName.electronic]: {
    label: 'Electronic',
    value : CategoryName.electronic,
  },
  [CategoryName.educational]: {
    label: 'Educational',
    value : CategoryName.educational,
  },
  [CategoryName.games_and_puzzles]: {
    label: 'Games and Puzzles',
    value : CategoryName.games_and_puzzles,
  },
  [CategoryName.infant_toys]: {
    label: 'Infant Toys',
    value : CategoryName.infant_toys,
  },
  [CategoryName.musical_instruments]: {
    label: 'Musical Instruments',
    value : CategoryName.musical_instruments,
  },
  [CategoryName.outdoor_seasonal_toys]: {
    label: 'Outdoor Seasonal Toys',
    value : CategoryName.outdoor_seasonal_toys,
  },
  [CategoryName.other]: {
    label: 'Other',
    value : CategoryName.other,
  },
}
