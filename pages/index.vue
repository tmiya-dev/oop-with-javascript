<template>
  <div class="main-content">
    <div id="input-field" class="input-text"></div>
    <div id="conversion-results"></div>
    <div id="keyboard">
      <Keyboard
        :keys="keys"
      >
      </Keyboard>
    </div>
  </div>
</template>

<script>
import Keyboard from '../components/Keyboard';
export default {
  components: {
    Keyboard
  },
  data () {
    return {
      keys: [
        'あいうえお'.split(''),
        'かきくけこ'.split(''),
      ]
    }
  }
  
}
</script>

<style lang="scss">

.main-content {
  width: 80%;
}
.input-text {
  border: 1px solid #ddd;
}
</style>