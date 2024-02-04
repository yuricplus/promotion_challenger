## **Desafio Front End**

![enter image description here](https://github.com/yuricplus/promotion_challenger/blob/main/public/home.png?raw=true)

![enter image description here](https://github.com/yuricplus/promotion_challenger/blob/main/public/busca.png?raw=true)

![enter image description here](https://github.com/yuricplus/promotion_challenger/blob/main/public/detalhes.png?raw=true)

**Instruções**

Versões do node >= v18.17.0 é obrigatorio❕
O serviço pode ser executado por meio dos comandos:

1º Instale as dependências
```
npm i
```
2º Execute o projeto.

```
npm run dev
```
3º Para executar os testes unitarios
```
npm run test
```

Lembre-se de estar na pasta correta dentro do prompt.

## Arquitetura
Para o projeto foi decidido utilizar o NextJs com typescript.

 - Renderização hibrida e de servidor o que facilita no desempenho e melhoria do SEO.
 - Otimização de Imagens.
 - Roteamento e tempo de carregamento da pagina

Para gerenciar os dados foi utilizado o hook do React como o `useState()` e compartilhamento via Props pela facilidade e quantidade de dados para transição. Trazendo abertura para integração com o `useContext`.

Foram criados componentes que pudessem ser reutilizados em diversas etapas do projeto como por exemplo o `CardComponet` e o `HeaderComponente` com um modelo bem semelhante ao Atomic Design.

Os componentes foram abstraídos para melhorar o compartilhamento de componentes e retirar as regras engessadas.

## SCSS e estilização
Para estilização foi feita com Scss com o BEM facilitando a escrita de css e a quantidade reduzida para evitar excesso de css desnecessário, escritas de funções e variaveis dinamicas.

Preferir por escrever o css com flex e usando o Mobile First mesmo não estando especifico o Mobile.

## Testes Unitarios
Os testes unitarios foram executados  cobrindo algumas camadas da arquitetura cobrindo em torno de 92%.
Para os testes unitarios foram utilizados `@jest`, `@testing-library/react`

![enter image description here](https://github.com/yuricplus/promotion_challenger/blob/main/public/coverage.png?raw=true)

Muito obrigado!

