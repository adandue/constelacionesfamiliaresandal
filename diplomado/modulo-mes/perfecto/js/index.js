const messages = [
    "Nadie me ve la cara",
    "Hago las cosas al pie de la letra",
    "Siempre tengo la razón",
    "Aquí se hace lo que yo digo",
    "No le tengo miedo a nada",
    "Siempre actúo con la mejor de las intenciones",
    "Corto por lo sano",
    "No tengo cola que me pisen",
    "Sé lo que se necesita",
    "Lo que digo lo sostengo",
    "Doy sin esperar nada a cambio",
    "Sé guardar los secretos",
    "Asumo las consecuencias",
    "Me gusta jalar parejo",
    "Me gustan los grandes desafíos",
    "No me preocupo por nimiedades",
    "Respeto a todos, incluso a los diferentes",
    "Soy persistente en mis proyectos",
    "Soy íntegro, no soy doble cara",
    "Soy justo en mis tratos",
    "Soy auténtico",
    "Soy muy comprensivo",
    "Soy como soy",
    "Cuido de mí y de los demás",
    "Valoro el trabajo de los otros",
    "Nadie me exije nada",
    "No tengo ataduras",
    "Cumplo con mis compromisos",
    "Disculpo a los que me ofenden",
    "Tomo la mejor alternativa",
    "Doy a quien no tiene",
    "Aconsejo a los que les hace falta",
    "Me junto con los buenos",
    "Siempre estoy dispuesto a ayudar a quien lo necesite",
    "Soy emocionalmente equilibrado",
    "Tengo ideas y juicios atinados",
    "Mis habilidades son las mejores",
    "Siempre me divierto sanamente",
    "Tengo los mejores amigos",
    "Tengo la mejor familia",
    "Tengo la mejor profesión",
    "Consigo lo que me propongo",
    "Soy seguro de mí mismo",
    "Siempre estoy contento",
    "Soy el mejor partido",
    "Siempre consigo lo mejor",
    "Hago todo en mi trabajo, porque solo así sale bien",
    "Tengo unos hijos ejemplares",
    "Tengo una moral intachabe",
    "Nunca me enojo",
    "Soy hermosa(o)",
    "He educado muy bien a mi pareja",
    "Entiendo todo y lo sé transmitir",
    "Lo difícil se me hace fácil",
    "Aprendo rápidamente",
    "Tengo ideas claras y precisas",
    "He sobresalido por mi esfuerzo",
    "Puedo con todo",
    "No dejo cosas pendientes",
];

let counter = 0;
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    if(counter <= 4) {
        document.getElementById('yoSoy').innerHTML = message;
        counter++;
    } else {
        document.getElementById('yoSoy').disabled=true;
    }
};

randomMsg();