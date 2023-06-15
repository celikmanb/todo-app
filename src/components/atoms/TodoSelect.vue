<template>
  <div>
    <v-select
      :label="label"
      :items="todoType"
      v-model="inputData"
      @change="changeSelect"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: 'TodoSelect',
  props: {
    label: {
      type: String,
      default: ""
    },
    todoType: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      inputData: null
    };
  },
  computed: {
    getTodoItem() {
      return this.$store.state.todoItem
    },
    getEditMode() {
      return this.$store.state.isEdit
    }
  },
  watch: {
    getTodoItem(val) {
      this.inputData =  val[this.label.toLowerCase()]
    },
    /* getEditMode(val) {
      
      if (val) {
        let item = this.getTodoItem
        this.inputData =  item[this.label.toLowerCase()]
      }else {
        this.inputData = null
      }
    } */
  },
  methods: {
    changeSelect(val) {
      this.$emit('itemInput', {label: this.label.toLowerCase(), value: val})
    }
  }
}
</script>

<style>

</style>