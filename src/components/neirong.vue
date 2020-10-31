<!--
@Time : 2020/10/27 4:07 下午
@Author : yekong
@File : neirong.vue
@Software : PhpStorm
-->
<template>
<div>
  <template v-for="(item, index) in contentList">
    <span :key="index" v-if="item.name === 'text'">{{ item.text }}</span>
    <img v-else-if="item.name === 'img'" :src="item.src" width="20px" height="20px" :key="index"/>
  </template>
</div>
  <!-- <div class="chat-bubble">
    <div class="message-content" :class="isMine ? 'message-send' : 'message-received'">
      <template v-for="(item, index) in contentList">
        <span :key="index" v-if="item.name === 'text'">{{ item.text }}</span>
        <img v-else-if="item.name === 'img'" :src="item.src" width="20px" height="20px" :key="index"/>
      </template>
    </div>
  </div> -->
</template><script>
import {decodeText} from "@/utils/decodeText";

export default {
  name: "neirong",
  props: {
    payload: {
      type: Object,
      required: true
    },
    isMine: {
      type: Boolean
    }
  },
  computed: {
    contentList() {
      return decodeText(this.payload)
    }
  }
}
</script>

<style scoped>

</style>
