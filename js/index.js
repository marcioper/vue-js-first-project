var tarefasApp = new Vue({
  el: "#tarefasApp",
  data: {
    tarefas: [
      { titulo: "Desenvolver API para o sistema", pronta: false },
      { titulo: "Criar controle de acesso", pronta: false },
      { titulo: "Enviar novas mudanças para o servidor", pronta: false },
      { titulo: "Teste", pronta: true }
    ],
    novaTarefa: {
      titulo: "",
      pronta: false
    }
  },
  methods: {
    addTarefa: function(e) {
      e.preventDefault();
      this.tarefas.push(this.novaTarefa);
    },
    removerTarefa: function(tarefa) {
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
    }
  }
});
