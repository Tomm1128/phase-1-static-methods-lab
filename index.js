class Formatter {
  //add static methods here

  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1)
  }

  static sanitize(word){
    return word.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(title){
    const nonCapitals = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"]
    let wordArray = title.split(" ")
    let firstWord = wordArray[0]
    let remainingTitle = wordArray.slice(1)
    let newTitle = []
    newTitle.push(this.capitalize(firstWord))

    remainingTitle.forEach((word) => {
      if (nonCapitals.includes(word)){
        newTitle.push(word)
      }
      else {
        newTitle.push(this.capitalize(word))
      }
    })

    return newTitle.join(" ")
  }

}
