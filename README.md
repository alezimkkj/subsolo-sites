# SUBSOLO

Site de e-commerce de streetwear feito com HTML, CSS e JavaScript puro, sem framework e sem back-end. A ideia do projeto é simular a experiência completa de uma loja online: o visitante entra, navega pelos produtos, escolhe tamanho e cor, monta o carrinho, passa pelo checkout e acompanha o pedido na área da conta.

O layout foi pensado primeiro para celular e depois adaptado para telas de computador, sempre a partir de imagens de referência de cada tela.

## Acesse o projeto

- Site publicado (GitHub Pages): _adicione o link aqui_
- Repositório: _adicione o link aqui_

## O que dá para fazer no site

**Navegação e compra**
- Ver a página inicial com banners, destaques e a lista de marcas
- Navegar por categorias (camisetas, moletons, calças, cargos, bermudas, jaquetas, tênis e acessórios)
- Filtrar por faixa de preço, ordenar do menor para o maior preço (ou o contrário) e paginar a lista no desktop
- Buscar produtos pelo nome ou pela marca, com tela própria para quando não há resultados
- Abrir a página do produto, trocar a foto principal, escolher cor e tamanho e ver produtos relacionados
- Favoritar itens e gerenciar a lista de favoritos
- Adicionar ao carrinho, aumentar, diminuir e remover itens
- Passar pelo checkout em três etapas: entrega, pagamento e revisão
- Escolher entre entrega padrão e expressa, e pagar com cartão de crédito (parcelado sem juros), débito ou Pix
- Ver a confirmação do pedido com resumo, número e data

**Conta e suporte**
- Criar conta, entrar, confirmar e-mail e senha
- Editar informações pessoais e foto de perfil
- Cadastrar, editar, excluir e definir endereço padrão
- Ver métodos de pagamento salvos
- Acompanhar pedidos, ver detalhes e filtrar por status
- Solicitar troca ou devolução e avaliar produtos
- Consultar a central de ajuda, políticas e perguntas frequentes
- Pedir a exclusão da conta
- Alternar entre tema claro e escuro

## Regras da loja que estão no código

- Frete grátis na entrega padrão para compras a partir de R$ 499
- Entrega padrão custa R$ 19,90 e a expressa R$ 25,90
- Parcelamento em até 12 vezes sem juros, com parcela mínima de R$ 30

Esses valores ficam no começo do `js/script.js` e podem ser alterados ali.

## Como o projeto funciona por dentro

Não existe servidor nem banco de dados. Tudo roda no navegador:

- **Produtos e categorias** ficam no arquivo `js/products.js`. Para cadastrar um produto novo, basta adicionar um item na lista `PRODUCTS`.
- **Cabeçalho, rodapé, barra de abas, menu da conta e newsletter** são montados pelo JavaScript. Nas páginas HTML aparecem apenas marcadores como `data-include="footer"`, o que evita repetir o mesmo código em todas as telas.
- **Carrinho e tema** são guardados no navegador e também levados na URL das páginas. Isso faz o site continuar funcionando mesmo abrindo os arquivos direto do computador, sem servidor.
- **Os dados das contas, pedidos e endereços** nas telas de conta são apenas visuais, servem para demonstrar o fluxo e não são salvos de verdade.

## Estrutura de pastas

```
subsolo/
  index.html            tela de boas-vindas
  home.html             página inicial
  produtos.html         lista de produtos
  produto.html          página de um produto
  carrinho.html         carrinho
  checkout-*.html       etapas do checkout
  perfil.html           área da conta
  ... demais páginas    login, cadastro, pedidos, endereços, ajuda etc.
  css/
    style.css           estilos de todo o site
  js/
    products.js         lista de produtos e categorias
    script.js           lógica do site
  img/                  fotos de produtos, banners e ícones
```

## Como rodar no seu computador

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` no navegador.

Também funciona com qualquer servidor local simples, mas não é obrigatório.

## Como publicar no GitHub Pages

1. Envie os arquivos do projeto para um repositório no GitHub.
2. Vá em **Settings**, depois em **Pages**.
3. Em **Source**, escolha a branch principal e a pasta raiz.
4. Salve e aguarde alguns minutos. O link do site aparece na mesma tela.
5. Cole o link na seção "Acesse o projeto" deste README.

## Tecnologias

- HTML5
- CSS3
- JavaScript (sem bibliotecas)

## Autor

Desenvolvido por _seu nome aqui_.

- Contato: _adicione aqui_
- Portfólio ou LinkedIn: _adicione aqui_
