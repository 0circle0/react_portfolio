export default function CreateKey() {
    var lut = []; for (var i = 0; i < 256; i++) { lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }
    var k = ['x', 'x', '-', 'x', '-', '4', '-', 'y', '-', 'x', 'x', 'x'];
    var u = '', i = 0, rb = Math.random() * 0xffffffff | 0;
    while (i++ < 12) {
        var c = k[i - 1], r = rb & 0xffff, v = c == 'x' ? r : (c == 'y' ? (r & 0x3fff | 0x8000) : (r & 0xfff | 0x4000));
        u += (c == '-') ? c : (lut[v >> 8] + lut[v & 0xff]); rb = i & 1 ? rb >> 16 : Math.random() * 0xffffffff | 0
    }
    return u
}