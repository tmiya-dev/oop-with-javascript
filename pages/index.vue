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
        'さしすせそ'.split(''),
        'たちつてと'.split(''),
        'なにぬねの'.split(''),
        'はひふへほ'.split(''),
        'まみむめも'.split(''),
        'やゆよ'.split(''),
        'らりるれろ'.split(''),
        'わをん゛゜'.split(''),
        '削小'.split(''),
      ]
    }
  }
  
}
</script>

<style lang="scss">

.main-content {
  max-width: 95%;
  margin: 40px auto;

}

.input-text {
  border: 1px solid #ddd;
  padding: 20px 10px;
}

</style>