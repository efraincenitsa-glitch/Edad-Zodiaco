function zodiacoChino(anio){
  const a=[
    {nombre:"Rata",emoji:"🐭"},{nombre:"Buey",emoji:"🐮"},
    {nombre:"Tigre",emoji:"🐯"},{nombre:"Conejo",emoji:"🐰"},
    {nombre:"Dragón",emoji:"🐲"},{nombre:"Serpiente",emoji:"🐍"},
    {nombre:"Caballo",emoji:"🐴"},{nombre:"Cabra",emoji:"🐐"},
    {nombre:"Mono",emoji:"🐵"},{nombre:"Gallo",emoji:"🐔"},
    {nombre:"Perro",emoji:"🐶"},{nombre:"Cerdo",emoji:"🐷"}
  ];
  return a[(anio-1900+1200)%12];
}

function edadYMDD(n,h=new Date()){
  let y=h.getFullYear()-n.getFullYear();
  let m=h.getMonth()-n.getMonth();
  let d=h.getDate()-n.getDate();
  if(d<0){m--;d+=new Date(h.getFullYear(),h.getMonth(),0).getDate()}
  if(m<0){y--;m+=12}
  return{y,m,d};
}

function signoZodiacal(d,m){
  const s=[
    ["Capricornio","♑",19,1],["Acuario","♒",18,2],
    ["Piscis","♓",20,3],["Aries","♈",19,4],
    ["Tauro","♉",20,5],["Géminis","♊",20,6],
    ["Cáncer","♋",22,7],["Leo","♌",22,8],
    ["Virgo","♍",22,9],["Libra","♎",22,10],
    ["Escorpio","♏",21,11],["Sagitario","♐",21,12]
  ];
  for(const [n,e,dd,mm] of s)
    if(m<mm||m===mm&&d<=dd) return{nombre:n,emoji:e};
  return{nombre:"Capricornio",emoji:"♑"};
}

function diasParaCumple(d,m){
  const h=new Date();
  let p=new Date(h.getFullYear(),m-1,d);
  if(p<h)p.setFullYear(h.getFullYear()+1);
  return Math.ceil((p-h)/(1000*60*60*24));
}

function faseLunar(d,m,a){
  const f=new Date(a,m-1,d);
  const b=new Date(2000,0,6);
  const c=29.53058867;
  const x=((f-b)/(1000*60*60*24))%c;
  const p=(x+c)%c;
  if(p<1.8)return{nombre:"Luna Nueva",emoji:"🌑"};
  if(p<5.5)return{nombre:"Creciente",emoji:"🌒"};
  if(p<9.2)return{nombre:"Cuarto Creciente",emoji:"🌓"};
  if(p<12.9)return{nombre:"Gibosa Creciente",emoji:"🌔"};
  if(p<16.6)return{nombre:"Luna Llena",emoji:"🌕"};
  if(p<20.3)return{nombre:"Gibosa Menguante",emoji:"🌖"};
  if(p<24)return{nombre:"Cuarto Menguante",emoji:"🌗"};
  return{nombre:"Menguante",emoji:"🌘"};
}

document.getElementById("form").addEventListener("submit",e=>{
  e.preventDefault();
  const n=document.getElementById("nombre").value.trim();
  const d=+dia.value,m=+mes.value,a=+anio.value;
  const msg=mensaje,out=salida;
  if(!d||!m||!a){
    msg.innerHTML='<span class="error">Completa todos los campos</span>';
    out.hidden=true;return;
  }
  const f=new Date(a,m-1,d);
  if(f>new Date()){
    msg.innerHTML='<span class="error">La fecha no puede ser futura</span>';
    out.hidden=true;return;
  }

  const edad=edadYMDD(f);
  const occ=signoZodiacal(d,m);
  const chi=zodiacoChino(a);
  const luna=faseLunar(d,m,a);
  const faltan=diasParaCumple(d,m);

  saludo.innerHTML=n?`Hola <strong>${n}</strong> 👋`:"Resultado:";
  edad.innerHTML=`🎂 Tienes <strong>${edad.y}</strong> años, <strong>${edad.m}</strong> meses y <strong>${edad.d}</strong> días.`;
  occidental.innerHTML=`<span class="badge">${occ.emoji}</span> Zodiaco occidental: <strong>${occ.nombre}</strong>`;
  chin.innerHTML=`<span class="badge">${chi.emoji}</span> Zodiaco chino: <strong>${chi.nombre}</strong>`;
  lunaEl.innerHTML=`<span class="badge">${luna.emoji}</span> Fase lunar: <strong>${luna.nombre}</strong>`;
  cumple.innerHTML=`🎉 Faltan <strong>${faltan}</strong> días para tu próximo cumpleaños`;

  msg.innerHTML=""; out.hidden=false;
});

const lunaEl = document.getElementById("luna");
