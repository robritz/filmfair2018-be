const categories = {
  humanPortraitColor: 'Human Portrait, Color',
  humanPortraitBW: 'Human Portrait, B/W',
  animalPortraitColor: 'Animal Portrait, Color',
  animalPortraitBW: 'Animal Portrait, B/W',
  archColor: 'Architecture, Color',
  archBW: 'Architecture, B/W',
  urbanColor: 'Urban Landscape, Color',
  urbanBW: 'Urban Landscape, B/W',
  natureColor: 'Nature Landscape, Color',
  natureBW: 'Nature Landscape, B/W',
  storyboardColor: 'Storyboard, Color',
  storyboardBW: 'Storyboard, B/W',
  creativeCrop: 'Creative Crop',
  creativeMoment: 'Creative In-The-Moment',
  creativeManipulation: 'Creative Photo Manipulation'
};

const cameraTypes = {
  pointShoot: 'Point & Shoot',
  slr: 'Single-Lens Reflex',
  tlr: 'Twin-Lens Reflex',
  rf: 'Rangefinder',
  instant: 'Instant',
  foldingBellows: 'Folding Bellows'
};

const cameras = [
  {
    name: 'Yashica Mat124G',
    category: categories.humanPortraitColor,
    data:{
      type: cameraTypes.tlr,
      film: '35mm Kodak TMax',
      iso: 400,
      lens: '80mm f3.5',
      age: '1970-1986'
    },
    feels:{
      joy: 3,
      ease: 2.5,
      uniqueness: 3,
      again: 3
    },
    notes: `Lorem ipsum dolor`
  },
  {
    name: 'Kodak Retina IIa',
    category: categories.archColor,
    data:{
      type: cameraTypes.foldingBellows,
      film: '35mm Kodak Portra',
      iso: 400,
      lens: '50mm f2',
      age: '1951-1954'
    },
    feels:{
      joy: 2,
      ease: 1.5,
      uniqueness: 3,
      again: 2
    },
    notes: `Lorem ipsum dolor`
  }
];

module.exports = cameras;
