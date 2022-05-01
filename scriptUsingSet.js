const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function generateKeys(numberOfKeys) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    fs.writeFileSync('resultJS.txt', '');
    for (let i = 0; i < numberOfKeys; i++) {
        const key = new Set();
        while (key.size < 7) {
            key.add(charset[Math.floor(Math.random() * 62)]);
        }
        fs.appendFileSync('resultJSUsingSet.txt', [...key].join('') + '\n');
    };
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