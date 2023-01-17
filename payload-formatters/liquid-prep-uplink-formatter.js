function decodeUplink(input) {
  var data = {};
  var warnings = [];
  
  if(input.fPort == 10) {
    data.moisture = (input.bytes[0] << 8) + input.bytes[1];
  } else {
    warnings.push("Unsupported fPort");
  }
  return {
    data: data,
    warnings: warnings
  };
}