<template>
  <div>
    <v-text-field :label="label" v-model="inputText" @input="changeInput"></v-text-field>
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
    getTodoItem(val) {
      this.inputText = val[this.label.toLowerCase()]
    }
  },
  methods: {
    changeInput() {
      this.$emit('itemInput', {label: this.label.toLowerCase(), value: this.inputText})
    }
  }
}
</script>

<style>

</style>