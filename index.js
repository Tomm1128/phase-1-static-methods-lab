class Formatter {
  //add static methods here

  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word){
    return word.replace(/[^A-Za-z0-9- ']+/g, "");
  }


}
