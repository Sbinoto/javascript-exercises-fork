const repeatString = function() {

};

function repeatString(word, num){
    let newWord="";
    for (let i=0;i<=num;i++){
        newWord+=word
    };
    return newWord;
}
module.exports = repeatString;
