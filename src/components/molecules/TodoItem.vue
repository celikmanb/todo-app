<template>
  <div>
    <v-dialog 
      v-model="showDialog"
      persistent
      width="auto"
    >
      <v-card>
        <v-card-title>
          Add/Edit Todo
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <todo-text :label="'Name'" @itemInput="getData" />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <todo-text :label="'Description'" @itemInput="getData" />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <todo-select :label="'isDone'" :todoType="doneType" @itemInput="getData" />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <todo-select :label="'Priority'" :todoType="priorityType" @itemInput="getData" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="saveData"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from "vuex";

import TodoSelect from '../atoms/TodoSelect.vue'
import TodoText from '../atoms/TodoText.vue'

import TYPE from '../../utils/constants/index';

export default {
  components: { TodoText, TodoSelect },
  name: 'TodoItem',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      doneType: TYPE.DoneTypes,
      priorityType: TYPE.PriorityTypes,
      selectedTodo: {
        id: 0,
        name: "",
        description: "",
        isdone: "",
        priority: "",
      }
    };
  },
  computed: {
    getEditMode() {
      return this.$store.state.isEdit
    },
    getSelectedTodoItem() {
      return this.$store.state.todoItem
    }
  },
  watch: {
    getEditMode(val) {
      if(val) {
        this.selectedTodo = this.getSelectedTodoItem
      }
    }
  },
  methods: {
    ...mapActions([
      "setTodoItem",
      "setEditTodoList",
      "setEditMode",
      "setEmptySelectedTodoItem"
    ]),
    getData(val) {
      this.selectedTodo[val.label] = val.value
    },
    saveData() {
      console.log('edit mode', this.$store.state.isEdit)
      if(!this.$store.state.isEdit) {
        this.selectedTodo.id = uuidv4()
        this.setTodoItem(this.selectedTodo)
        this.getEmptyData()
        this.setEmptySelectedTodoItem()
        this.closeDialog()
      }else {
        this.setEditTodoList(this.selectedTodo)
        this.setEditMode(false)
        this.getEmptyData()
        this.setEmptySelectedTodoItem()
        this.closeDialog()    
      }

    },
    closeDialog() {
      this.$emit('closeDialog', false)
    },
    getEmptyData() {
      this.selectedTodo = {
        id: 0,
        name: "",
        description: "",
        isdone: "",
        priority: "",
      }
    }
  }
}
</script>

<style>

</style>