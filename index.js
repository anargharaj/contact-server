const jsonSever=require('json-server')
const mpServer=jsonSever.create()
const middleware=jsonSever.defaults()
const routes=jsonSever.router('db.json')
mpServer.use(middleware)
mpServer.use(routes)
const PORT=3000 || process.env.PORT
mpServer.listen(PORT,()=>{
   console.log('server running at:'+ PORT)
})


