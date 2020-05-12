<template>
  <div class="main-content">
    <div id="input-field" class="input-text">
      <span class="finished">{{ finished }}</span>
      <span class="unfinished">{{ unfinished }}</span>
    </div>
    <ul id="conversion-results">
      <li v-for="result in results" @click="appendToFinished(result)">{{ result }}</li>
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
  watch: {
    unfinished: function(newVal, oldVal) {
      if (newVal.length === 0) {
        this.results = [];
      } else {
        const encoded = encodeURI(newVal);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://www.google.com/transliterate?langpair=ja-Hira|ja&text=' + encoded, true);
        xhr.send();
        const component = this
        xhr.onreadystatechange = function() {
          if(xhr.readyState === 4 && xhr.status === 200) {
            const respond = JSON.parse(xhr.responseText);
            component.results = respond[0][1]
          }
        }
      }
    }
  },
  methods: {
    appendToUndefined (char) {
      this.unfinished += char;
    },
    appendToFinished(result) {
      this.finished += result;
      this.unfinished = '';
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
