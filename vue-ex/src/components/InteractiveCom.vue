<template>
  <div class="interactive-com">
    <input type="text" :value="value">
    <button @click="add">add</button>
    <div>
      <button @click="changePer">changePer</button>
      <button @click="changeDataPer">changeDataPer</button>
      <br>
      {{ perList[0] }},{{ perList[1] }},{{ perList[0] + perList[1] }}
      {{ perList }}
      {{ perObj.name }}, {{ perObj.age }}, {{ perObj }}
      <br />
      -------------------------------
      <br />
      {{ dataPerList[0] }},{{ dataPerList[1] }},{{ dataPerList[0] + dataPerList[1] }}
      {{ dataPerList }}
      {{ dataPerObj.name }}, {{ dataPerObj.age }}, {{ dataPerObj }}
      <br />
      -------------------------------
      <br />
      {{ parsePerList[0] }},{{ parsePerList[1] }},{{ parsePerList[0] + parsePerList[1] }}
      {{ parsePerList }}
      {{ parsePerObj.name }}, {{ parsePerObj.age }}, {{ parsePerObj }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InteractiveCom',
  props: {
    value: {
      type: Number
    },
    perList: {
      type: Array
    },
    perObj: {
      type: Object
    },
    perListTow: {
      type: Array
    }
  },
  mounted() {
    console.log(this.value, 'value')
    console.log(this.perList, 'perList')
    console.log(this.perObj, 'Object')
  },
  data() {
    return {
      dataNum: this.num,
      dataPerList: this.perList,
      dataPerObj: this.perObj,
      parsePerObj: JSON.parse(JSON.stringify(this.perObj)),
      parsePerList: JSON.parse(JSON.stringify(this.perList))
    }
  },
  model: {
    event: 'change',
    prop: 'value'
  },
  methods: {
    add() {
      // this.dataNum++
      this.$emit('add')
    },
    changePer() {
      this.$emit('changePer')
    },
    changeDataPer() {
      this.dataPerList[0] = this.perList[0] + 2
      this.dataPerObj.name = 'qb'
      this.dataPerObj.age = this.perObj.age + 1
    }
  }
}
</script>

<style scoped>
</style>
