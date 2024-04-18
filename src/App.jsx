import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'


const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/alicelopess.png',
          name: 'Alice Dantas',
          role: 'Web Developer'
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Expert, evento da Rocketseat. O nome do projeto é HTMLQuiz 🚀'},
          {type: 'link', content: 'https://github.com/alicelopess/nlw-expert-quiz'},
      ],
      publishedAt: new Date('2024-04-18 19:32:00')
  },
  {
    id: 2,
    author: {
        avatarUrl: 'https://github.com/pedroflp.png',
        name: 'Pedro Felipe',
        role: 'Mobile Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala pessoal 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto pessoal de rastreio de encomendas 🚀'},
        {type: 'link', content: 'https://github.com/pedroflp/trackit'},
    ],
    publishedAt: new Date('2021-07-24 17:30:00')
}
]


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
