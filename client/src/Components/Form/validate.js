const validate = (input) => {
    let errors = {};
    if (!input.name || !/^[a-zA-Z\s]*$/.test(input.name) || input.name.length < 3 || input.name.length >= 25) errors.name = 'Debe contener de 3 a 25 caracteres, solo letras'; 
    if (!input.duration) errors.duration = 'Duracion Requerida';
    if (!input.season) errors.season = 'Temporada Requerida';
    if (input.countryId.length < 1) errors.countryId = 'Debes selecionar al menos 1 pais';
    return errors;
}

export default validate;