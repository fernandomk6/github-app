# GitHub App

Nessa aplicação é possivel pesquisar por um usuário no gitHub e obter
suas informações, como foto, repositórios, favoritos, número de seguidores, quantos
perfil esse usuário segue... dentre outras coisas.

## Tecnologias usadas

- React (class components 👴)
- gitHib Rest API [doc](https://docs.github.com/pt/rest)

## Passos

- Marcação HTML
- Separer componentes
- Criar estado da aplicação
- Fazer request dos dados do usuário
- Popular corretamente o componente `UserInfo`
- Estrutura de callbacks para buscar repositórios e favoritos
- Métodos para buscar repositórios e favoritos
- Buscar repositórios do usuário buscado

### Melhorias

- Desabilitar campo de busca enquanto o resultado é processado

```js
// dentro da função handle alguma coisa
e.target.disabled = true

// ...codigo do evento

// após tudo ter ocorrido (sucesso ou falha)
e.target.disabled = false

// opcional
e.target.value = ''
```

- Loading enquanto estivermos buscando os dados


## Anotações sobre coisas aprendidas durante o desenvolvimento dessa aplicação

- Primeiro crie toda a marcação HTML stateless, e depois, transforme cada parte
em componentes reutilizáveis.
- Prefira componentes stateless à componentes statefull. 
- Coloque estado no componente apenas se for necessário.
- Fluxo de importações unidirecional.
- Não duplique states em componentes filhos. 
- O state deve ser gerenciado pelo componente pai comum a todos os filhos e apenas
compartilhado entre os filhos. Apenas o pai pode alterar e compartilhar o estado.

- Quando tiver uma marcação HTML semelhante, aonde mudam apenas as informações, talvez
seja o caso de criar um unico componente e passar props dinamicas fornecidas pelo pai,
para customizar cada exibição.

- stateful é um componente que tem estado
- stateless é um componente que não tem estado
- presentational componente é um componente que cuida apenas de apresentar um conteúdo
- container componente é um componente que fará mais "coisas" do que apenas apresentar
conteúdo
- Pode se resumir presentational components como stateless
- Pode se resumir container components como stateful
- Dump components são componentes que apenas renderizam informações sejam props ou templates
- Smart componentes são componentes que tem estado, são componentes inteligentes
- Smart component, container component e statful component são sinônimos
- Dumb component, presentational component, e stateless component são sinônimos
- É preferivél que sua aplicação tenha poucos componentes statefull
- Prefira stateless ao invés de statefull
- Stateless são componentes puros
- Statefull são componentes impuros

- É interessante que tenha apenas um componente que gerencie todo o estado da aplicação

```js
class MainComponent {
  this.state = {
    aState: true
    aState2: true
    aState3: true
    aState4: true
  }

  render () {
    return (
      <Containt 
        aState={this.state.aState} 
        aState2={this.state.aState2} 
        aState3={this.state.aState3} 
        aState4={this.state.aState4} 
      />
    )
  }
}
```

*Sintaxe foi escrita de forma simplificada apenas para entender a ideia.*

- Sempre optite por manipular o objeto de evento (e) do react, e não o nativo do
browser, por o `event` objeto do react, é padronizado para funcionar em todos
os browsers, enquanto o `event` fornecedido por um broswer, pode não funcionar
em outros.


