import { createServer } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = 'api'

      this.get('/suggestions', () => {
        return [
          {
            id: 1,
            title: 'Cursou de HTML',
            description: 'Gravar um curso de HTML para iniciantes',
            votes: 0
          },
          {
            id: 2,
            title: 'Fazer um video sobre Web3.js',
            description: 'Gravar um vídeo sobre blockchain no frontend',
            votes: 0
          },
          {
            id: 3,
            title: 'Criar um bot com JS',
            description: 'Fazer uma live criando um bot',
            votes: 0
          }
        ]
      })
    }
  })

  return server
}
