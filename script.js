const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateKeys(numberOfKeys) {
    fs.writeFileSync('resultJS.txt', '');
    for (let i = 0; i < numberOfKeys; i++) {
        const key = generateSingleKey();
        fs.appendFileSync('resultJS.txt', key + '\n');
    }
};

function generateSingleKey() {
    const key = [];
    for (let i = 0; i < 7; i++) {
        key.push(nonRepeatingChar(key));
    }
    return key.join('');
}

function nonRepeatingChar(arr) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const temp = charset[Math.floor(Math.random() * 63)];
    if (!arr.includes(temp)) {
        return temp;
    } else {
        return nonRepeatingChar(arr);
    }
}

function main() {
    let numberOfKeys;

    readline.question('Please, enter the number of keys to be generated:\n',
        userInput => {
            numberOfKeys = parseInt(userInput);
            if (typeof numberOfKeys === 'number' && !isNaN(numberOfKeys)) {
                readline.close();
                return numberOfKeys;
            } else {
                console.error('Please, enter a valid number!');
                process.exit(1);
            }
        });

    readline.on('close', () => {
        try {
            console.time('Generation time');
            generateKeys(numberOfKeys);
            console.timeEnd('Generation time');
            console.log('Keys generated successfully!');
            process.exit(0);
        }
        catch (err) {
            console.error('Fail to generate keys!');
            console.error(err);
            process.exit(1);
        }
    });
}

main();