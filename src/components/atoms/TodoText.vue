<template>
  <div>
    <v-text-field :label="label" v-model="inputText"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'TodoText',
  props: {
    label: {
      type: String,
      default: ""
    },
    inputData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputText: null
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
    inputText(val) {
      this.$emit('itemInput', {label: this.label.toLowerCase(), value: val})
    },
    getTodoItem(val) {
      this.inputText = val[this.label.toLowerCase()]
    },
    /* getEditMode(val) {
      console.log('select edit', val)
      if (val) {
        let item = this.getTodoItem
        this.inputText =  item[this.label.toLowerCase()]
      }else {
        this.inputText = null
      }
    } */
  }
}
</script>

<style>

</style>