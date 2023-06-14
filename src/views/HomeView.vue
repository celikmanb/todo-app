<template>
  <div>
    <v-container>
      <v-row justify="start">
        <v-btn>Add Todo</v-btn>
      </v-row>
      <v-row>
        <v-container>
          <todo-list />
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TodoList from '../components/molecules/TodoList.vue'

  export default {
    name: 'Home',
    components: {
      TodoList,
    },
  }
</script>
