<template>
  <div class="main-content">
    <div id="input-field" class="input-text">
      <span class="finished">{{ finished }}</span>
      <span class="unfinished">{{ unfinished }}</span>
    </div>
    <ul id="conversion-results">
      <li v-for="result in results">{{ result }}</li>
    </ul>
    <div id="keyboard">
      <Keyboard
        :keys="keys"
        @click="appendToUndefined"
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
      results: [
        
      ],
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
      ],
      finished: '',
      unfinished: ''
    }
  },
  methods: {
    appendToUndefined (char) {
      this.unfinished += char;
      const encoded = encodeURI(this.unfinished);
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://www.google.com/transliterate?langpair=ja-Hira|ja&text=' + encoded, true);
      xhr.send();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
          const responed = JSON.parse(xhr.responseText);
          console.dir(responed);
        }
      }
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
  padding: 10px;
  min-height: 30px;
  font-size: 20px;
}

</style>