import { createServer, Factory, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      suggestion: Model
    },

    factories: {
      suggestion: Factory.extend({
        title: 'Live de tira dúvidas',
        description: 'Gravar um curso de HTML para iniciantes',
        votes: 0
      })
    },

    seeds(server) {
      server.create('suggestion')
    },

    routes() {
      this.namespace = 'api'

      // this.resource('suggestions')

      this.get('/suggestions', (schema: any) => {
        return schema.suggestions.all()
      })

      this.post('/suggestions', (schema: any, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.db.suggestions.insert(data)
      })
    }
  })

  return server
}
