"use strict";
/** Copyright 2020 Delta Zero
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var buildQuery = function (input, prefix, opts) {
    prefix = prefix !== null && prefix !== void 0 ? prefix : '';
    var _ = opts.encode;
    var arr = [];
    switch (typeof input) {
        case "object":
            for (var i in input)
                if (typeof input[i] !== "undefined" && typeof input[i] !== "function") {
                    if (typeof input[i] === "object")
                        arr.push(buildQuery(input[i], prefix ? prefix + "[" + i + "]" : i, opts));
                    else if (Array.isArray(input))
                        arr.push(prefix
                            ? prefix + "[]=" + _(input[i])
                            : _(input[i]));
                    else
                        arr.push(prefix
                            ? prefix + "[" + i + "]=" + _(input[i])
                            : i + "=" + _(input[i]));
                }
            break;
        case "string":
            arr.push(_(input));
            break;
        case "number":
        case "bigint":
        case "boolean":
            arr.push(_(input.toString()));
            break;
    }
    return arr.filter(function (r) { return !!r; }).join(opts.separator);
};
exports.queryString = function (object, options) {
    if (["object", "string", "number", "bigint"].indexOf(typeof object) < 0)
        return undefined;
    // @ts-ignore
    var opts = Object.assign({
        separator: '&',
        encode: encodeURIComponent,
        encodeBrackets: false,
    }, options || {});
    return opts.encodeBrackets
        ? opts.encode(buildQuery(object, null, opts))
        : buildQuery(object, null, opts);
};
//# sourceMappingURL=index.js.map