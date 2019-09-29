%lex

%options case-insensitive

%%

\s+											// se ignoran espacios en blanco
"//".*										// comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

//EXPRESIONES REGULARES
[0-9]+\b                                return 'ENTERO';
\[\+DATA\](.)*\[\-DATA\]                { yytext = yytext.substr(7,yyleng-14); return 'DATA'; }
\[\+MESSAGE\](.)*\[\-MESSAGE\]          { yytext = yytext.substr(10,yyleng-20); return 'MESSAGE'; }
\[\+DESC\](.)*\[\-DESC\]                { yytext = yytext.substr(7,yyleng-14); return 'DESC'; }

//PALABRAS RESERVADAS
"LOGIN"         return 'R_LOGIN';
"LOGOUT"        return 'R_LOGOUT';
"DATA"          return 'R_DATA';
"ERROR"         return 'R_ERROR';
"LINE"          return 'R_LINE';
"COLUMN"        return 'R_COLUMN';
"TYPE"          return 'R_TYPE';
"DESC"          return 'R_DESC';
"DATABASES"     return 'R_DATABASES';
"DATABASE"      return 'R_DATABASE';
"NAME"          return 'R_NAME';
"TABLES"        return 'R_TABLES';
"TABLE"         return 'R_TABLE';
"COLUMNS"       return 'R_COLUMNS';
"COLUMN"        return 'R_COLUMN';
"TYPES"         return 'R_TYPES';
"ATTRIBUTES"    return 'R_ATTRIBUTES';
"ATTRIBUTE"     return 'R_ATTRIBUTE';
"PROCEDURES"    return 'R_PROCEDURES';
"PROCEDURE"     return 'R_PROCEDURE';

[a-zA-Z_ñ]([a-zA-Z0-9_Ñ]*)              return 'ID';

//SIGNOS DE AGRUPACIÓN
"["             return 'CORIZQ';
"]"             return 'CORDER';
"+"             return 'MAS';
"-"             return 'MENOS';

<<EOF>>         return 'EOF';

.               {console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}

/lex

%{
    const TIPO_PACK = {
	PACK_MENSAJE:   'PACK_MENSAJE',
        PACK_LOGIN:     'PACK_LOGIN',
        PACK_LOGOUT:    'PACK_LOGOUT',
        PACK_DATA:      'PACK_DATA',
        PACK_ERROR:     'PACK_ERROR'
    }

    const PackAPI = {
        
        newMensaje: function(mensaje, f, c){
            return {
                tipo: TIPO_PACK.PACK_MENSAJE,
                mensaje: mensaje,
                fila: f,
                columna: c
            };
        },

        newLogin: function(resultado, f, c){
                return {
                        fila: f,
                        columna: c,
                        tipo: TIPO_PACK.PACK_LOGIN,
                        mensaje: resultado
                };
        },

        newLogout: function(resultado, f, c){
                return {
                        fila: f,
                        columna: c,
                        tipo: TIPO_PACK.PACK_LOGOUT,
                        mensaje: resultado
                };
        },

        newData: function(resultado, f, c){
                return {
                        fila: f,
                        columna: c,
                        mensaje: resultado,
                        tipo: TIPO_PACK.PACK_DATA
                };
        },

        newError: function(mensaje, fila_error, col_error, tipo_error, f, c){
                return {
                        fila: f,
                        columna: c,
                        mensaje: mensaje,
                        fila_error: fila_error,
                        col_error: col_error,
                        tipo_error: tipo_error,
                        tipo: TIPO_PACK.PACK_ERROR
                }
        }
    }
%}

%start S

%%

S:
        L_PACK EOF      { return $1; }
    |   EOF             { return []; }
;

L_PACK:
        L_PACK PACK     { $$ = $1; $$.push($2); }
    |   PACK            { $$ = [$1]; }
;

PACK:
        LOGIN_PACK      { $$ = $1; }
    |   LOGOUT_PACK     { $$ = $1; }
    |   DATABASES_PACK  { $$ = $1; }
    |   MESSAGE_PACK    { $$ = $1; }
    |   ERROR_PACK      { $$ = $1; }
    |   DATA_PACK       { $$ = $1; }
;

LOGIN_PACK:
        CORIZQ MAS R_LOGIN CORDER ID CORIZQ MENOS R_LOGIN CORDER        { $$ = PackAPI.newLogin($5,@1.first_line,@1.first_column); }
;

LOGOUT_PACK:
        CORIZQ MAS R_LOGOUT CORDER ID CORIZQ MENOS R_LOGOUT CORDER      { $$ = PackAPI.newLogout($5,@1.first_line,@1.first_column); }
;

MESSAGE_PACK:
        MESSAGE { $$ = PackAPI.newMensaje($1,@1.first_line,@1.first_column); }
;

DATA_PACK:
        DATA    { $$ = PackAPI.newData($1, @1.first_line, @1.first_column); }
;

ERROR_PACK:
        CORIZQ MAS R_ERROR CORDER TAG_LINE TAG_COLUMN TAG_TYPE DESC CORIZQ MENOS R_ERROR CORDER { $$ = PackAPI.newError($8,$5,$6,$7,@1.first_column,@1.first_column); }
;

TAG_LINE:
        CORIZQ MAS R_LINE CORDER ENTERO CORIZQ MENOS R_LINE CORDER      { $$ = $5; }
;

TAG_COLUMN:
        CORIZQ MAS R_COLUMN CORDER ENTERO CORIZQ MENOS R_COLUMN CORDER  { $$ = $5;}
;

TAG_TYPE:
        CORIZQ MAS R_TYPE CORDER ID CORIZQ MENOS R_TYPE CORDER  { $$ = $5; }
;