<template>
  <div class="container-pai">
    <div class="container-cadastroproduto">
      <div class="botao-container">
        <botao-basico text="Cadastrar novo produto" tipo="is-info" class="botao-produto" :acao="limparProduto" />
      </div>
      <grid-cadastro-produtos :produtos="produtos" :selecionar="selecionarProduto" :exluir="deletarProduto" />
    </div>
  </div>
  <modal-produtos :produto="produto" :fechar="fecharModal" />
</template>

<script>
import BotaoBasico from '@/components/botao/BotaoBasico.vue';
import GridCadastroProdutos from '@/components/grids/GridCadastroProdutos.vue';
import ModalProdutos from '@/components/modal/ModalProdutos.vue';

import api from '@/api';

export default {
  components: {
    GridCadastroProdutos,
    BotaoBasico,
    ModalProdutos,
  },
  data() {
    return {
      produtos: [],
      produto: null,
    };
  },
  methods: {
    limparProduto() {
      this.produto = {};
    },
    selecionarProduto(p) {
      this.produto = { ...p }; // Cria uma cópia independente do produto selecionado      
    },
    deletarProduto(produto) {
      api.delete(`/products/${produto.id}`)
        .then(() => {
          this.produtos = this.produtos.filter(p => p.id !== produto.id);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fecharModal() {
      this.produto = null;
      this.getProdutos();
      window.location.reload();
    },
    getProdutos() {
      api.get('/products/user')
        .then(response => {
          this.produtos = [...response.data.Products]; // Cria uma cópia independente da lista de produtos          
          console.log(this.produtos);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.getProdutos();
  },
}
</script>

<style>
.container-cadastroproduto {
  display: flex;
  flex-direction: column;
}

.botao-container {
  align-self: flex-end;
}

.botao-produto {
  margin: 10px;
  font-size: 13px;
}
</style>
