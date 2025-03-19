class CalcController {

    constructor(){

     this.displayCalc = "0";
     this._dataAtual;
        
        
}

get displayCalc(){
    return this._displayCal;
}

set displayCalc(Valor){
    this._displayCalc = Valor;
}

get dataAtual(){
    return this._dataAtual;
}

set dataAtual(valor){
    this._datalAtual = valor;
}

}