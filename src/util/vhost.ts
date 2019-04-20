'use strict'

var ASTERISK_REGEXP = /\*/g
var ASTERISK_REPLACE = '([^.]+)'
var END_ANCHORED_REGEXP = /(?:^|[^\\])(?:\\\\)*\$$/
var ESCAPE_REGEXP = /([.+?^=!:${}()|[\]/\\])/g
var ESCAPE_REPLACE = '\\$1'


function vhost(hostname: string, handle: Function) {
    if (!hostname) {
        throw new TypeError('argument hostname is required')
    }

    if (!handle) {
        throw new TypeError('argument handle is required')
    }

    if (typeof handle !== 'function') {
        throw new TypeError('argument handle must be a function')
    }

    // create regular expression for hostname
    var regexp = hostregexp(hostname)

    return function vhost(req: any, res: any, next: any) {
        var vhostdata = vhostof(req, regexp)

        if (!vhostdata) {
            return next()
        }

        // populate
        req.vhost = vhostdata

        // handle
        handle(req, res, next)
    }
}

function hostnameof(req: any) {
    var host = req.headers.host

    if (!host) {
        return
    }

    var offset = host[0] === '['
        ? host.indexOf(']') + 1
        : 0
    var index = host.indexOf(':', offset)

    return index !== -1
        ? host.substring(0, index)
        : host
}


function isregexp(val: any) {
    return Object.prototype.toString.call(val) === '[object RegExp]'
}

function hostregexp(val: any) {
    var source = !isregexp(val)
        ? String(val).replace(ESCAPE_REGEXP, ESCAPE_REPLACE).replace(ASTERISK_REGEXP, ASTERISK_REPLACE)
        : val.source

    // force leading anchor matching
    if (source[0] !== '^') {
        source = '^' + source
    }

    // force trailing anchor matching
    if (!END_ANCHORED_REGEXP.test(source)) {
        source += '$'
    }

    return new RegExp(source, 'i')
}


function vhostof(req: any, regexp: RegExp) {
    var host = req.headers.host
    var hostname = hostnameof(req)

    if (!hostname) {
        return
    }

    var match = regexp.exec(hostname)

    if (!match) {
        return
    }

    var obj = Object.create(null)

    obj.host = host
    obj.hostname = hostname
    obj.length = match.length - 1

    for (var i = 1; i < match.length; i++) {
        obj[i - 1] = match[i]
    }

    return obj
}

export default vhost;
