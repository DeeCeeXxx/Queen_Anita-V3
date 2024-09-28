const axios = require("axios");
const { JSDOM } = require("jsdom");
const vm = require('node:vm');

async function savefrom(videoUrl) {
    let body = new URLSearchParams({
        "sf_url": encodeURI(videoUrl),
        "sf_submit": "",
        "new": 2,
        "lang": "id",
        "app": "",
        "country": "id",
        "os": "Windows",
        "browser": "Chrome",
        "channel": " main",
        "sf-nomad": 1
    });

    try {
        const { data } = await axios({
            url: "https://worker.sf-tools.com/savefrom.php",
            method: "POST",
            data: body,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "origin": "https://id.savefrom.net",
                "referer": "https://id.savefrom.net/",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
            }
        });

        const dom = new JSDOM(data);
        const document = dom.window.document;

        let exec = '[]["filter"]["constructor"](b).call(a);';
        data = data.replace(exec, `\ntry {\ni++;\nif (i === 2) scriptResult = ${exec.split(".call")[0]}.toString();\nelse (\n${exec.replace(/;/, "")}\n);\n} catch {}`);
        let context = {
            "scriptResult": "",
            "i": 0
        };
        vm.createContext(context);
        new vm.Script(data).runInContext(context);

        // Parsing the result using a more reliable method
        const videoResultMatch = context.scriptResult.match(/window\.parent\.sf\.videoResult\.show\((.*?)\);/);
        const videoInfo = videoResultMatch ? JSON.parse(videoResultMatch[1]) : null;

        return videoInfo;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

module.exports.savefrom = savefrom;
