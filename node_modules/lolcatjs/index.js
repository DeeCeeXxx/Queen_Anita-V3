"use strict";

const cursor           = require('ansi')(process.stdout);
const Reader           = require('line-by-line');
const chalk            = require('chalk');

// sleep will be loaded by the init function (if available)
let sleep = null;

const options = {
    // To animate or not (only works if the sleep module is available)
    animate: false,
    // Duration of the animation
    duration: 12,
    // Seed of the rainbow, use the same for the same pattern
    seed: 0,
    // Animation speed
    speed: 20,
    // Spread of the rainbow
    spread: 8.0,
    // Frequency of the rainbow colors
    freq: 0.3,
    // Whether to display error messages or not
    debug: false,
};

const rainbow = function(freq, i) {

    const red   = Math.round(Math.sin(freq * i + 0) * 127 + 128);
    const green = Math.round(Math.sin(freq * i + 2 * Math.PI / 3) * 127 + 128);
    const blue  = Math.round(Math.sin(freq * i + 4 * Math.PI / 3) * 127 + 128);

    return {
        red:   red,
        green: green,
        blue:  blue
    }
};

const colorize = function(char, colors) {
    process.stdout.write(chalk.rgb(colors.red, colors.green, colors.blue)(char));
};

const printlnPlain = function(colorize, line) {

    for (let i = 0; i < line.length; i++) {
        colorize(line[i], rainbow(options.freq, options.seed + i / options.spread));
    }
};

const printlnAnimated = function(colorize, line) {

    if (sleep) {

        // Backup the seed
        const seed = options.seed;

        for (let j = 1; j < options.duration; j++) {
            process.stdout.cursorTo(0);

            options.seed += options.spread;

            if (j % 2 === 0) {
                printlnPlain(colorize, line);
            }

            sleep.usleep(1/options.speed * 500000);
        }

        // Restore the original seed
        options.seed = seed;

    }

    printlnPlain(colorize, line);
};

const println = function(line) {
  cursor.show();

  if (options.animate) {
    cursor.hide();
    printlnAnimated(colorize, line);
  } else {
    printlnPlain(colorize, line);
  }

  process.stdout.write('\n');
};

const fromPipe = function() {

    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function(data) {

        const lines = data.split('\n');

        for (let line in lines) {
            options.seed += 1;
            println(lines[line]);
        }
        cursor.show();
    });
    return new Promise(resolve => process.stdin.on('end', resolve));
};

const fromFile = function(file) {

    const fileReader = new Reader(file)
    fileReader.on('line', function (line) {
        options.seed += 1;
        println(line);
        cursor.show();
    });
    return new Promise(resolve => fileReader.on('end', resolve));
};

const fromString = function(string) {

    string = string || '';
    const lines = string.split('\n')
    lines.forEach(function (line) {
        options.seed += 1;
        println(line);
        cursor.show();
    });
};

const init = function() {
    // Because sleep is a native module, depending on the
    // platform of the user, the compilation might fail,
    // in this case fallback, and show no animations.
    try {
        sleep = require('sleep');
    } catch (error) {
        if (options.debug) {
            console.error('The sleep module is not available, animations will be disabled.', error);
        }
    }

    return null;
}

exports.options  = options;
exports.println  = println;
exports.rainbow  = rainbow;
exports.fromPipe = fromPipe;
exports.fromFile = fromFile;
exports.fromString = fromString;
exports.init = init;
