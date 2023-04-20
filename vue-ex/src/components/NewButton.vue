<template>
  <div class="new-button">
    <button :class="className">{{ value }}</button>
    <input type="text" v-model="dirValue">
  </div>
</template>

<script>
export default {
  name: 'InteractiveCom',
  props: {
    className: {
      type: String
    },
    value: {
        type: String
    }
  },
  watch: {
    className(val, oldVal) {
        console.log(val, oldVal, 'watch')
    }
  },
  data() {
    return {
      dirValue: '123'
    }
  },
  directives: {
    amountTh: {
      bind() {
        
      }
    }
  },
  mounted() {
    console.log(this.value, 'value')
  },
  methods: {
  }
}
</script>

<style scoped>
.red {
    color: red;
}
.blue {
    color: blue;
}
</style>
