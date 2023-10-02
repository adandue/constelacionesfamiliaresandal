const messages = [
    "De vez en cuando me destrampo",
    "A veces me pesa mi profesión",
    "A veces me aprovecho de la situación",
    "Me dejo llevar por mis impulsos",
    "No siempre doy",
    "Algunas cosas me atan",
    "Me junto con algunos malos y me gusta",
    "No siempre ayudo",
    "A veces me desquito",
    "A veces tengo incertidumbre",
    "A veces pido consejos",
    "Hay cosas que no me salen",
    "Mis diversiones no siempre son bien vistas",
    "A veces mis amigos no me hacen caso",
    "Con algunos de mi familia no me llevo bien",
    "A veces hago cosas que no me gustan",
    "A veces me fallan mis planes",
    "A veces no cumplo lo que digo",
    "Me equivoco en mis juicios",
    "En mi familia hay de todo. Buenos y malos.",
    "En ocasiones me siento triste",
    "A veces me han engañado",
    "A veces hago lo que no quiero",
    "No siempre sigo las instrucciones",
    "Mi razón a veces es necedad",
    "El miedo me ha paralizado",
    "He tenido intenciones ocultas",
    "He permitido que las cosas lleguen demasiado lejos",
    "No me he hecho responsable del daño",
    "A veces me bloqueo",
    "Me he echado para atrás",
    "He querido sacar ventaja",
    "He revelado cosas que no me correspondían",
    "He culpado a otros",
    "He defraudado a alguien",
    "He sido arrogante y he fracasado",
    "He despreciado las necesidades del otro",
    "He sido racista",
    "He dejado cosas inconclusas",
    "A veces doy otra cara",
    "Me ha ganado la ambición",
    "A veces he menospreciado el trabajo de otros",
    "Me he robado el crédito de otros",
    "Me han atrapado en mis mentiras",
    "A veces me tienen que estar correteando",
    "A veces me desentiendo de las cosas",
    "Me he descuidado y a los otros también",
    "Mi pareja ya está educado(a), lo(a) educó su mamá y yo solo soy su pareja",
    "Como pareja tengo mis detalles",
    "Mis hijos también tienen lo suyo",
    "A veces lo que logro no es tan bueno",
    "Cuando confío en mis compañeros se enriquece el trabajo",
    "No siempre sigo mi moral",
    "A veces con mi enojo marco límites",
    "Mi cuerpo tiene imperfecciones",
    "A veces he hecho que otros se encarguen de lo mío",
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