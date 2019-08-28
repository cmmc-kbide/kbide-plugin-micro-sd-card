Blockly.JavaScript['micro_sd_card_module_open_file'] = function(block) {
  var text_micro_sd_card_module_open_file_name = block.getFieldValue('MICRO_SD_CARD_MODULE_OPEN_FILE_NAME');
  var dropdown_micro_sd_card_module_open_file_mode = block.getFieldValue('MICRO_SD_CARD_MODULE_OPEN_FILE_MODE');
  var variable_open_file_status = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OPEN_FILE_STATUS'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `

  `;
  return code;
};

Blockly.JavaScript['micro_sd_card_module_write_file'] = function(block) {
  var variable_data_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DATA_VARIABLE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `

  `;
  return code;
};

Blockly.JavaScript['micro_sd_card_module_read_file'] = function(block) {
  var variable_read_data = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('READ_DATA'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `

  `;
  return code;
};

Blockly.JavaScript['micro_sd_card_module_close_file'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `

  `;
  return code;
};