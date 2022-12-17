# Teste Inclusão Item Carrinho

Neste teste o candidado deve realizar a implamentação de uma funcionalidade seguindo as especificações detalhadas neste tutorial.


## Premissas
1. o desenvolvimento deve ser realizado em typescript
1. a implementação deve ser publicada no github


## Contextualização e Escopo

  Uma rede de lojas chamada Vende Bem está desenvolvendo o seu e-commerce e você foi designado para codificação do Commando AddItemCarrinho do Agregado Carrinho.

# Políticas

1. Os produtos dentro de um Carrinho são denominados Itens
1. Cada Item do carrinho é composto por: ID: um identificador numérico do produto; PREÇO UNITÁRIO: o valor a ser pago pelo cliente na compra de uma unidade daquele produto; QUANTIDADE: representa a quantidade de unidadas daquele item no carrinho;
1. Os produtos vendidos pela Vende Bem são classificados como CATEGORIA 1 e CATEGORIA 2
1. Os produtos da categoria 1 podem ser adicionados ao carrinho de forma multipla. Ou seja, se o usuário adicionar 1 unidade deste produto ao carrinho, um item deve ser adicionado contendo a QUANTIDADE = 1. Caso outro produto igual seja adicionado neste mesmo carrinho, a QUANTIDADE deve ser somada.
1. Os produtos da categoria 2 devem sempre ser adicionados ao carrinho de forma individual. Ou seja, se o usuário adicionar 1 unidade deste produto ao carrinho, este item deve ser adicionado contendo a QUANTIDADE = 1. Caso outro produto igual seja adiciona neste mesmo carrinho, um novo item deve ser incluído ao carrinho também com a quantidade 1
