// --- 1. Definición de Datos de la Carrera ---
// Cada ramo es un objeto con id, nombre, semestre y un array de sus requisitos.
const ramosData = [
    // Semestre I
    { id: 'PSI101', nombre: 'Historia y Fundamentos de la Psicología', semestre: 1, requisitos: [] },
    { id: 'PSI102', nombre: 'Tópicos de Neurobiología', semestre: 1, requisitos: [] },
    { id: 'PSI103', nombre: 'Psicología y Sociedad', semestre: 1, requisitos: [] },
    { id: 'ING101', nombre: 'Inglés I', semestre: 1, requisitos: [] },
    { id: 'EFI101', nombre: 'Eje de Formación Interdisciplinaria I', semestre: 1, requisitos: [] },
    // Semestre II
    { id: 'PSI201', nombre: 'Sistemas Psicológicos', semestre: 2, requisitos: [] },
    { id: 'PSI202', nombre: 'Procesos Psicológicos y Neurociencias', semestre: 2, requisitos: ['PSI102'] },
    { id: 'PSI203', nombre: 'Psicología y Epistemología', semestre: 2, requisitos: [] },
    { id: 'ING102', nombre: 'Inglés II', semestre: 2, requisitos: ['ING101'] },
    { id: 'HAB201', nombre: 'Habilidades Comunicativas', semestre: 2, requisitos: [] },
    // Semestre III
    { id: 'PSI301', nombre: 'Psicoanálisis I', semestre: 3, requisitos: [] },
    { id: 'PSI302', nombre: 'Psicología del Desarrollo I', semestre: 3, requisitos: [] },
    { id: 'PSI303', nombre: 'Investigación I', semestre: 3, requisitos: ['PSI203'] },
    { id: 'ING103', nombre: 'Inglés III', semestre: 3, requisitos: ['ING102'] },
    { id: 'TIC301', nombre: 'Razonamiento Científico y TICS', semestre: 3, requisitos: ['HAB201'] },
    // Semestre IV
    { id: 'PSI401', nombre: 'Psicoanálisis II', semestre: 4, requisitos: ['PSI301'] },
    { id: 'PSI402', nombre: 'Psicología del Desarrollo II', semestre: 4, requisitos: ['PSI302'] },
    { id: 'PSI403', nombre: 'Investigación II', semestre: 4, requisitos: ['PSI303'] },
    { id: 'ING104', nombre: 'Inglés IV', semestre: 4, requisitos: ['ING103'] },
    { id: 'EFI401', nombre: 'Eje de Formación Interdisciplinaria II', semestre: 4, requisitos: [] },
    // Semestre V
    { id: 'PSI501', nombre: 'Psicodiagnóstico Clínico I', semestre: 5, requisitos: [] },
    { id: 'PSI502', nombre: 'Psicopatología y Psiquiatría I', semestre: 5, requisitos: [] },
    { id: 'PSI503', nombre: 'Taller de Integración', semestre: 5, requisitos: ['PSI403', 'PSI402', 'PSI301'] },
    { id: 'PSI504', nombre: 'Psicología Social', semestre: 5, requisitos: [] },
    { id: 'EFI501', nombre: 'Eje de Formación Interdisciplinaria III', semestre: 5, requisitos: [] },
    // Semestre VI
    { id: 'PSI601', nombre: 'Psicodiagnóstico Clínico II', semestre: 6, requisitos: ['PSI501'] },
    { id: 'PSI602', nombre: 'Psicopatología y Psiquiatría II', semestre: 6, requisitos: ['PSI502'] },
    { id: 'PSI603', nombre: 'Psicología Educacional', semestre: 6, requisitos: [] },
    { id: 'PSI604', nombre: 'Diagnóstico e Intervención Social', semestre: 6, requisitos: ['PSI504'] },
    { id: 'PSI605', nombre: 'Psicología del Trabajo y las Organizaciones', semestre: 6, requisitos: [] },
    // Semestre VII
    { id: 'PSI701', nombre: 'Clínica Sistémica', semestre: 7, requisitos: [] },
    { id: 'PSI702', nombre: 'Psicopatología Infanto Juvenil', semestre: 7, requisitos: ['PSI502'] },
    { id: 'PSI703', nombre: 'Diagnóstico e Intervención Educacional', semestre: 7, requisitos: ['PSI603'] },
    { id: 'PSI704', nombre: 'Psicología Jurídica', semestre: 7, requisitos: [] },
    { id: 'PSI705', nombre: 'Diagnóstico e Intervención Organizacional', semestre: 7, requisitos: ['PSI605'] },
    // Semestre VIII
    { id: 'PSI801', nombre: 'Clínica Psicoanalítica', semestre: 8, requisitos: [] },
    { id: 'PSI802', nombre: 'Clínica Infanto Juvenil', semestre: 8, requisitos: ['PSI702'] },
    { id: 'PSI803', nombre: 'Integrador I: Taller de Investigación', semestre: 8, requisitos: ['PSI503', 'PSI603', 'PSI602', 'PSI601', 'PSI704', 'PSI605'] },
    { id: 'PSI804', nombre: 'Diagnóstico e Intervención Jurídica', semestre: 8, requisitos: ['PSI704'] },
    { id: 'PSI805', nombre: 'Intervención Clínica Sistémica', semestre: 8, requisitos: ['PSI701'] },
    // Semestre IX
    { id: 'PSI901', nombre: 'Taller de Intervención Clínica', semestre: 9, requisitos: [] },
    { id: 'PSI902', nombre: 'Psicología y Salud', semestre: 9, requisitos: [] },
    { id: 'PSI903', nombre: 'Taller de Diagnóstico e Intervención Psicosocial', semestre: 9, requisitos: [] },
    { id: 'PSI904', nombre: 'Electivo de Formación Profesional I', semestre: 9, requisitos: [] },
    { id: 'PSI905', nombre: 'Electivo de Formación Profesional II', semestre: 9, requisitos: [] },
    // Semestre X
    { id: 'PSI1001', nombre: 'Integrador II: Práctica Profesional', semestre: 10, requisitos: ['PSI901', 'PSI902', 'PSI903', 'PSI904', 'PSI905'] },
];

// --- 2. Lógica de la Aplicación ---
document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-curricular-container');
    const notificacionEl = document.getElementById('notificacion');
    const totalSemestres = Math.max(...ramosData.map(r => r.semestre));
    
    // Carga los ramos aprobados desde el almacenamiento local del navegador
    let ramosAprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    // Función para guardar el estado actual en el almacenamiento local
    const guardarEstado = () => {
        localStorage.setItem('ramosAprobados', JSON.stringify([...ramosAprobados]));
    };
    
    // Función para verificar si un ramo puede ser aprobado
    const puedeAprobar = (ramo) => {
        return ramo.requisitos.every(reqId => ramosAprobados.has(reqId));
    };

    // Función para mostrar notificaciones
    const mostrarNotificacion = (mensaje) => {
        notificacionEl.textContent = mensaje;
        notificacionEl.classList.remove('notificacion-oculta');
        setTimeout(() => {
            notificacionEl.classList.add('notificacion-oculta');
        }, 3000); // La notificación desaparece después de 3 segundos
    };

    // Función para actualizar la apariencia de todos los ramos
    const actualizarMalla = () => {
        document.querySelectorAll('.ramo').forEach(ramoEl => {
            const ramoId = ramoEl.dataset.id;
            const ramo = ramosData.find(r => r.id === ramoId);

            ramoEl.classList.remove('aprobado', 'bloqueado');

            if (ramosAprobados.has(ramoId)) {
                ramoEl.classList.add('aprobado');
            } else if (!puedeAprobar(ramo)) {
                ramoEl.classList.add('bloqueado');
            }
        });
    };

    // Función para manejar el clic en un ramo
    const handleRamoClick = (e) => {
        const ramoEl = e.target.closest('.ramo');
        if (!ramoEl) return;

        const ramoId = ramoEl.dataset.id;
        const ramo = ramosData.find(r => r.id === ramoId);
        
        // Si el ramo ya está aprobado, no hacer nada (o podrías implementar des-aprobar)
        if (ramosAprobados.has(ramoId)) return;

        // Si el ramo tiene los requisitos cumplidos, se aprueba
        if (puedeAprobar(ramo)) {
            ramosAprobados.add(ramoId);
            guardarEstado();
            actualizarMalla();
        } else {
            // Si está bloqueado, mostrar notificación con los requisitos faltantes
            const nombresRequisitos = ramo.requisitos
                .filter(reqId => !ramosAprobados.has(reqId))
                .map(reqId => ramosData.find(r => r.id === reqId).nombre)
                .join(', ');
            mostrarNotificacion(`Requisitos pendientes: ${nombresRequisitos}`);
        }
    };

    // Función para dibujar la malla en la página
    const renderizarMalla = () => {
        for (let i = 1; i <= totalSemestres; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.className = 'semestre-columna';
            
            const titulo = document.createElement('h2');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `Semestre ${i}`;
            semestreColumna.appendChild(titulo);

            const ramosDelSemestre = ramosData.filter(ramo => ramo.semestre === i);
            ramosDelSemestre.forEach(ramo => {
                const ramoEl = document.createElement('div');
                ramoEl.className = 'ramo';
                ramoEl.textContent = ramo.nombre;
                ramoEl.dataset.id = ramo.id; // Guardamos el ID en un atributo de datos
                semestreColumna.appendChild(ramoEl);
            });

            mallaContainer.appendChild(semestreColumna);
        }
        actualizarMalla(); // Aplica los estilos iniciales (aprobado/bloqueado)
    };

    // --- 3. Inicialización ---
    renderizarMalla();
    mallaContainer.addEventListener('click', handleRamoClick);
});
