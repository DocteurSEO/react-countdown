const findAndReplace = String.prototype.replaceArray = function (find, replace) {
    var replaceString = this;
    for (var i = 0; i < find.length; i++) {
        replaceString = replaceString.replace(find[i].toLowerCase(), replace[i].toLowerCase());
    }
    return replaceString;
};


export default findAndReplace
