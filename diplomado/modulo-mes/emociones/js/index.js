const messages = [
    "abandono",
    "alegría",
    "Alerta",
    "ambivalencia",
    "amor",
    "angustia",
    "anhelo",
    "añoranza",
    "apatía",
    "ausencia",
    "cansancio",
    "carencia",
    "castigo",
    "compensación",
    "competencia",
    "confusión",
    "crisis",
    "cuidado",
    "culpa",
    "débil",
    "desamparo",
    "desatención",
    "desequilibrio",
    "desilusión",
    "desprotegido",
    "distante",
    "dolor",
    "duelo",
    "enojo",
    "equilibrio",
    "exigencia",
    "faltó reconocimiento",
    "fantasía",
    "frustración",
    "golpes",
    "herida",
    "huír",
    "idealizar",
    "imposición",
    "inseguridad",
    "juicio",
    "malos ejemplos",
    "maltrato",
    "me tienen lástima",
    "miedo",
    "necesidad",
    "no confían en mí",
    "no me escuchan",
    "peligro",
    "pérdida",
    "perdido",
    "precoz",
    "protección",
    "reconocimiento",
    "responsabilidad",
    "sin cariño",
    "sobre exigencia",
    "sobreprotección",
    "soledad",
    "tristeza",
    "vergüenza",
    "violencia"
];

let counter = 0;
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    if(counter <= 3) {
        document.getElementById('yoSoy').innerHTML = message;
        counter++;
    } else {
        document.getElementById('yoSoy').disabled=true;
    }
};

randomMsg();