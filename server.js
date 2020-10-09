const express = require('express')
const nunjucks = require('nunjucks')

const videos = require('./data')
const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure("views", {
    express: server,
    autoescape:false,
    noCache: true
})


server.get("/", (req, res) => {
    const about = {
        avatar: "https://avatars2.githubusercontent.com/u/53977965?s=460&u=5d3590bbb1a07119c1f0a58f06e42d4da6bf4f6b&v=4",
        name:"Jonathan Crecencio",
        title: "Desenvolvedor Full-Stack",
        description: 'Programador e desenvolvedor da <a href="https://github.com/joncrecencio" target="_blank">Wayne Tech</a>, programador full-stack focado em trazer resultados para nossos clientes!',
        links: [
            {
                name: "Github",
                url: "https://github.com/joncrecencio",
                icon:"fab fa-github"
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/jonathan-crecencio-a21aa1161/",
                icon: "fab fa-linkedin"
            },
            {
                name: "Telegram",
                url: "https://t.me/devwayne",
                icon: "fab fa-telegram"
            },
            {
                name: "Email",
                url: "mailto:jonathancrecencio@outlook.com",
                icon: "far fa-envelope"
            },

        ]
    }
    return res.render('sobre', {about})
})

server.get("/projetos", (req, res) => {
    return res.render('projetos', {items: videos})
})


server.listen(3000, () => {
    console.log("ok, rodando")
})