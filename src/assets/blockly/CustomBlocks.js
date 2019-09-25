Blockly.defineBlocksWithJsonArray([
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
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },
  //#endregion
]);