# Docker

## Conceitos

Docker: É uma engine de administração de containers. 
Container: É um processo isolado do sistema.
Imagem:  Modelo de sistema de arquivo usado para criar containers

Docker image: Classe
Container: Objeto

Repositório: https://hub.docker.com

Volumes: Persistencia de dados sem depender do container  
  - Tipos: 
    - Anônimos: Criados pela flag -v com nome aleatório
    - Nomeados: Criados com nomes definidos
    - Bind Mounts: É um diretorio 'fisico' no pc desaclopado ao docker

### Anotações

- Container devem ter responsabilidade única. 
- Os containers são sempre isolados do sistema. 
- Docker run sempre cria um novo container, para iniciar um ja criado use docker start


## Comandos

###### Autenticação via terminal no Docker Hub
`docker login`

######  Logout do Docker Hub via terminal 
`docker logout`

###### Remover imagens e containers não utilizados
`docker system prnue`

### Container

###### Criar um container
`docker run --name <defina um nome pro container> <nome da imagem>`
  
  -i - Modo Iterativo
  --name <nome do container> - nome do container
  --rm - remover container após a utilização
  -d - Detached - Criar em background
  -p <porta do pc>:<porta container> - Export porta


docker run -d -p 8000:8000 --name node-api1 1c0cc25deef

###### Listar Containers ativos
`docker ps`
`docker container ls`

###### Listar todos os containers já executados
`docker ps -a`
`docker container ls -a`

###### Parar um container
`docker stop <nome do container ou id do container>`
`docker container stop <nome do container ou id do container>`

###### Iniciar um container
`docker start <nome do container ou id do container>`
`docker container start <nome do container ou id do container>`

  -it - modo iterativo

<!-- ###### Expor porta do container
`docker run -p <porta do pc>:<porta container> <nome da imagem>`
`docker container run -p <porta do pc>:<porta container> <nome da imagem>` -->

###### Verificar logs de um container
`docker logs <id/nome do container>`

  -f - Follow: Logs em tempo real

###### Remover container
`docker rm <id/nome do container>`

  -f - Forçar remoção caso o container esteja em execução por exemplo

###### Copiar arquivos entre containers
`docker cp < <nome do container>:<caminho do arquivo/pasta> > <destino>`

Exemplo: `docker cp exemplo:/app/index.js ./copia/`

###### Verificar informações de processamento
`docker top <nome do container>`

###### Inspecionar um container
`docker inspect <nome do container>`

###### Verifica os status e os recursos utilizados pelos container que estão rodando
`docker stats`

<!-- ###### Listar todos os containers já executados
`docker ps -a`-->

<!-- ###### Listar todos os containers já executados
`docker ps -a`-->

-----------------------------------------------------------------------------------------------

### Imagens

###### Criar imagem
`docker build <diretorio onde está o dockerfile>`

  -t - Nomear a imagem Ex: `docker build -t nome-da-imagem .`


###### Listar imagens
`docker image ls`

###### Fazer o download de uma imagem do Docker Hub
`docker pull <nome da imagem>`

###### Listar opções disponíveis no comando docker
`docker <comando> --help`

###### Nomear uma imagem
`docker tag <id da imagem já criada> <nome da imagem>`
`docker tag <id da imagem já criada> <nome da imagem>:<tag/versão da imagem>`

###### Removendo imagens
`docker rmi <nome/id da imagem>`

  -f - Força a remoção da imagem

###### Publicar uma imagem no Docker Hub
- Criar um repositório no Docker Hub: Docker Hub > Repositories > Create Repository
- Fazer o build da imagem com o nome igual ao do repositorio criado

`docker push <nome da imagem>:<nome da tag>`

<!-- ###### Listar todos os containers já executados
`docker ps -a`-->

<!-- ###### Listar todos os containers já executados
`docker ps -a`-->


