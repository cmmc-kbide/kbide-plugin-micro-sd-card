Blockly.Blocks['micro_sd_card_module_open_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("OPEN FILE / MICRO SD CARD MODULE");
    this.appendDummyInput()
        .appendField("FILE NAME : ")
        .appendField(new Blockly.FieldTextInput("INSERT_HERE.TXT"), "MICRO_SD_CARD_MODULE_OPEN_FILE_NAME")
        .appendField("MODE : ")
        .appendField(new Blockly.FieldDropdown([["READ","READ"], ["WRITE","WRITE"]]), "MICRO_SD_CARD_MODULE_OPEN_FILE_MODE");
    this.appendDummyInput()
        .appendField("STATUS : ")
        .appendField(new Blockly.FieldVariable("OPEN_FILE_STATUS"), "OPEN_FILE_STATUS")
        .appendField("TRUE / FALSE");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['micro_sd_card_module_write_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WRITE FILE / MICRO SD CARD MODULE");
    this.appendDummyInput()
        .appendField("DATA : ")
        .appendField(new Blockly.FieldVariable("DATA_VARIABLE"), "DATA_VARIABLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['micro_sd_card_module_read_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("READ FILE / MICRO SD CARD MODULE");
    this.appendDummyInput()
        .appendField("SET DATA TO : ")
        .appendField(new Blockly.FieldVariable("READ_DATA"), "READ_DATA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['micro_sd_card_module_close_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CLOSE FILE / MICRO SD CARD MODULE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};