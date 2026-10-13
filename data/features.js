const ACHIEVEMENTS_PLUS=[
{id:'first-read',icon:'📖',title:'Primera página',desc:'Empieza tu primera obra.',xp:25,unlocked:true},
{id:'collector',icon:'🏛️',title:'Coleccionista',desc:'Añade 5 obras a tu biblioteca.',xp:100,unlocked:true},
{id:'completionist',icon:'🏁',title:'Hasta el final',desc:'Termina una obra.',xp:75,unlocked:true},
{id:'critic',icon:'✍️',title:'Voz propia',desc:'Escribe 5 reseñas.',xp:120,unlocked:false},
{id:'explorer',icon:'🧭',title:'Cartógrafo',desc:'Descubre 10 géneros.',xp:150,unlocked:false},
{id:'fan',icon:'♥',title:'Fan declarado',desc:'Sigue a 5 creadores.',xp:100,unlocked:false},
{id:'lore',icon:'◇',title:'Cazador de lore',desc:'Desbloquea 10 extras.',xp:175,unlocked:false},
{id:'curator',icon:'▦',title:'Curador',desc:'Crea 3 colecciones.',xp:100,unlocked:false},
{id:'secret',icon:'★',title:'No debías encontrar esto',desc:'Descubre un contenido secreto.',xp:250,unlocked:false}
];
const COLLECTIBLES=[
{id:'neon-cover',workId:'neon-gods',type:'Portada',title:'Dioses de neón · Edición 01',rarity:'Raro',unlock:'Compra la obra',icon:'▣'},
{id:'neon-pin',workId:'neon-gods',type:'Pin',title:'Pin del Dios Corrupto',rarity:'Épico',unlock:'Termina la obra',icon:'◆'},
{id:'witch-card',workId:'witch-club',type:'Carta',title:'Las cuatro brujas',rarity:'Común',unlock:'Compra la obra',icon:'♠'},
{id:'afterlight-sketch',workId:'afterlight',type:'Boceto',title:'Diseño original de la mensajera',rarity:'Raro',unlock:'Llega al 50%',icon:'✎'},
{id:'void-tape',workId:'void',type:'Archivo',title:'Grabación 03:17',rarity:'Legendario',unlock:'Termina la obra',icon:'◉'},
{id:'signal-badge',workId:'last-signal',type:'Insignia',title:'La última transmisión',rarity:'Épico',unlock:'Termina la obra',icon:'◌'},
{id:'paper-dragon',workId:'paper-dragons',type:'Figura',title:'Dragón de papel',rarity:'Raro',unlock:'Compra la obra',icon:'♢'},
{id:'apocalypse-ticket',workId:'tiny-apocalypse',type:'Entrada',title:'Viernes del fin del mundo',rarity:'Común',unlock:'Lee la obra',icon:'▤'}
];
const WORK_EXTRAS={
'neon-gods':{soundtrack:['Neon Rain','Chrome Cathedral','After Midnight','Last Transmission'],notes:4,art:12,deleted:2,characters:['Kira Voss','Marcus Vale','El Dios Corrupto'],lore:7},
'witch-club':{soundtrack:['Caldero en llamas','Formulario 42','Una escoba rota'],notes:3,art:18,deleted:1,characters:['Lua','Mara','Inés','Vera'],lore:5},
'afterlight':{soundtrack:['Eternal Afternoon','The Long Road'],notes:2,art:9,deleted:1,characters:['Aiko'],lore:4}
};
const CREATOR_ANALYTICS={
'neon-gods':{buyers:683,started:642,completion:57,abandon:43,avgMinutes:74,shares:91,favorites:214,notes:86,heat:[100,98,94,91,86,79,73,68,64,57]},
'witch-club':{buyers:412,started:398,completion:71,abandon:29,avgMinutes:91,shares:66,favorites:187,notes:52,heat:[100,99,96,93,90,87,81,76,71,68]},
'afterlight':{buyers:301,started:287,completion:49,abandon:51,avgMinutes:63,shares:48,favorites:121,notes:31,heat:[100,96,91,83,76,68,61,55,51,49]}
};
