import { createServer, Factory, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      suggestion: Model
    },

    factories: {
      suggestion: Factory.extend({
        title(i) {
          return `Tema ${i}`
        },
        description(i) {
          return `Fazer uma live ou vídeo sobre tema ${i}`
        },
        votes() {
          return 0
        }
      })
    },

    seeds(server) {
      server.create('suggestion')
    },

    routes() {
      this.namespace = 'api'

      this.get('/suggestions', (schema: any) => {
        return schema.suggestions.all()
      })

      this.post('/suggestions', (schema: any, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.suggestions.create(data)
      })

      this.put('/suggestions/:id', (schema: any, request) => {
        const id = request.params.id

        const suggestion = schema.suggestions.find(id)

        suggestion.update({
          votes: suggestion.votes + 1
        })

        return suggestion
      })
    }
  })

  return server
}
