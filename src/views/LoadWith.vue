<template>
  <div class="import">
    <div v-if="!isLoading">Slides load</div>
    <div v-if="isLoading">
      Loading the slides from url:<br />
      <span>🔗 {{ url }}</span>
    </div>
    <div v-if="onError"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
       isLoading: true,
       onError: false,
       url: null,
    }
  },
  mounted() {
    
      this.url = this.$route.query.url;
    
      if(this.isValidHttpUrl(this.url)) {
        console.log(this.url);
        this.isLoading = true;
        this.importFromUrl();
      } else {
        this.onError = true;
        this.isLoading = false;
      }

  },
  methods: {
    importFromUrl() {
        if(this.url) {
            fetch(this.url)
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem('slides', JSON.stringify(data));
                this.isLoading = false;
                this.onError = false;
                this.$router.push('/');
            });
        }
    },
    isValidHttpUrl(string) {
      let url;
      
      try {
        url = new URL(string);
      } catch (_) {
        return false;  
      }

      return url.protocol === "http:" || url.protocol === "https:";
    }
  }
}
</script>


<style lang="scss" scoped>
.remote {
  height: 100%;
  overflow-y: scroll;
  padding: 30px 0px;
  font-size: 17px;
}
</style>

