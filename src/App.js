function App() {
  return (
    <div className='app'>
      <div className='search'>
        <input type='search' placeholder='Digite o nome do usuário no GitHub'/>
      </div>

      <div className='user-info'>
        <img src='https://avatars.githubusercontent.com/u/80510651?v=4' alt='Fernando Henrique' />

        <h2><a href='https://github.com/fernandomk6' target='_blank'>Fernando Henrique</a></h2>

        <ul className='repos-info'>
          <li>Repositórios: 42</li>
          <li>Seguidores: 0</li>
          <li>Seguindo: 4</li>
        </ul>

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className='repos'>
          <h2>Repositórios</h2>
          <ul className='repos'>
            <li><a href='#'>Nome do repositorio</a></li>
            <li><a href='#'>Nome do repositorio 2</a></li>
            <li><a href='#'>Nome do repositorio 3</a></li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Favoritos</h2>
          <ul className='starred'>
            <li><a href='#'>Starred Repo</a></li>
            <li><a href='#'>Starred Repo 2</a></li>
            <li><a href='#'>Starred Repo 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
