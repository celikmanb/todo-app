import Vue from 'vue'
import Vuex from 'vuex'
// import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItem: {
      id: "",
      name: "",
      description: "",
      isdone: "",
      priority: "",
    },
    todoList: [],
    isEdit: false
  },
  mutations: {
    setSelectedTodoItem(state, val) {
      console.log("STATE SELECT")
      state.todoItem = val
    },
    setEmptySelectedTodoItem(state) {
      state.todoItem = {
        id: "",
        name: "",
        description: "",
        isdone: "",
        priority: "",
      }
    },
    setTodoItem(state, val) {
      console.log("STATE SET")
      state.todoList.push(val)
    },
    setEditTodoList(state, val) {
      console.log("STATE EDİT")
      let todoExist = state.todoList.findIndex(item => item.id == val.id)
      if (todoExist == -1) {
        return "Not Found"
      }
      state.todoList[todoExist] = val
    },
    setEditMode(state, val) {
      state.isEdit = val 
    },
    deleteTodoItem(state, val) {
      let todoExist = state.todoList.findIndex(item => item.id == val.id)
      if (todoExist > -1) {
        state.todoList.splice(todoExist, 1);
      }
    }
  },
  actions: {
    setTodoItem(context, payload) {
      context.commit('setTodoItem', payload)
    },
    setEditTodoList(context, payload) {
      context.commit('setEditTodoList', payload)
    },
    setEditMode(context, payload) {
      context.commit('setEditMode', payload)
    },
    setSelectedTodoItem(context, payload) {
      context.commit('setSelectedTodoItem', payload)
    },
    setEmptySelectedTodoItem(context) {
      context.commit('setEmptySelectedTodoItem')
    },
    deleteTodoItem(context, payload) {
      context.commit('deleteTodoItem', payload)
    },

  },
  modules: {
  }
})
