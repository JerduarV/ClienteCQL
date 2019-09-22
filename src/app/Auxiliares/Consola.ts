export class Consola{
    
    public salida: string = "";

    public Imprimir(cad: string):void{
        this.salida += ">>" + cad;
    }
}