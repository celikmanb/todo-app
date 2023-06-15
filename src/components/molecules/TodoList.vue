<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="getDataList"
      class="elevation-1 display-2"
      :items-per-page="5"
    >
      <template v-slot:item.action="{ item }">
        <v-btn class="mr-2" @click="editData(item)">
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn @click="deleteData(item)">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'TodoList',
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Is Done', value: 'isdone' },
        { text: 'Priority', value: 'priority' },
        { text: 'Action', value: 'action' },
      ]
    };
  },
  computed: {
    getDataList() {
      return this.$store.state.todoList;
    }
  },
  methods: {
    ...mapActions([
      "setSelectedTodoItem",
      "setEditMode",
      "deleteTodoItem"
    ]),
    editData(val) {
      this.setSelectedTodoItem(val)
      this.setEditMode(true)
      this.$emit('getEdit', true)
    },
    deleteData(val){
      this.deleteTodoItem(val)
    }
  }
}
</script>

<style>

</style>