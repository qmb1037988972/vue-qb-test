<template>
  <div>
    <interactive-com
      v-model="num"
      @add="add"
      @changePer="changePer"
      :perList="perList"
      :perObj="perObj"
      :perListTwo="perList2"
    />
    <input type="text" v-model="num">
    <div>
      {{ perList[0] }},{{ perList[1] }},{{ perList[0] + perList[1] }}
      {{ perList }}
      <button @click="changePer">changePer</button>
      {{ perObj.name }}, {{ perObj.age }}, {{ perObj }}
    </div>
  </div>
</template>

<script>
import InteractiveCom from '../components/InteractiveCom.vue'
export default {
  name: 'ExHome',
  components: {
    InteractiveCom
  },
  data() {
    return {
      num: 1,
      perList: [4, 5, 9, 11],
      perObj: {
        name: 'xiaoming',
        age: 13
      },
      perList2: [
        {
          name: 'xiaohong',
          age: 14
        },
        {
          name: 'xiaodong',
          age: 18
        }
      ]
    }
  },
  methods: {
    add() {
      this.num++
    },
    changePer() {
      this.perList[0] = this.perList[0] + 2
      this.perObj.name = 'qb'
      this.perObj.age = this.perObj.age + 1
    }
  }
}
</script>

<style>
</style>
