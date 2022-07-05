function firstNonRepeatedCharacter(string) {
    var first;

    string.split('').some(function (character, index, obj) {
        if(obj.indexOf(character) === obj.lastIndexOf(character)) {
            first = character;
            return true;
        }
        first = character;
        return false;
    });

    return first;
}

console.log(firstNonRepeatedCharacter('aabcbd'));