import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    models: {
      suggestion: Model
    },

    seeds(server) {
      server.db.loadData({
        suggestions: [
          {
            id: '1',
            title: 'Cursou de HTML',
            description: 'Gravar um curso de HTML para iniciantes',
            votes: 0
          },
          {
            id: '2',
            title: 'Fazer um video sobre Web3.js',
            description: 'Gravar um vídeo sobre blockchain no frontend',
            votes: 0
          }
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      // this.resource('suggestions')

      this.get('/suggestions', (schema: any) => {
        return schema.suggestions.all()
      })

      this.post('/suggestions', (schema: any, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.db.suggestions.insert('suggestions', data)
      })
    }
  })

  return server
}
