AV.init({
    appId: "D9DOx4ba4jvWTED2kGP9qs3t-gzGzoHsz",
    appKey: "vUWpdN3r8PoUGlKHVuEvmKqU",
    serverURL: "https://d9dox4ba.lc-cn-n1-shared.com"
});

const query = new AV.Query('Message');
query.find().then((messages) => {
    let array = messages.map((items) => items.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    });
    // 批量更新
    AV.Object.saveAll(messages);
});

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()//阻止刷新页面
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
    })
})