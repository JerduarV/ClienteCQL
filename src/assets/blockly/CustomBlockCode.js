function getPrecedence(operadore){
  switch (operadore) {
    case '+':
        return Blockly.JavaScript.ORDER_ADDITION;      // +
    case '-':
        return Blockly.JavaScript.ORDER_SUBTRACTION;
    case '*':
        return Blockly.JavaScript.ORDER_MULTIPLICATION;
    case '/':
        return Blockly.JavaScript.ORDER_DIVISION;
    case '**':
        return Blockly.JavaScript.ORDER_EXPONENTIATION;
    case '%':
        return Blockly.JavaScript.ORDER_MODULUS;
    case '&&':
        return Blockly.JavaScript.ORDER_LOGICAL_AND;
    case '||':
        return Blockly.JavaScript.ORDER_LOGICAL_OR;
    case '^':
        return Blockly.JavaScript.ORDER_BITWISE_XOR;
    case '<':
    case '>':
    case '>=':
    case '<=':
        return Blockly.JavaScript.ORDER_RELATIONAL;
    case '==':
    case '!=':
        return Blockly.JavaScript.ORDER_EQUALITY;
    default:
      break;
  }
}

//BLOQUE COMMIT
Blockly.JavaScript['commit'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'commit;\n';
  return code;
};

Blockly.JavaScript['select'] = function(block) {
  var text_campos = block.getFieldValue('campos');
  var text_tabla = block.getFieldValue('tabla');
  var value_where = Blockly.JavaScript.valueToCode(block, 'where', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'SELECT ' + text_campos + ' ' + ' FROM ' + text_tabla;

  if(value_where){
    code += ' WHERE ' + value_where;
  }
  code += ';\n';
  return code;
};

Blockly.JavaScript['delete'] = function(block) {
  var text_tabla = block.getFieldValue('tabla');
  var value_where = Blockly.JavaScript.valueToCode(block, 'WHERE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'DELETE FROM ' + text_tabla;
  if(value_where){
    code += ' WHERE ' + value_where;
  }
  code += ';\n';
  return code;
};

Blockly.JavaScript['insert'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  statements_name = statements_name.slice(0,statements_name.length - 1);
  // TODO: Assemble JavaScript into code variable.
  var code = 'INSERT INTO ' + text_name + ' VALUES(' + statements_name + ');\n';
  return code;
};

Blockly.JavaScript['insert_esp'] = function(block) {
  var text_table = block.getFieldValue('table');
  var statements_columnas = Blockly.JavaScript.statementToCode(block, 'COLUMNAS');
  statements_columnas = statements_columnas.slice(0, statements_columnas.length - 1);
  var statements_valores = Blockly.JavaScript.statementToCode(block, 'VALORES');
  statements_valores = statements_valores.slice(0, statements_valores.length - 1);
  // TODO: Assemble JavaScript into code variable.
  var code = 'INSERT INTO ' + text_table + ' (' + statements_columnas + ') VALUES(' + statements_valores + ');\n';
  return code;
};

Blockly.JavaScript['valor_insert'] = function(block) {
  var value_valor = Blockly.JavaScript.valueToCode(block, 'valor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_valor + ',';
  return code;
};

Blockly.JavaScript['arit'] = function(block) {
  var dropdown_ope = block.getFieldValue('OPE');
  var prec = getPrecedence(dropdown_ope);
  console.log(prec);
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', prec);
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'op2', prec);
  console.log(value_op2);
  // TODO: Assemble JavaScript into code variable.
  var code = value_op1 + ' ' + dropdown_ope + ' ' + value_op2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, prec];
};

Blockly.JavaScript['rel'] = function(block) {
  var dropdown_op = block.getFieldValue('op');
  var prec = getPrecedence(dropdown_op);
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'OP1', prec);
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'OP2', prec);
  // TODO: Assemble JavaScript into code variable.
  var code = value_op1 + ' ' + dropdown_op + ' ' + value_op2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, prec];
};

Blockly.JavaScript['logico'] = function(block) {
  var dropdown_op = block.getFieldValue('op');
  var prec = getPrecedence(dropdown_op);
  var value_op1 = Blockly.JavaScript.valueToCode(block, 'op1', prec);
  var value_op2 = Blockly.JavaScript.valueToCode(block, 'op2', prec);
  // TODO: Assemble JavaScript into code variable.
  var code = value_op1 + ' ' + dropdown_op + ' ' + value_op2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, prec];
};

Blockly.JavaScript['valor'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};