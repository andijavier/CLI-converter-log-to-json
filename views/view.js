class View {
  static help(){
    console.log("Command:");
    console.log("converter -h");
    console.log("converter <path_file>");
    console.log("converter <path_file> -t json");
    console.log("converter <path_file> -t text");
    console.log("converter <path_file> -o <path_file>");
    console.log("converter <path_file> -t json -o <path_file>");
  }

  static readJSON(data) {
    console.log(data);
  }

  static readPlain(data) {
    console.log(data);
  }

  static moveJSON(message) {
    console.log(message);
  }

  static movePlain(message) {
    console.log(message);
  }
}

module.exports = View