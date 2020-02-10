Óla

Aqui vai a descrição do teste e uma abordagem sobre algumas decisões tomadas na criação.

Eu decidi criar esse teste em javascript puro para mostrar minhas habilidades sobre a tecnologia sem depender de frameworks. E dias antes de participar desse teste, fiz uma profunda leitura sobre o assunto: javascript puro X frameworks, e tive um entendimento que frameworks são importantes mais na maioria das vezes passageiros e se o profissional portar as habilidades sólidas da própria linguagem ele terá facilidade de construir qualquer projeto.

### Orientações

clone o projeto em sua máquina. E execute os seguintes comandos:

npm install
npm start
e clique: Open: http://localhost:7007
(preferi seguir o padrão de vocês)

quando o ‘npm start’ é iniciado o gulp já faz o trabalho de escutar as pastas ‘sass’ e ‘css’.

#Para utilizar os cypress

Existem os seguintes modos:

npm cypress:chrome (para o teste abrir no navegador)
npm cypress run (para executar o teste no terminal mesmo)

E se nenhuma dessas formas funcionarem eu coloquei o arquivo ‘cypress.exe’ dentro da pasta cypress para poder ser executado manualmente, e lá pedirá para selecionar a pasta correspondente ao teste que seria ‘frontend-test’.

Na criação de pastas, funções e variáveis, considerei os padrões Airbnb são excelentes a ser seguidor e fácil de serem compreendidos. Pensei em fazer com o padrão Spotify mas preferi ser conservador e seguir um padrão que acostumei a usar nos meus projetos e freelas.
Tomei alguns cuidados com o desempenho e a performance do projeto, para isso usei o ‘gulp-clean-css’, ele minifica o arquivo css. E também utilizei o tinyPNG ele ajuda a deixar as imagens mais compactas e deixa a página com uma resposta mais rápida ao carregar, isso já pensando nas pessoas que tem um computador e internet inferior.

Procurei deixar o layout fiel ao psd.

### Dúvidas

Eu tive dificuldades com o cálculo que pediram no projeto, os números das porcentagens dos participantes eram totalmente aleatórios, eu não consegui compreender muito bem como funciona os ‘positives’ e ‘negatives’, por que sei que a ordenação dos participantes da fazenda são em base a porcentagem de ‘gostam’ e ‘não gostam’.

E sobre os números das posições dos participantes, não encontrei um modo inserir pelo fato das imagens serem dinâmicas.

Essas foram minhas observações e dúvidas sobre o projeto sei que tudo isso foi colocado como desafio, espero imensamente que gostem e que me aprovem para a próxima etapa estudei horrores e passei noites em claro resolvendo o desafio, quero muito fazer parte deste time da Record / R7, e me tornar um excelente profissional.
