const categories = {
  humanPortraitColor: 'Human Portrait, Color',
  humanPortraitBW: 'Human Portrait, B/W',
  animalPortraitColor: 'Animal Portrait, Color',
  animalPortraitBW: 'Animal Portrait, B/W',
  eventColor: 'Event, Color',
  eventBW: 'Event, B/W',
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
  vf: 'Viewfinder',
  instant: 'Instant',
  foldingBellows: 'Folding Bellows'
};

const cameras = [
  {
    id: 0,
    name: 'Yashica Mat124G',
    category: categories.humanPortraitColor,
    data:{
      type: cameraTypes.tlr,
      film: '120 Kodak Portra',
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
    images:[
      'yashica-camera.jpg',
      'portrait-color.jpg'
    ],
    notes: `I've often loved the idea of shooting on a Twin-Lens Reflex camera and have always heard great things about the Yashica Mat 125 G. It's very simple to use, fast, quiet and accurate. The interaction of looking down into a bright ground-glass viewfinder vs pointing a camera at a subject helps open the subject up a bit. And the waist-level composition is a great viewpoint. This one will stay in heavy rotation.`
  },
  {
    id: 1,
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
    images:[
      'retina-camera.jpg',
      'arch-color.jpg'
    ],
    notes: `I was really excited to shoot this camera. The build quality is amazing, it's built like a tiny tank. I was a little concerned with the zone-focus-only approach; something I've never played with before. I think I chose this camera for architecture as a bit of a safety net. I knew I could set the focus to infinity at f8 or f11 and still get the shot in focus. I really need to take this out for some street photography or a portrait shoot to better challenge my discomforts. Overall it's a very pleasant camera to use. It packs small, and although it's a bit heavy it's unobtrusive. The feel of opening the bellows and snapping everything into place is wonderful.`
  },
  {
    id: 2,
    name: 'Polaroid SX-70 (Color)',
    category: categories.storyboardColor,
    data:{
      type: cameraTypes.instant,
      film: 'Polaroid Originals SX-70 Color Instant Film',
      iso: 160,
      lens: 'Integrated 4-element 116mm f/8',
      age: '1972'
    },
    feels:{
      joy: 3,
      ease: 1.5,
      uniqueness: 3,
      again: 3
    },
    images:[
      'sx70-camera.jpg',
      'sbc-1.jpg',
      'sbc-2.jpg',
      'sbc-3.jpg',
      'sbc-4.jpg',
      'sbc-5.jpg'
    ],
    notes: `The SX-70 may be one of my all-time favorite cameras after this project. For a Polaroid, it is compact to carry and sets up quickly. The SLR nature of the camera is an absolute joy to use. I gave it a 1.5 on eas of use because of the exposure compensation. Once you get it figured out, it's easy to find the sweet spot each time. However, each film is different and there may be some differences between packs of film. Polaroid film is still pretty expensive, and I hate the idea of burning a print just to check exposure. The character of the film and unique experience of the camera makes it worth the effort. Personally, I preferred the black and white stock over the color.`
  },
  {
    id: 3,
    name: 'Polaroid SX-70 (B&W)',
    category: categories.storyboardBW,
    data:{
      type: cameraTypes.instant,
      film: 'Polaroid Originals SX-70 Black and White Instant Film',
      iso: 160,
      lens: 'Integrated 4-element 116mm f/8',
      age: '1972'
    },
    feels:{
      joy: 3,
      ease: 2,
      uniqueness: 3,
      again: 3
    },
    images:[
      'sx70-camera.jpg',
      'sbbw-1.jpg',
      'sbbw-2.jpg',
      'sbbw-3.jpg',
      'sbbw-4.jpg',
      'sbbw-5.jpg'
    ],
    notes: `I used the SX-70 for both color and black and white storyboards. While the feel of shooting is excellent regardless of the film being used, I really fell in love with shooting black and white on the SX-70. The film has a really dreamy quality to it. It's easier to nail down the exposure on this film as well. I have a feeling I'll be shooting almost exclusively black and white with this camera.`
  },
  {
    id: 4,
    name: 'Argus C4',
    category: categories.natureColor,
    data:{
      type: cameraTypes.rf,
      film: 'Fuji Superia',
      iso: 400,
      lens: 'Fixed Argus Cintar 35mm f2.8',
      age: `1950's`
    },
    feels:{
      joy: 2,
      ease: 1.5,
      uniqueness: 1,
      again: 1
    },
    images:[
      'argusc4-camera.jpg',
      'nature-color.jpg'
    ],
    notes: `This camera was really fun to use. I enjoyed the simplicity of it, the nature of hand-winding the film, and the ease of focus. I am fairly attached to the fact that this camera was manufactured in my home state of Michigan, which creates a bit of home-town nostalgia that I don't really have. I don't know that I would go out of my way to shoot on this camera again, though. It was fun but didn't really stand out as a regular use tool.`
  },
  {
    id: 5,
    name: 'Kodak No. 2 Folding Cartridge Hawk-eye - Model C.',
    category: categories.urbanBW,
    data:{
      type: cameraTypes.foldingBellows,
      film: 'Kodak TMax 120',
      iso: 400,
      lens: 'Multi-element Glass',
      age: `1926-1934`
    },
    feels:{
      joy: 2.5,
      ease: 1,
      uniqueness: 3,
      again: 2
    },
    images:[
      'hawkeye-camera.jpg',
      'urban-bw.jpg'
    ],
    notes: `I would recommend anyone pick up a camera from the 1920's and try shooting with it. Not only is it a blast, but it really reminds you that cameras are just pieces of glass sending some light onto some stuff that is sensitive to it. It's such a basic implementation of a camera that it helps ground the craft in the simplicity of it. It's a little bit of a challenge getting a hang of how the modern film ISO corresponds to the shutter speeds. After some research, I was able to shoot with it without a problem and came out with results that truly felt like they came from the 1920's.`
  },
  {
    id: 6,
    name: 'Nikon N5005',
    category: categories.eventBW,
    data:{
      type: cameraTypes.slr,
      film: 'Fuji Superia',
      iso: 400,
      lens: 'Nikon 50mm f1.8 D',
      age: `1991-1994`
    },
    feels:{
      joy: 1,
      ease: 2,
      uniqueness: 0.5,
      again: 0.5
    },
    images:[
      'nikon-camera.jpg',
      'event-color.jpg'
    ],
    notes: `This Nikon sort of bored me. It's big, bulky, noisy, and doesn't really provide any unique experience. In auto-focus, it got the shot, and that's all I needed it to do, I guess. It was an interesting tool to test drive but it won't be staying in my collection for long.`
  },
  {
    id: 7,
    name: 'Univex Mercury II',
    category: categories.archBW,
    data:{
      type: cameraTypes.vf,
      film: 'Kodak TMax',
      iso: 400,
      lens: 'Tricor 35mm f2.7',
      age: `1945`
    },
    feels:{
      joy: 2,
      ease: 1.5,
      uniqueness: 3,
      again: 2.5
    },
    images:[
      'mercury-camera.jpg',
      'arch-bw.jpg'
    ],
    notes: `When I first picked up the Mercury II, I thought it looked SO DORKY with that half circle chart sticking out of the top. I quickly learned that dorky fin has a purpose: this camera has a rotary shutter. I'm still unclear on how this shutter actually works, but it's such a departure from the shutter systems I'm used to that it holds a quirky appeal. Each photograph is a half a standard 35mm frame in a vertical format. With the right scanning and lenient project, one could stretch a roll of film much further than originally intended. I enjoyed the winding mechanism and the feeling of the rotary shutter very much. I'll probably take this one out again sometime soon.`
  },
  {
    id: 8,
    name: 'Minolta Weathermatic Dual35',
    category: categories.animalPortraitBW,
    data:{
      type: cameraTypes.pointShoot,
      film: 'Kodak TMax',
      iso: 400,
      lens: 'Integrated Dual 35mm f3.5 or 50mm f5.6',
      age: `1987`
    },
    feels:{
      joy: 1.5,
      ease: 3,
      uniqueness: 2.5,
      again: 2
    },
    images:[
      'weathermatic-camera.jpg',
      'animal-bw.jpg'
    ],
    notes: `Using a weatherproof camera to take photos of animals seemed like a fine idea. The Weathermatic is pretty fun to use and dead simple. I enjoyed switching between 35mm and 50mm, although I had a lot of missed focus. I'm unsure if that is related to any particular focal length. I'm excited to try this out in a true waterproof situation, like at a spray park or at a lake with the kids.`
  },
  {
    id: 9,
    name: 'Minolta XD11',
    category: categories.creativeMoment,
    data:{
      type: cameraTypes.slr,
      film: 'Kodak TMax',
      iso: 400,
      lens: 'Minolta Rokkor-PF 58mm f1.4',
      age: `1977`
    },
    feels:{
      joy: 2.5,
      ease: 3,
      uniqueness: 1,
      again: 3
    },
    images:[
      'xd11-camera.jpg',
      'creativemoment-bw.jpg'
    ],
    notes: `This camera comes with some family history. My father purchased this camera when he accidentally left his Yashica in an airport. When I was born, it was the camera he used to photograph his new son. When I got older, he tought me how to shoot on this camera. I used it in college to learn more professional techniques. So to say it's a joy to use is sort of a given. It's been a part of my family as long as I have, and it'll stay that way. But, if you're here for more than sentiment, the XD11 is one of the best bodies Minolta ever made. Pick one up if you have the chance.`
  },
  {
    id: 10,
    name: 'Canon Canonet QL17 G-III',
    category: categories.animalPortraitColor,
    data:{
      type: cameraTypes.rf,
      film: 'Fuji Superia',
      iso: 400,
      lens: 'Canon 40mm f1.7',
      age: `1972`
    },
    feels:{
      joy: 2,
      ease: 2,
      uniqueness: 1.5,
      again: 2
    },
    images:[
      'ql17-camera.jpg',
      'animal-color.jpg'
    ],
    notes: `This camera was on my list of must-have cameras for years. I think the lust may have overshadowed the actual experience. I really enjoy the rangefinder format. I think it makes taking photos more human, uncovering the photographer's face. They're often quiet and unobtrusive. I definitely think that was the case here. Perhaps photographing people would be a better use of this tool. For animals, I found it lackluster. I'll definitely be experimenting with it again.`
  },
  {
    id: 11,
    name: 'Canon AE-1 Program',
    category: categories.eventBW,
    data:{
      type: cameraTypes.slr,
      film: 'Kodak TMax',
      iso: 400,
      lens: 'Canon 24mm f2.8',
      age: `1981`
    },
    feels:{
      joy: 3,
      ease: 2,
      uniqueness: 1,
      again: 1
    },
    images:[
      'ae1-camera.jpg',
      'event-bw.jpg'
    ],
    notes: `The AE-1 lives up to it's reputation. It's a very comfortable camera to shoot. I really enjoyed the experience, and the 24mm focal length on 35mm film is really great. It's one of those bodies I forget I'm using, and I end up getting imersed in the scene. I may use this body again paired with the 24mm f2.8, but ultimately I'll be leaning on my XD11 for 35mm SLR shooting.`
  },
  {
    id: 12,
    name: 'Minolta Maxxum 5',
    category: categories.humanPortraitBW,
    data:{
      type: cameraTypes.slr,
      film: 'Kodak Tri-X',
      iso: 400,
      lens: 'Sigma 24mm f2.8',
      age: `2001`
    },
    feels:{
      joy: 3,
      ease: 1,
      uniqueness: 0.5,
      again: 3
    },
    images:[
      'maxxum5-camera.jpg',
      'portrait-bw.jpg'
    ],
    notes: `I first got excited about this body/lens setup when I realized how small the Maxxum 5 is. It's tiny. Like, nearly point-and-shoot tiny. The lure is the idea of shooting film stock I love on a camera that is simple to operate (i.e. autofocus) and very, very portable. Paired with the Sigma 24mm, it was an absolute joy to use. It did take some research to get it set up correctly, and I'm still learning how the autofocus points work. It's different. But the form factor is phenominal. I can't wait to take this little guy out again and shoot some film for fun.`
  },
  {
    id: 13,
    name: 'Minolta Maxxum 550si (Panoramic)',
    category: categories.creativeCrop,
    data:{
      type: cameraTypes.slr,
      film: 'Kodak Tri-X',
      iso: 400,
      lens: 'Sigma 28-80 f3.5-5.6',
      age: `1995`
    },
    feels:{
      joy: 1.5,
      ease: 2.5,
      uniqueness: 0.5,
      again: 0.5
    },
    images:[
      'maxxum550si-camera.jpg',
      'creativecrop.jpg'
    ],
    notes: `I dropped this camera in my bag for one reason: the panoramic cropping mode. I had a panoramic photograph to take, and the crop mode seemed like a great way to get there. It was really fun shooting in the panoramic mode and certainly helped frame the photos appropriately, instead of trying to imagine the crop. Otherwise, this setup wasn't very inspiring. The big plastic body was clunky and noisy to use. I don't think this one will be a regular in my bag.`
  },
  {
    id: 14,
    name: 'Minolta Maxxum 550si (Landscape)',
    category: categories.natureBW,
    data:{
      type: cameraTypes.slr,
      film: 'Kodak Tri-X',
      iso: 400,
      lens: 'Sigma 28-80 f3.5-5.6',
      age: `1995`
    },
    feels:{
      joy: 1.5,
      ease: 2.5,
      uniqueness: 0.5,
      again: 0.5
    },
    images:[
      'maxxum550si-camera.jpg',
      'nature-bw.jpg'
    ],
    notes: `This setup doubled up as my nature black and white option, mostly because I had it ready and available when the opportunity popped up. If there's one bit of advice I've always loved, it's this, "The best camera you have is the one you have on you." It got the photo, and for that I am grateful for its existence.`
  },
  {
    id: 15,
    name: 'Pentax IQZoom 835',
    category: categories.urbanColor,
    data:{
      type: cameraTypes.pointShoot,
      film: 'Fuji Superia',
      iso: 400,
      lens: 'Integrated 35mm-80mm set to 35mm',
      age: `1990-2005`
    },
    feels:{
      joy: 2.5,
      ease: 3,
      uniqueness: 1,
      again: 2
    },
    images:[
      'pentax-camera.jpg',
      'urban-color.jpg'
    ],
    notes: `I found this Pentax point-and-shoot at a local thrift store. I immediately threw some film in and carried it around for some casual shooting. I found myself in New York City for a job interview, and decided to take it along. It was a great, compact option for getting some film frames in. The ergonomics are super simple but very comfortable. I enjoyed shooting with it and will likely carry it around again as a quick black-and-white shooter.`
  }
];

module.exports = cameras;
