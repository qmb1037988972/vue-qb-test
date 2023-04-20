<template>
  <div>
    <new-button value="111"></new-button>
    <new-button value="222"></new-button>
    <new-button v-if="aaa" value="333"></new-button>
    <new-button value="444"></new-button>
    <new-button value="555" className="red"></new-button>
    <new-button value="666"></new-button>
    <new-button value="777" className="blue"></new-button>
    <new-button v-if="bbb" value="888"></new-button>
    <new-button value="999" className="blue"></new-button>
    <button @click="changeButton">...</button>
  </div>
</template>

<script>
import NewButton from '../components/NewButton.vue'
export default {
  name: 'ExHome',
  components: {
    NewButton
  },
  data() {
    return {
      aaa: false,
      bbb: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.aaa = true;
      this.bbb = true;
    }, 5000)
  },
  methods: {
    changeButton() {
      this.aaa = true;
    }
  }
}
</script>

<style>
</style>
