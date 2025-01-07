!function () {
    const e = [], t = "fixed" === theme.plugins.aplayer.type, n = "mini" === theme.plugins.aplayer.type;
    for (const t of theme.plugins.aplayer.audios) {
        const n = {name: t.name, artist: t.artist, url: t.url, cover: t.cover, lrc: t.lrc, theme: t.theme};
        e.push(n)
    }
    if (n) new APlayer({container: document.getElementById("aplayer"), mini: !0, audio: e}); else if (t) {
        new APlayer({container: document.getElementById("aplayer"), fixed: !0, lrcType: 3, audio: e});
        document.querySelector(".aplayer-icon-lrc").click()
    }
}();
//# sourceMappingURL=aplayer.js.map