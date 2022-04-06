const express = require('express');
const consola = require('consola')
const app = express();
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')

const port = process.env.PORT || 3000;
config.dev = process.env.NODE_ENV !== 'production'

async function start(){

    const nuxt = new Nuxt(config)
    const { host, port } = nuxt.options.server

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Give nuxt middleware to express
    app.use(nuxt.render)


    app.listen(port,()=>{
        console.log(`listening on port ${host} ${port}`)
    })
}
start();