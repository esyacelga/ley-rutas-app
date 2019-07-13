export class RegistroMensajes {
    error_messages = {
        'fechaNacimiento': [
            {type: 'required', message: 'Fecha de nacimiento es requerido'}
        ],
        'email': [
            {type: 'required', message: 'Email es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}
        ],
        'clave': [
            {type: 'required', message: 'Password es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'passwordValidator': [
            {type: 'required', message: 'La validación del password es requrido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'primerNombre': [
            {type: 'required', message: 'Los nombres son requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'primerApellido': [
            {type: 'required', message: 'Primer apellido es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'identificacion': [
            {type: 'required', message: 'La identificación o cédula es requrido'},
            {type: 'minlength', message: 'Debe ser mayor a 10 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 13 caracteres'}

        ],
    };
}
