// Funksjon for å bytte mellom privatperson og firma feltene
function toggleFields() {
    const privatpersonFields = document.getElementById('privatpersonFields');
    const firmaFields = document.getElementById('firmaFields');
    
    // Hvis "Privatperson" er valgt
    if (document.getElementById('privatperson').checked) {
        privatpersonFields.classList.remove('hidden'); // Vis privatperson feltene
        firmaFields.classList.add('hidden'); // Skjul firma feltene
    }
    // Hvis "Firma" er valgt
    else if (document.getElementById('firma').checked) {
        firmaFields.classList.remove('hidden'); // Vis firma feltene
        privatpersonFields.classList.add('hidden'); // Skjul privatperson feltene
    }
}

// Legg til event listeners for radioknappene
document.addEventListener('DOMContentLoaded', function() {
    const privatpersonRadio = document.getElementById('privatperson');
    const firmaRadio = document.getElementById('firma');
    
    privatpersonRadio.addEventListener('change', toggleFields);
    firmaRadio.addEventListener('change', toggleFields);
    
    // Sørg for at riktige felt vises ved oppstart
    toggleFields();
});