const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let startDate = null;
let endDate = null;

const calendarBody = document.getElementById('calendarBody');
const currentMonthElement = document.getElementById('currentMonth');

// Referencias a la celda de la tabla
const datesCell = document.getElementById('idPeriodo');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    currentMonth--;
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentMonth++;
    renderCalendar();
});

function renderCalendar() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

    currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleDateString('default', {month: 'long', year: 'numeric'});

    let days = '';

    for (let i = 0; i < firstDayIndex; i++) {
        days += `<div class="calendar-day"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const className = getDayClassName(date);
        days += `<div class="calendar-day ${className}" onclick="selectDate(${i})">${i}</div>`;
    }

    calendarBody.innerHTML = days;
}

function selectDate(day) {
    const clickedDate = new Date(currentYear, currentMonth, day);
    if (!startDate || endDate) {
        startDate = clickedDate;
        endDate = null;
    } else if (clickedDate < startDate) {
        startDate = clickedDate;
    } else if (clickedDate > startDate) {
        endDate = clickedDate;
    }

    renderCalendar();
    updateSelectedDates();
}

function updateSelectedDates() {
    if (startDate && endDate) {
        datesCell.textContent = `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate) {
        datesCell.textContent = `${formatDate(startDate)} -`;
    } else {
        datesCell.textContent = '-';
    }
}

function getDayClassName(date) {
    if (startDate && date.toDateString() === startDate.toDateString()) {
        return 'selected';
    }
    if (endDate && date.toDateString() === endDate.toDateString()) {
        return 'selected';
    }
    if (startDate && endDate && date > startDate && date < endDate) {
        return 'range';
    }
    return '';
}

function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

renderCalendar();
updateSelectedDates();


function CrearLista() {
    //Se toman los dias que son fereados que ingrese el usuario
    let diaFeriado1 = document.getElementById("diaFereado1");
    let diaFeriado2 = document.getElementById("diaFereado2");
    let diaFeriado3 = document.getElementById("diaFereado3");
    let diaFeriado4 = document.getElementById("diaFereado4");
    let diaFeriado5 = document.getElementById("diaFereado5");
    
    //Se toman el inicio y el final del periodo vacacional que ingrese el usuario
    let periodoVacacionalInicio = document.getElementById("periodoVacacionalInicio");
    let periodoVacacionalFinal = document.getElementById("periodoVacacionalFinal");

    //Se toman las horas que tiene por dia el autor
    let horasLunes = document.getElementById("Lunes");
    let horasMartes = document.getElementById("Martes");
    let horasMiercoles = document.getElementById("Miercoles");
    let horasJueves = document.getElementById("Jueves");
    let horasViernes = document.getElementById("Viernes");
    let horasSabado = document.getElementById("Sabado");

    //Se convierte las fechas en un formato fecha
    let fechaInicio = new Date(startDate);
    let fechaFinal = new Date(endDate);
    let diaSemana;
    let cont;

    //Mientras la fecha sea menor o igual a la fecha final se hace el proceso
    while (fechaInicio <= fechaFinal) {
        // Mientras la fecha este fuera del periodo vacacional
        if (fechaInicio < periodoVacacionalInicio || fechaInicio > periodoVacacionalFinal) {
            // y mientras la fecha no sea igual a los dias feriados
            if (fechaInicio !== diaFeriado1 && fechaInicio !== diaFeriado2 && fechaInicio !== diaFeriado3 && fechaInicio !== diaFeriado4 && fechaInicio !== diaFeriado5) {
                //Vas a obtener el dia de la semana con letra
                diaSemana = obtenerDiaDeLaSemana(fechaInicio);
                
                //Si el dia de la semana es lunes
                if (diaSemana.equals("Lunes")) {
                    //Y mientas el contador sea menor o igual al numero de horas de ese dia
                    while (cont <= horasLunes) {
                        //vas a hacer este proceso
                        
                        //Sumas 1 al contador
                        cont++;
                    }
                }
                if (diaSemana.equals("Martes")) {

                }
                if (diaSemana.equals("Miércoles")) {

                }
                if (diaSemana.equals("Jueves")) {

                }
                if (diaSemana.equals("Viernes")) {

                }
                if (diaSemana.equals("Sábado")) {

                }
            }
        }

        fechaInicio.setDate(fechaInicio.getDate() + 1);
    }
}

function obtenerDiaDeLaSemana(fecha) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[fecha.getDay()];
    const diaSemana = obtenerDiaDeLaSemana(fecha);
}