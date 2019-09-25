Blockly.defineBlocksWithJsonArray([
  //#region USE
  {
    "type": "use",
    "message0": "USE %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "DB"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region  COMMIT
  {
    "type": "commit",
    "lastDummyAlign0": "CENTRE",
    "message0": "COMMIT",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region SELECT
  {
    "type": "select",
    "message0": "SELECT %1 %2 FROM %3 %4 WHERE %5",
    "args0": [
      {
        "type": "field_input",
        "name": "campos",
        "text": "*"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "tabla",
        "text": "tabla"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "where",
        "check": "where",
        "align": "CENTRE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "orderby",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "COLUMNA"
      },
      {
        "type": "field_dropdown",
        "name": "TIPO",
        "options": [
          [
            "DESC",
            "DESC"
          ],
          [
            "ASC",
            "ASC"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion
  
  //#region  ARITMETICAS
  {
  "type": "arit",
  "message0": "%1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "op1"
    },
    {
      "type": "field_dropdown",
      "name": "OPE",
      "options": [
        [
          "+",
          "+"
        ],
        [
          "-",
          "-"
        ],
        [
          "**",
          "**"
        ],
        [
          "*",
          "*"
        ],
        [
          "%",
          "%"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "op2"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
  },
  //#endregion
  
  //#region RELACIONALES
  {
    "type": "rel",
    "message0": "%1 %2 %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "OP1"
      },
      {
        "type": "field_dropdown",
        "name": "op",
        "options": [
          [
            "<",
            "<"
          ],
          [
            ">",
            ">"
          ],
          [
            "<=",
            "<="
          ],
          [
            ">=",
            ">="
          ],
          [
            "==",
            "=="
          ],
          [
            "!=",
            "!="
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "OP2"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion
  
  //#region LOGICAS
  {
    "type": "logico",
    "message0": "%1 %2 %3 %4",
    "args0": [
      {
        "type": "input_value",
        "name": "op1"
      },
      {
        "type": "field_dropdown",
        "name": "op",
        "options": [
          [
            "&&",
            "&&"
          ],
          [
            "||",
            "||"
          ],
          [
            "^",
            "^"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "op2"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion
  
  //#region VALORES LITERALES
  {
    "type": "valor",
    "message0": "%1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "0"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region DELETE
  {
    "type": "delete",
    "message0": "DELETE FROM %1 %2 WHERE %3",
    "args0": [
      {
        "type": "field_input",
        "name": "tabla",
        "text": "TABLA"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "WHERE",
        "align": "RIGHT"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region INSERT
  {
    "type": "insert",
    "message0": "INSERT INTO %1 %2 VALUES %3",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "TABLA"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "valor_insert",
    "message0": "%1",
    "args0": [
      {
        "type": "input_value",
        "name": "valor"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region INSERT ESPECIAL
  {
    "type": "insert_esp",
    "message0": "INSERT INTO %1 %2 COLUMNAS %3 VALUES %4",
    "args0": [
      {
        "type": "field_input",
        "name": "table",
        "text": "TABLA"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "COLUMNAS"
      },
      {
        "type": "input_statement",
        "name": "VALORES"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region SET
  {
    "type": "set",
    "message0": "UPDATE %1 %2 SET %3 WHERE %4",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "TABLA"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "SET",
        "check": "camposet"
      },
      {
        "type": "input_value",
        "name": "WHERE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 90,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "camposet",
    "message0": "%1 = %2 %3",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "campo"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion

  //#region SELECT 2
  {
    "type": "select2",
    "message0": "SELECT %1 FROM %2 %3 WHERE %4 ORDER BY %5 LIMIT %6",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      },
      {
        "type": "field_input",
        "name": "tabla",
        "text": "tabla"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "where",
        "check": "where",
        "align": "CENTRE"
      },
      {
        "type": "input_statement",
        "name": "ORDER"
      },
      {
        "type": "input_value",
        "name": "LIMIT",
        "align": "CENTRE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
  //#endregion

]);