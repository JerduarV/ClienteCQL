const TIPO_PACK = {
    PACK_MENSAJE:   'PACK_MENSAJE',
    PACK_LOGIN:     'PACK_LOGIN',
    PACK_LOGOUT:    'PACK_LOGOUT'
}

/**
 * Función que recorrer la lista de paquetes para interpretarla
 * @param {*} listaPaquetes Lista de paquetes recibidos
 */
function InterpretarLup(listaPaquetes, consola){
    
    //EN EL CASO QUE SEA UN PAQUETE DE LOGIN
    if(listaPaquetes[0].tipo == TIPO_PACK.PACK_LOGIN){
        return ProcesarLogin(listaPaquetes[0]);
    }
    //EN EL CASO QUE SEA UN PAQUETE LOGOUT
    else if(listaPaquetes[0].tipo == TIPO_PACK.PACK_LOGOUT){
        return ProcesarLogout(listaPaquetes[0]);
    }

    return listaPaquetes.forEach(paquete => {
        //console.log(paquete.tipo);
        switch (paquete.tipo) {
            case TIPO_PACK.PACK_MENSAJE:
                ProcesarMessage(paquete,consola);
                break;
            default:
                break;
        }

    });
}

/**
 * Función que interpreta un paquete de mensaje
 * @param {*} pack Paquete de mensaje
 * @param {*} consola Referencia de la consola
 */
function ProcesarMessage(pack, consola){
    var mensaje = pack.mensaje.replace("\\n","\n");
    consola.Imprimir(mensaje + '\n');
}

/**
 * Procesamiento de un paquete de login
 * @param {*} pack Paquete de login
 */
function ProcesarLogin(pack){
    if(pack.mensaje == "SUCCESS"){
        return true;
    }
    return false;
}

/**
 * Procesamiento de un paquete de logout
 * @param {*} pack Paquete de logout
 */
function ProcesarLogout(pack){
    if(pack.mensaje == "SUCCESS"){
        return true;
    }
    return false;
}