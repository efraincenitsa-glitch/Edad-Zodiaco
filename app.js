// ==========================================
// ZODIACO PREMIUM PRO
// PARTE 1
// ==========================================

const SIGNOS = [
{
nombre:"Capricornio",
emoji:"♑",
inicio:[12,22],
fin:[1,19],
elemento:"🌎 Tierra",
planeta:"♄ Saturno",
color:"Marrón",
piedra:"Granate",
numero:8,
compat:["Tauro","Virgo","Escorpio"],
animal:"🐺 Lobo",
arbol:"🌲 Pino"
},
{
nombre:"Acuario",
emoji:"♒",
inicio:[1,20],
fin:[2,18],
elemento:"🌬️ Aire",
planeta:"♅ Urano",
color:"Azul eléctrico",
piedra:"Amatista",
numero:4,
compat:["Géminis","Libra","Sagitario"],
animal:"🦅 Águila",
arbol:"🌳 Cedro"
},
{
nombre:"Piscis",
emoji:"♓",
inicio:[2,19],
fin:[3,20],
elemento:"💧 Agua",
planeta:"♆ Neptuno",
color:"Turquesa",
piedra:"Aguamarina",
numero:7,
compat:["Cáncer","Escorpio","Capricornio"],
animal:"🐬 Delfín",
arbol:"🌴 Sauce"
},
{
nombre:"Aries",
emoji:"♈",
inicio:[3,21],
fin:[4,19],
elemento:"🔥 Fuego",
planeta:"♂ Marte",
color:"Rojo",
piedra:"Rubí",
numero:9,
compat:["Leo","Sagitario","Géminis"],
animal:"🦁 León",
arbol:"🌳 Roble"
},
{
nombre:"Tauro",
emoji:"♉",
inicio:[4,20],
fin:[5,20],
elemento:"🌎 Tierra",
planeta:"♀ Venus",
color:"Verde",
piedra:"Esmeralda",
numero:6,
compat:["Virgo","Capricornio","Cáncer"],
animal:"🐂 Toro",
arbol:"🌳 Encino"
},
{
nombre:"Géminis",
emoji:"♊",
inicio:[5,21],
fin:[6,20],
elemento:"🌬️ Aire",
planeta:"☿ Mercurio",
color:"Amarillo",
piedra:"Ágata",
numero:5,
compat:["Libra","Acuario","Aries"],
animal:"🦊 Zorro",
arbol:"🌳 Arce"
},
{
nombre:"Cáncer",
emoji:"♋",
inicio:[6,21],
fin:[7,22],
elemento:"💧 Agua",
planeta:"☾ Luna",
color:"Plata",
piedra:"Perla",
numero:2,
compat:["Piscis","Escorpio","Tauro"],
animal:"🦀 Cangrejo",
arbol:"🌳 Sauce"
},
{
nombre:"Leo",
emoji:"♌",
inicio:[7,23],
fin:[8,22],
elemento:"🔥 Fuego",
planeta:"☉ Sol",
color:"Dorado",
piedra:"Topacio",
numero:1,
compat:["Aries","Sagitario","Libra"],
animal:"🦁 León",
arbol:"🌳 Laurel"
},
{
nombre:"Virgo",
emoji:"♍",
inicio:[8,23],
fin:[9,22],
elemento:"🌎 Tierra",
planeta:"☿ Mercurio",
color:"Verde oliva",
piedra:"Jade",
numero:5,
compat:["Tauro","Capricornio","Cáncer"],
animal:"🦌 Ciervo",
arbol:"🌳 Olivo"
},
{
nombre:"Libra",
emoji:"♎",
inicio:[9,23],
fin:[10,22],
elemento:"🌬️ Aire",
planeta:"♀ Venus",
color:"Azul",
piedra:"Ópalo",
numero:6,
compat:["Géminis","Acuario","Leo"],
animal:"🦢 Cisne",
arbol:"🌳 Manzano"
},
{
nombre:"Escorpio",
emoji:"♏",
inicio:[10,23],
fin:[11,21],
elemento:"💧 Agua",
planeta:"♇ Plutón",
color:"Negro",
piedra:"Obsidiana",
numero:9,
compat:["Piscis","Cáncer","Virgo"],
animal:"🦂 Escorpión",
arbol:"🌳 Ciprés"
},
{
nombre:"Sagitario",
emoji:"♐",
inicio:[11,22],
fin:[12,21],
elemento:"🔥 Fuego",
planeta:"♃ Júpiter",
color:"Morado",
piedra:"Turquesa",
numero:3,
compat:["Aries","Leo","Acuario"],
animal:"🐎 Caballo",
arbol:"🌳 Fresno"
}
];

const ANIMALES_CHINOS = [
["Rata","🐭"],
["Buey","🐮"],
["Tigre","🐯"],
["Conejo","🐰"],
["Dragón","🐲"],
["Serpiente","🐍"],
["Caballo","🐴"],
["Cabra","🐐"],
["Mono","🐵"],
["Gallo","🐔"],
["Perro","🐶"],
["Cerdo","🐷"]
];

function obtenerSigno(d,m){

for(const s of SIGNOS){

const inicioMes=s.inicio[0];
const inicioDia=s.inicio[1];

const finMes=s.fin[0];
const finDia=s.fin[1];

if(
(m===inicioMes && d>=inicioDia) ||
(m===finMes && d<=finDia)
){
return s;
}

}

return SIGNOS[0];

}

function zodiacoChino(anio){
return ANIMALES_CHINOS[(anio-1900)%12];
}

function faseLunar(d,m,y){

const ciclo=2551443;

const ref=Date.UTC(1970,0,7,20,35)/1000;

const tiempo=Date.UTC(y,m-1,d)/1000;

const fase=(((tiempo-ref)%ciclo)+ciclo)%ciclo/ciclo;

const indice=Math.round(fase*8)%8;

const fases=[
["Luna Nueva","🌑"],
["Creciente","🌒"],
["Cuarto Creciente","🌓"],
["Gibosa Creciente","🌔"],
["Luna Llena","🌕"],
["Gibosa Menguante","🌖"],
["Cuarto Menguante","🌗"],
["Menguante","🌘"]
];

return fases[indice];

}

function obtenerEdadExacta(d,m,y){

const hoy=new Date();

let edad=hoy.getFullYear()-y;

if(
hoy.getMonth()+1<m ||
(hoy.getMonth()+1===m && hoy.getDate()<d)
){
edad--;
}

return edad;

}

function obtenerGeneracion(anio){

if(anio<=1945) return "Generación Silenciosa";

if(anio<=1964) return "Baby Boomer";

if(anio<=1980) return "Generación X";

if(anio<=1996) return "Millennial";

if(anio<=2012) return "Generación Z";

return "Generación Alpha";

}

function obtenerDiaNacimiento(d,m,y){

const dias=[
"Domingo",
"Lunes",
"Martes",
"Miércoles",
"Jueves",
"Viernes",
"Sábado"
];

return dias[new Date(y,m-1,d).getDay()];

}

function obtenerEstacion(m){

if(m===12 || m===1 || m===2)
return "❄️ Invierno";

if(m>=3 && m<=5)
return "🌸 Primavera";

if(m>=6 && m<=8)
return "☀️ Verano";

return "🍂 Otoño";

}

function diasVividos(d,m,y){

const nacimiento=new Date(y,m-1,d);

const ahora=new Date();

const diferencia=ahora-nacimiento;

return {

dias:Math.floor(diferencia/86400000),

horas:Math.floor(diferencia/3600000),

minutos:Math.floor(diferencia/60000)

};

}

function diasParaCumple(d,m){

const hoy=new Date();

let cumple=new Date(
hoy.getFullYear(),
m-1,
d
);

if(cumple<hoy){

cumple=new Date(
hoy.getFullYear()+1,
m-1,
d
);

}

return Math.ceil(
(cumple-hoy)/86400000
);

}

function mostrar(id){

const elemento =
document.getElementById(id);

if(elemento){
    elemento.classList.remove("hidden");
}

}

function guardarUltimoAnalisis(data){

localStorage.setItem(
"zodiacoPro",
JSON.stringify(data)
);

}

function restaurar(){

try{

    const data =
    localStorage.getItem(
        "zodiacoPro"
    );

    if(!data) return;

    const p =
    JSON.parse(data);

document.getElementById("nombre").value =
p.nombre || "";

document.getElementById("dia").value =
p.dia || "";

document.getElementById("mes").value =
p.mes || "";

document.getElementById("anio").value =
p.anio || "";

}catch(error){

    console.warn(
        "Error restaurando datos:",
        error
    );

}

}

function calcular(){

const nombreTxt=
document.getElementById("nombre").value.trim();

const diaN=
parseInt(document.getElementById("dia").value);

const mesN=
parseInt(document.getElementById("mes").value);

const anioN=
parseInt(document.getElementById("anio").value);

if(
    Number.isNaN(diaN) ||
    Number.isNaN(mesN) ||
    Number.isNaN(anioN)
){
    alert(
        "Completa todos los campos."
    );
    return;
}

if(
    !diaN ||
    !mesN ||
    !anioN ||
    diaN < 1 ||
    diaN > 31 ||
    mesN < 1 ||
    mesN > 12 ||
    anioN < 1900 ||
    anioN > 2100
){

    alert("Ingresa una fecha válida.");

    return;

}

const signo=
obtenerSigno(diaN,mesN);

const chino=
zodiacoChino(anioN);

const lunar=
faseLunar(diaN,mesN,anioN);

const edad=
obtenerEdadExacta(diaN,mesN,anioN);

const generacion=
obtenerGeneracion(anioN);

const diaNac=
obtenerDiaNacimiento(
diaN,
mesN,
anioN
);

const estacion=
obtenerEstacion(mesN);

const vividos=
diasVividos(
diaN,
mesN,
anioN
);

const faltan=
diasParaCumple(
diaN,
mesN
);

mostrar("resumenGeneral");
mostrar("datosPrincipales");
mostrar("signoOccidental");
mostrar("signoChino");
mostrar("faseLunar");
mostrar("estadisticas");

document.getElementById(
"resumenContenido"
).innerHTML=`
<b>${nombreTxt}</b><br>
${signo.emoji} ${signo.nombre}<br>
${chino[1]} ${chino[0]}<br>
Edad: ${edad}
`;

document.getElementById(
"perfilBasico"
).innerHTML=`
<div class="info-grid">

<div class="info-item">
<div class="info-title">📅 Día de nacimiento</div>
${diaNac}
</div>

<div class="info-item">
<div class="info-title">🍂 Estación</div>
${estacion}
</div>

<div class="info-item">
<div class="info-title">👥 Generación</div>
${generacion}
</div>

</div>
`;

document.getElementById(
"infoOccidental"
).innerHTML=`
${signo.emoji} <b>${signo.nombre}</b><br><br>

Elemento: ${signo.elemento}<br>
Planeta: ${signo.planeta}<br>
Color: ${signo.color}<br>
Piedra: ${signo.piedra}<br>
Número: ${signo.numero}
`;

document.getElementById(
"infoChino"
).innerHTML=`
${chino[1]} <b>${chino[0]}</b>
`;

document.getElementById(
"infoLunar"
).innerHTML=`
${lunar[1]} <b>${lunar[0]}</b>
`;

document.getElementById(
"statsVida"
).innerHTML=`
🗓️ ${vividos.dias.toLocaleString()} días<br>
⏱️ ${vividos.horas.toLocaleString()} horas<br>
🕒 ${vividos.minutos.toLocaleString()} minutos<br><br>

🎉 Faltan ${faltan} días para tu cumpleaños
`;

guardarUltimoAnalisis({
nombre:nombreTxt,
dia:diaN,
mes:mesN,
anio:anioN
});

renderParte2(
nombreTxt,
signo,
chino,
edad
);

}

document.addEventListener(
"DOMContentLoaded",
()=>{

restaurar();

document
.getElementById("btnCalcular")
.addEventListener(
"click",
calcular
);

});
// =============================================
// PARTE 2
// COMPATIBILIDAD - PERSONALIDAD - IA
// =============================================

const PERFILES = {

Aries:{
liderazgo:95,
creatividad:80,
empatia:60,
intuicion:70,
disciplina:75,
comunicacion:78,
descripcion:"Personalidad dinámica, competitiva y orientada a la acción."
},

Tauro:{
liderazgo:75,
creatividad:70,
empatia:80,
intuicion:65,
disciplina:95,
comunicacion:70,
descripcion:"Persona estable, perseverante y enfocada en la seguridad."
},

"Géminis":{
liderazgo:70,
creatividad:95,
empatia:75,
intuicion:80,
disciplina:60,
comunicacion:98,
descripcion:"Gran capacidad de comunicación y adaptación."
},

"Cáncer":{
liderazgo:65,
creatividad:80,
empatia:95,
intuicion:95,
disciplina:72,
comunicacion:78,
descripcion:"Sensibilidad elevada, protección y fuerte intuición."
},

Leo:{
liderazgo:98,
creatividad:90,
empatia:70,
intuicion:75,
disciplina:82,
comunicacion:90,
descripcion:"Carisma natural, seguridad y capacidad de inspirar."
},

Virgo:{
liderazgo:70,
creatividad:72,
empatia:78,
intuicion:68,
disciplina:98,
comunicacion:82,
descripcion:"Analítico, ordenado y perfeccionista."
},

Libra:{
liderazgo:75,
creatividad:88,
empatia:92,
intuicion:84,
disciplina:68,
comunicacion:92,
descripcion:"Diplomático, sociable y amante del equilibrio."
},

Escorpio:{
liderazgo:85,
creatividad:78,
empatia:75,
intuicion:98,
disciplina:88,
comunicacion:70,
descripcion:"Intenso, estratégico y profundamente intuitivo."
},

Sagitario:{
liderazgo:85,
creatividad:88,
empatia:72,
intuicion:80,
disciplina:60,
comunicacion:90,
descripcion:"Explorador, optimista y aventurero."
},

Capricornio:{
liderazgo:92,
creatividad:68,
empatia:60,
intuicion:70,
disciplina:99,
comunicacion:74,
descripcion:"Determinado, responsable y orientado a objetivos."
},

Acuario:{
liderazgo:80,
creatividad:95,
empatia:70,
intuicion:88,
disciplina:65,
comunicacion:90,
descripcion:"Innovador, independiente y futurista."
},

Piscis:{
liderazgo:60,
creatividad:98,
empatia:98,
intuicion:99,
disciplina:55,
comunicacion:75,
descripcion:"Soñador, creativo y conectado emocionalmente."
}

};

function crearBarra(nombre,valor){

return `
<div class="stat">

<div class="stat-label">
<span>${nombre}</span>
<span>${valor}%</span>
</div>

<div class="progress">
<div
class="progress-fill"
style="width:${valor}%">
</div>
</div>

</div>
`;

}

function generarPronosticoDiario(signo){

const amor =
60 + Math.floor(Math.random()*40);

const dinero =
60 + Math.floor(Math.random()*40);

const salud =
60 + Math.floor(Math.random()*40);

const trabajo =
60 + Math.floor(Math.random()*40);

return `
<div class="info-grid">

<div class="info-item">
<div class="info-title">
❤️ Amor
</div>
${amor}%
</div>

<div class="info-item">
<div class="info-title">
💰 Dinero
</div>
${dinero}%
</div>

<div class="info-item">
<div class="info-title">
🏥 Salud
</div>
${salud}%
</div>

<div class="info-item">
<div class="info-title">
👔 Trabajo
</div>
${trabajo}%
</div>

</div>
`;

}

function generarPronosticoAnual(signo){

const mensajes={

Aries:
"Año favorable para avanzar profesionalmente y liderar nuevos proyectos.",

Tauro:
"Año de consolidación económica y estabilidad emocional.",

"Géminis":
"Año con nuevas oportunidades de aprendizaje y relaciones.",

"Cáncer":
"Año ideal para fortalecer vínculos familiares.",

Leo:
"Año de reconocimiento y expansión personal.",

Virgo:
"Año excelente para organización y crecimiento profesional.",

Libra:
"Año orientado a equilibrar relaciones y objetivos.",

Escorpio:
"Año de transformación profunda y evolución interior.",

Sagitario:
"Año favorable para viajes y experiencias nuevas.",

Capricornio:
"Año de logro material y avances importantes.",

Acuario:
"Año innovador lleno de cambios positivos.",

Piscis:
"Año espiritual y creativo."
};

return mensajes[signo] || "";
}

function generarResumenIA(
nombre,
signo,
chino,
edad
){

return `
<div class="ai-box">

<b>${nombre}</b> presenta una combinación
astrológica formada por el signo
<b>${signo.nombre}</b> y el signo chino
<b>${chino[0]}</b>.

La energía dominante muestra una tendencia
hacia el desarrollo personal mediante la
combinación de disciplina, intuición y
aprendizaje continuo.

Con una edad actual de
<b>${edad} años</b>,
la experiencia acumulada favorece una mejora
constante en la toma de decisiones y en la
capacidad para adaptarse a nuevos desafíos.

Las fortalezas principales se relacionan con
las características naturales de
${signo.nombre},
mientras que los desafíos representan áreas
de crecimiento que impulsan su evolución.

La combinación energética actual favorece el
desarrollo de objetivos personales,
profesionales y emocionales.

</div>
`;

}

function renderParte2(
nombre,
signo,
chino,
edad
){

const perfil =
PERFILES[signo.nombre] ||
PERFILES["Aries"];

mostrar("compatibilidadAmor");
mostrar("compatibilidadTrabajo");
mostrar("perfilPersonalidad");
mostrar("energia");
mostrar("animal");
mostrar("arbol");
mostrar("pronostico");
mostrar("resumenIA");

document.getElementById(
"amorContenido"
).innerHTML=`

<div class="compat">
${signo.compat.map(
c => `<span>❤️ ${c}</span>`
).join("")}
</div>

`;

document.getElementById(
"trabajoContenido"
).innerHTML=`

<div class="compat">
${signo.compat.map(
c => `<span>💼 ${c}</span>`
).join("")}
</div>

`;

document.getElementById(
"rasgos"
).innerHTML=`

<p>${perfil.descripcion}</p>

${crearBarra(
"Liderazgo",
perfil.liderazgo
)}

${crearBarra(
"Creatividad",
perfil.creatividad
)}

${crearBarra(
"Empatía",
perfil.empatia
)}

${crearBarra(
"Intuición",
perfil.intuicion
)}

${crearBarra(
"Disciplina",
perfil.disciplina
)}

${crearBarra(
"Comunicación",
perfil.comunicacion
)}

`;

document.getElementById(
"barrasEnergia"
).innerHTML=`

${crearBarra(
"Energía Mental",
Math.min(100, perfil.creatividad + 5)
)}

${crearBarra(
"Energía Emocional",
Math.min(100, perfil.empatia + 5)
)}

${crearBarra(
"Energía Espiritual",
Math.min(100, perfil.intuicion + 5)
)}

${crearBarra(
"Energía Material",
Math.min(100, perfil.disciplina + 5)
)}

`;

document.getElementById(
"animalContenido"
).innerHTML=`

<h3>${signo.animal}</h3>

<p>
Representa los valores simbólicos
más relacionados con tu signo.
</p>

`;

document.getElementById(
"arbolContenido"
).innerHTML=`

<h3>${signo.arbol}</h3>

<p>
Árbol asociado a la energía natural
de tu signo zodiacal.
</p>

`;

document.getElementById(
"pronosticoContenido"
).innerHTML=`

<h3>🔮 Pronóstico Diario</h3>

${generarPronosticoDiario(signo)}

<hr style="margin:20px 0;opacity:.2;">

<h3>📅 Pronóstico Anual</h3>

<p>

${generarPronosticoAnual(
signo.nombre
)}

</p>

`;

document.getElementById(
"textoIA"
).innerHTML =
generarResumenIA(
nombre,
signo,
chino,
edad
);

const acciones =
document.getElementById("acciones");

if(acciones){
    acciones.classList.remove("hidden");
}

}

