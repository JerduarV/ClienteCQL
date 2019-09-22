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
    //console.log('INICIANDO INTERPRETE');
    listaPaquetes.forEach(paquete => {
        //console.log(paquete.tipo);
        switch (paquete.tipo) {
            case TIPO_PACK.PACK_MENSAJE:
                ProcesarMessage(paquete,consola);
                break;
            case TIPO_PACK.PACK_LOGIN:
                return ProcesarLogin(paquete);
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
    consola.Imprimir(pack.mensaje);
}


function ProcesarLogin(pack){
    if(pack.mensaje == "SUCCESS"){
        return true;
    }
    return false;
}