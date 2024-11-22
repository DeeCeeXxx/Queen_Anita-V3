#!/usr/bin/env node

"use strict";

var lolcatjs  = require('./');
var info      = require('./package.json');
var chalk     = require('chalk');
var minimist  = require('minimist');
var supportsColor = require('supports-color');

var args = minimist(process.argv.slice(2), {
    alias: {
        v: 'version',
        h: 'help',
        f: 'force',
        p: 'spread',
        F: 'freq',
        S: 'seed',
        a: 'animate',
        d: 'duration',
        D: 'debug',
        s: 'speed'
    }
});

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function help() {
    var help = `
Usage: lolcatjs [OPTION]... [FILE]...

Concatenate FILE(s), or standard input, to standard output.
With no FILE, or when FILE is -, read standard input.

    --spread, -p <f>:   Rainbow spread (default: 8.0)
      --freq, -F <f>:   Rainbow frequency (default: 0.3)
      --seed, -S <i>:   Rainbow seed, 0 = random (default: 0)
       --animate, -a:   Enable psychedelics
  --duration, -d <i>:   Animation duration (default: 12)
     --speed, -s <f>:   Animation speed (default: 20.0)
         --force, -f:   Force color even when stdout is not a tty
       --version, -v:   Print version and exit
         --debug, -D:   Display error messages, if any (default: false)
          --help, -h:   Show this message

Examples:
  lolcatjs f - g     Output f's contents, then stdin, then, g's contents.
  lolcatjs           Copy standard input to standard output.
  fortune | lolcatjs Display a rainbow cookie.

Report lolcatjs bugs to <https://github.com/robertmarsal/lolcatjs/issues>
lolcatjs home page: <https://github.com/robertmarsal/lolcatjs/>
Report lolcatjs translation bugs to <http://speaklolcat.com>`;

    var i     = 20;
    var o     = rand(256);
    var lines = help.split('\n');

    for (var line in lines) {
        i -= 1;
        lolcatjs.options.seed = o + i;
        lolcatjs.println(lines[line]);
    }

    process.exit();
}

function version() {

    if (lolcatjs.options.seed === 0) {
        lolcatjs.options.seed = rand(256);
    }

    lolcatjs.println('lolcatjs ' + info.version + ' (c) 2015-2023 Robert Marsal');

    process.exit();
}

function init(args) {

    if (args.force) {
      chalk.enabled = true;
      chalk.level = supportsColor.supportsColor({isTTY: true}).level;
    }

    if (args.help) {
        help();
    }

    if (args.version) {
        version();
    }

    if (args.spread) {
        lolcatjs.options.spread = args.spread;
    }

    if (args.freq) {
        lolcatjs.options.freq = args.freq;
    }

    if (args.seed) {
        lolcatjs.options.seed = args.seed;
    }

    if (args.animate) {
        lolcatjs.options.animate = true;
    }

    if (args.duration) {
        lolcatjs.options.duration = args.duration;
    }

    if (args.speed) {
        lolcatjs.options.speed = args.speed;
    }

    if (args.debug) {
        lolcatjs.options.debug = Boolean(args.debug);
    }

    lolcatjs.init();

    if (args._.length === 0) {

        if (lolcatjs.options.seed === 0) {
            lolcatjs.options.seed = rand(256);
        }

        lolcatjs.fromPipe();
    } else {
        var promise = Promise.resolve();
        args._.forEach(function(file) {
            if (file === '-') {
                promise = promise.then(() => lolcatjs.fromPipe());
            } else {
                promise = promise.then(() => lolcatjs.fromFile(file));
            }
        });
    }
}

init(args);
