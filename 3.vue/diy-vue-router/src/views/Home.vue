<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    this. is a home page
    <br>
   111 {{a.b}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      a:{}
    }
  },
  created(){
    this.a.b=1
  },
  beforeMount() {
      this.a.b=4
  },
   mounted() {
    this.a.b=2
  }
}
</script>
