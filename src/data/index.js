const seeds = {
  tomato: {
    name:'西红柿',
    value:'tomato',
    season: [0],
    days: 5,
    gains: 3,
    water: 1
  },
  strawberry :{
    name:'草莓',
    season:[0,3],
    days:15,
    gains:3,
    water:1
  }
};

const enemy = {
  slime:{
    name:'史莱姆',
    value:'slime',
    place:['cityAround','greenPlain'],
    hp:10,
    attack:2,
    defend:0,
    items:[{
      name:'史莱姆粘液',
      value:'slime'
    }]
  }
}
