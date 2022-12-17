# Teste Inclusão Item Carrinho

Neste teste o candidado deve realizar a implamentação de uma funcionalidade seguindo as especificações detalhadas neste tutorial.


## Premissas
1. o desenvolvimento deve ser realizado em **typescript**
1. a implementação deve ser publicada no **github**


## Contextualização e Escopo

  Uma rede de lojas chamada **Vende Bem** está desenvolvendo o seu e-commerce e você foi designado para codificação do **Commando AddItemCarrinho do Agregado Carrinho**.

## Políticas

1. Os produtos dentro de um **Carrinho** são denominados **Itens**
1. Cada **Item** do **Carrinho** é composto por: **ID**: um identificador numérico do produto; **PREÇO UNITÁRIO**: o valor a ser pago pelo cliente na compra de uma unidade daquele produto; **QUANTIDADE**: representa a quantidade de unidadas daquele item no carrinho;
1. Os produtos vendidos pela **Vende Bem** são classificados como **CATEGORIA 1** e **CATEGORIA 2**
1. Os produtos da **Categoria 1** podem ser adicionados ao **Carrinho** de forma multipla. Ou seja, se o usuário adicionar 1 unidade deste produto ao **Carrinho**, um novo **Item** deve ser adicionado contendo a **QUANTIDADE** = 1. Caso outro produto igual seja adicionado neste mesmo **Carrinho**, a **QUANTIDADE** deve ser somada.
1. Os produtos da **Categoria 2** devem sempre ser adicionados ao **Carrinho** de forma individual. Ou seja, se o usuário adicionar 1 unidade deste produto ao **Carrinho**, um novo item deve ser adicionado contendo a **QUANTIDADE** = 1. Caso outro produto igual seja adiciona neste mesmo **Carrinho**, um novo item deve ser incluído ao **Carrinho** também com a quantidade 1
