<template>
  <div>
    <v-container class="pt-11">
      <v-row justify="start">
        <v-btn @click="addTodo">Add Todo</v-btn>
      </v-row>
      <v-row>
        <v-container>
          <todo-list @getEdit="getEdit" />
        </v-container>
      </v-row>
    </v-container>
    <todo-item :showDialog="showDialog" @closeDialog="closeDialog" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import TodoItem from '../components/molecules/TodoItem.vue';
import TodoList from '../components/molecules/TodoList.vue'

  export default {
    name: 'Home',
    components: {
      TodoList,
      TodoItem,
    },
    data() {
      return {
        isEdit: false,
        showDialog: false
      };
    },
    computed: {
      getEditMode() {
        return this.$store.state.isEdit
      }
    },
    methods: {
      ...mapActions([
        "setEditMode"
      ]),
      addTodo() {
        this.setEditMode(false)
        this.showDialog = true
      },
      closeDialog(val) {
        this.showDialog = val 
      },
      getEdit() {
        this.showDialog = true
      }
    }
  }
</script>
