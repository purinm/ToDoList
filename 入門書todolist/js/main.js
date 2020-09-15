(function () {
  "use strict";

  var app = new Vue({
    el: "#app",

    data: {
      todos: [],
      addtodo: "" && !null,
      archives: [],
      garbages: [],
    },

    methods: {
      addList: function () {
        // もしaddtodoが空ならそのまま何も表示しない
        if (!this.addtodo) {
          return (this.addtodo = "");
        }
        // addtodoが入力されたら下記を
        // 定義してtodosに入れる
        else
          this.todos.push({
            text: this.addtodo,
            done: false,
          });

        this.addtodo = "";
        input.focus();
      },

      CleanTodos: function () {
        // todos からチェック入れたものを取得する
        // 一つ以上の場合配列で戻ってくる
        this.ab = this.todos.filter(function (value) {
          return value.done == true;
        });
        // 元々入っているバリューを new_values と結合
        this.archives = this.archives.concat(this.ab);
        //未処理をtodosから見つけてvalueで受け取り
        //todosに入れなおす
        this.todos = this.todos.filter(function (value) {
          return value.done == false;
        });
      },

      DeleteTodo: function (index) {
        this.garbages.push(this.todos[index]);
        this.todos.splice(index, 1);
        return;
      },

      DeleteArchives: function (index) {
        if (confirm("削除されます。よろしいですか？")) {
          this.archives.splice(index, 1);
        }
      },
      DeleteGarbages: function (index) {
        if (confirm("削除されます。よろしいですか？")) {
          this.garbages.splice(index, 1);
        }
      },
    },

    computed: {
      remaining: function () {
        return this.todos.filter(function (value) {
          return value.done;
        }).length;
      },
    },
  });
})();
