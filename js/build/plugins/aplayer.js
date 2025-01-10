!function () {
    const e = [], t = "fixed" === theme.plugins.aplayer.type, n = "mini" === theme.plugins.aplayer.type;
    for (const t of theme.plugins.aplayer.audios) {
        const n = { name: t.name, artist: t.artist, url: t.url, cover: t.cover, lrc: t.lrc, theme: t.theme };
        e.push(n)
    }
    if (n) new APlayer({ container: document.getElementById("aplayer"), mini: !0, audio: e }); else if (t) {
        new APlayer({ container: document.getElementById("aplayer"), fixed: !0, lrcType: 3, audio: e, autoplay: 1 });
        document.querySelector(".aplayer-icon-lrc").click()
        console.log('generate');
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        // 确保 APlayer 已经初始化完成
        setTimeout(() => {
            // 找到播放按钮元素
            const playButton = document.querySelector('.aplayer-body');

            if (playButton) {
                // 模拟点击事件
                playButton.click();

                // 可选：添加调试信息，确认点击事件是否触发
                console.log('Simulated click on play button');

            } else {
                console.error('Play button not found');
            }
            playButton.click();
            console.log('Simulated click on play button');
            playButton.click();
            console.log('Simulated click on play button');
        }, 1000);  // 延迟1秒，确保 APlayer 完全加载
    });
}();

//# sourceMappingURL=aplayer.js.map