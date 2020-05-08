let aTags = document.querySelectorAll('nav.menu>ul>li>a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()//阻止跳到锚点
        let a = x.currentTarget
        let href = a.getAttribute('href') //'#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 70
        let s = targetTop - currentTop //移动路程
        var coords = { y: currentTop }; //起始位置
        var t = Math.abs((s / 100) * 300) //时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动类型
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}