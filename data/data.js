const MYTHOS_DATA = {
  works: [
    {id:'neon-gods',title:'Neon Gods',creatorId:'juan-perez',type:'Graphic Novel',genre:'Sci-Fi',tags:['Cyberpunk','Superhero'],price:4.99,rating:4.7,reviews:183,progress:82,status:'Ongoing',pages:86,description:'In a city where memories are currency, a courier discovers a god living inside a corrupted archive.',art:'cover-neon',featured:true},
    {id:'witch-club',title:'Witch Club',creatorId:'lua-ferreiro',type:'Comic',genre:'Fantasy',tags:['Comedy','Magic'],price:5.49,rating:4.5,reviews:91,progress:100,status:'Completed',pages:112,description:'Four incompetent witches discover that saving the world is mostly paperwork.',art:'cover-witch',featured:true},
    {id:'afterlight',title:'Afterlight',creatorId:'k-ito',type:'Manga',genre:'Fantasy',tags:['Drama','Adventure'],price:4.49,rating:4.6,reviews:74,progress:34,status:'Ongoing',pages:124,description:'When the sun stops setting, a courier travels through an endless afternoon.',art:'cover-after',featured:true},
    {id:'last-signal',title:'The Last Signal',creatorId:'alex-rivas',type:'Comic',genre:'Sci-Fi',tags:['Thriller','Mystery'],price:2.99,rating:4.3,reviews:58,progress:0,status:'Completed',pages:72,description:'A dead satellite sends one final message. Someone is still listening.',art:'cover-signal'},
    {id:'void',title:'VOID',creatorId:'mara-voss',type:'Graphic Novel',genre:'Horror',tags:['Mystery','Psychological'],price:3.99,rating:4.8,reviews:126,progress:0,status:'Completed',pages:98,description:'Something is knocking from the other side of the observatory wall.',art:'cover-void'},
    {id:'chrome-saints',title:'Chrome Saints',creatorId:'juan-perez',type:'Webcomic',genre:'Sci-Fi',tags:['Cyberpunk','Action'],price:0,rating:4.4,reviews:41,progress:0,status:'Ongoing',pages:44,description:'Street saints, illegal augmentations and one city that refuses to die.',art:'cover-chrome'},
    {id:'paper-dragons',title:'Paper Dragons',creatorId:'mei-tanaka',type:'Manga',genre:'Fantasy',tags:['Adventure','Drama'],price:6.99,rating:4.9,reviews:212,progress:0,status:'Ongoing',pages:156,description:'A quiet illustrator discovers that every dragon she draws wakes up at midnight.',art:'cover-paper'},
    {id:'dead-air',title:'Dead Air',creatorId:'alex-rivas',type:'Comic',genre:'Horror',tags:['Thriller','Radio'],price:1.99,rating:4.2,reviews:39,progress:0,status:'Completed',pages:64,description:'At 3:17 AM, every radio station begins broadcasting from tomorrow.',art:'cover-air'},
    {id:'witches-of-42',title:'Witches of 42',creatorId:'lua-ferreiro',type:'Webcomic',genre:'Comedy',tags:['Magic','Slice of Life'],price:0,rating:4.6,reviews:67,progress:0,status:'Ongoing',pages:38,description:'Magic is real. Unfortunately, so are rent payments.',art:'cover-42'},
    {id:'small-gods',title:'Small Gods',creatorId:'noah-vale',type:'Book',genre:'Fantasy',tags:['Mythology','Drama'],price:7.99,rating:4.7,reviews:103,progress:0,status:'Completed',pages:302,description:'The gods of forgotten things meet once every century to decide what survives.',art:'cover-gods'},
    {id:'orbit-fall',title:'Orbit Fall',creatorId:'sofia-kim',type:'Graphic Novel',genre:'Sci-Fi',tags:['Space','Drama'],price:8.99,rating:4.5,reviews:88,progress:0,status:'Completed',pages:180,description:'A generation ship reaches its destination and discovers it was already occupied.',art:'cover-orbit'},
    {id:'monster-manual',title:'Monster Manual Club',creatorId:'mara-voss',type:'Manga',genre:'Comedy',tags:['Monsters','School'],price:3.49,rating:4.1,reviews:28,progress:0,status:'Ongoing',pages:92,description:'The school club nobody wanted is secretly responsible for keeping monsters employed.',art:'cover-monster'}
  ],
  creators: [
    {id:'juan-perez',name:'Juan Pérez',handle:'@juanperez',bio:'Indie comic creator from Madrid. I draw neon cities and questionable gods.',followers:684,works:3,readers:1247,art:'avatar-juan'},
    {id:'lua-ferreiro',name:'Lúa Ferreiro',handle:'@luaferreiro',bio:'Galician witch, comic artist and paperwork survivor.',followers:512,works:2,readers:903,art:'avatar-lua'},
    {id:'mara-voss',name:'Mara Voss',handle:'@maravoss',bio:'I make stories about the things that knock after midnight.',followers:921,works:2,readers:1830,art:'avatar-mara'},
    {id:'k-ito',name:'K. Ito',handle:'@kito',bio:'Illustrator and manga creator exploring strange futures.',followers:348,works:1,readers:611,art:'avatar-k'},
    {id:'alex-rivas',name:'Álex Rivas',handle:'@alexrivas',bio:'Sci-fi, radio drama and monsters.',followers:274,works:2,readers:488,art:'avatar-alex'},
    {id:'mei-tanaka',name:'Mei Tanaka',handle:'@meitanaka',bio:'Illustrator of dragons, tiny gods and big feelings.',followers:1430,works:1,readers:2980,art:'avatar-mei'}
  ],
  users: [
    {id:'brais',name:'Brais',handle:'@brais',bio:'Creator, reader and professional nerd.',followers:284,following:91,level:12,xp:2480,achievements:7},
    {id:'laura',name:'Laura',handle:'@laurareads',bio:'Five stars are a love language.',followers:421,following:180},
    {id:'marta',name:'Marta',handle:'@martalists',bio:'Making lists instead of decisions.',followers:199,following:122},
    {id:'alex',name:'Alex',handle:'@alexx',bio:'Comics, coffee, repeat.',followers:143,following:77}
  ],
  reviews: [
    {id:1,user:'Brais',workId:'witch-club',rating:5,text:'Ridiculous in exactly the right way. I want twelve more chapters.',date:'2 days ago',likes:14},
    {id:2,user:'Laura',workId:'neon-gods',rating:5,text:'Cyberpunk, gods and a frankly irresponsible amount of neon.',date:'4 days ago',likes:31},
    {id:3,user:'Marta',workId:'void',rating:5,text:'I checked the hallway twice after reading this.',date:'1 week ago',likes:22},
    {id:4,user:'Alex',workId:'paper-dragons',rating:5,text:'Beautiful, weird and unexpectedly warm.',date:'1 week ago',likes:18},
    {id:5,user:'Brais',workId:'last-signal',rating:4,text:'The ending got me. The atmosphere got me more.',date:'2 weeks ago',likes:9}
  ],
  achievements: [
    {id:'first-chapter',title:'First Chapter',desc:'Read your first chapter.',icon:'✦',unlocked:true,progress:1,total:1},
    {id:'collector',title:'Collector',desc:'Own 10 works.',icon:'◆',unlocked:false,progress:4,total:10},
    {id:'bookworm',title:'Bookworm',desc:'Finish 5 works.',icon:'◈',unlocked:true,progress:5,total:5},
    {id:'critic',title:'Critic',desc:'Write 10 reviews.',icon:'✎',unlocked:true,progress:10,total:10},
    {id:'creator',title:'Creator',desc:'Publish your first work.',icon:'✚',unlocked:false,progress:0,total:1},
    {id:'mythmaker',title:'Mythmaker',desc:'Reach 100 readers.',icon:'★',unlocked:false,progress:34,total:100}
  ],
  activities: [
    {user:'Brais',action:'finished',workId:'neon-gods',time:'2 min ago'},
    {user:'Laura',action:'rated',workId:'witch-club',time:'18 min ago'},
    {user:'Juan Pérez',action:'published',workId:'chrome-saints',time:'1 hour ago'},
    {user:'Marta',action:'added',workId:'void',time:'3 hours ago'},
    {user:'Alex',action:'followed',creatorId:'juan-perez',time:'5 hours ago'}
  ],
  collections: [
    {id:'cyberpunk',title:'My Cyberpunk Collection',description:'Neon, chrome and questionable decisions.',count:3},
    {id:'sanderson',title:'Brandon Sanderson',description:'Cosmere shelf.',count:8},
    {id:'reads-2026',title:'Read in 2026',description:'Stories finished this year.',count:5},
    {id:'horror',title:'Horror',description:'Things I probably should not read at night.',count:7}
  ]
};
