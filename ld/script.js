const headers = $request.headers || {};
// find Content-Type header case-insensitively
let contentType = '';
for (const k in headers) {
    if (k && k.toLowerCase() === 'content-type') {
        contentType = headers[k] || '';
        break;
    }
}

if (!contentType || contentType.toLowerCase().indexOf('application/x-www-form-urlencoded') === -1) {
    $done({});
    return;
}

const body = $request.body || '';

function parseForm(s) {
    const obj = {};
    if (!s) return obj;
    s.split('&').forEach(pair => {
        if (!pair) return;
        const idx = pair.indexOf('=');
        let key = idx >= 0 ? pair.slice(0, idx) : pair;
        let val = idx >= 0 ? pair.slice(idx + 1) : '';
        try { key = decodeURIComponent(key.replace(/\+/g, ' ')); } catch (e) { }
        try { val = decodeURIComponent(val.replace(/\+/g, ' ')); } catch (e) { }
        if (obj.hasOwnProperty(key)) {
            if (!Array.isArray(obj[key])) obj[key] = [obj[key]];
            obj[key].push(val);
        } else {
            obj[key] = val;
        }
    });
    return obj;
}

function buildForm(obj) {
    const parts = [];
    for (const k in obj) {
        const v = obj[k];
        if (Array.isArray(v)) {
            v.forEach(item => parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(item)));
        } else {
            parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
        }
    }
    return parts.join('&');
}

const params = parseForm(body);
params['ad'] = '1';
params['is_double'] = '1';

const newBody = buildForm(params);
console.log('LD Modified body:', newBody);
$done({ body: newBody });