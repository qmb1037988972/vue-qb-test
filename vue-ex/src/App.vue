<template>
  <div>
    <!-- <home></home> -->
    <!-- <if-test></if-test> -->
    <tableText></tableText>
    /**
      


     */
     <div id="blocklyDiv"></div>
  </div>
</template>

<script>
// import Home from './page/ExHome.vue'
// import IfTest from './page/IfTest.vue'
import tableText from './page/tableText.vue'
import Blockly from 'blockly'
export default {
  name: 'App',
  components: {
    // Home,
    // IfTest,
    tableText
  },
  data() {
    const toolbox = {
      "kind": "flyoutToolbox",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_repeat_ext"
        },
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "math_number"
        },
        {
          "kind": "block",
          "type": "math_arithmetic"
        },
        {
          "kind": "block",
          "type": "text"
        },
        {
          "kind": "block",
          "type": "text_print"
        },
      ]
    }
    return {
      toolbox: toolbox,
    }
  },
  mounted() {
    const workspace = Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
    var json = Blockly.serialization.workspaces.save(workspace);
    console.log(json, 'json')
  }
}
</script>
<style>
  html, body{
    margin: 0px;
  }
</style>
