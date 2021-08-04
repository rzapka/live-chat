<template>
  <div class="chat-window" ref="chatWindow">
    <div v-if="error"> {{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created">{{ doc.created }}</span>
        <span class="name">{{ doc.name }}:</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import {computed, onUpdated, ref} from "vue";
import {formatDistanceToNow} from "date-fns";


export default {
  name: "ChatWindow",
  setup() {
    const {documents, error} = getCollection('messages')
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.created.toDate())
          return {...doc, created: time}
        })
      }
    })
    const chatWindow = ref(null);
    onUpdated(() => {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight
    })
    return {documents, error, formattedDocuments, chatWindow}
  }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
    max-height:50vh;
    overflow: auto;
  }
  .single {
    margin: 18px 0;
  }
  .created {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-width: 400px;
  }
</style>