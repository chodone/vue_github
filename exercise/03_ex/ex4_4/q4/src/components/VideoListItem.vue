<template>
  <div @click="pushSelectedVideo" class="video-list-wrap">
    <li class="list-group-item video-item">
      <img :src="imgSrc" alt="">
      <div>{{video.snippet.title}}</div>
    </li>


  </div>
</template>

<script>
export default {
  name:'VideoListItem',
  props: {
    video: Object
  },
  
  computed :{
    imgSrc() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    pushSelectedVideo(){
      this.$emit('selected-video', this.video)
    }
  }

}
</script>

<style>
.detail, .video-list-wrap {
    box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);
}



</style>