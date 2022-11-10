<template>
  <div id="app">
    <h1 class="text-primary">
      SSAFY TUBE
    </h1>

    <SearchBar @search-input="searchVideo"/>
    <div>

      <VideoDetail v-if="isSelectedVideo" :selectedVideo="selectedVideo" />
      <img v-else src="./assets/noResult.png" alt="">
      <VideoList :videos="videos" @selected-video="onSelectedVideo"/>
      
    </div>
    
    <!-- <div v-if="this.selectedVideo">
      <iframe id="player" type="text/html" width="640" height="360"
          :src="imgSrc"
          frameborder="0">
      </iframe>  
    </div> -->

  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar'
import VideoList from '@/components/VideoList'
import VideoDetail from '@/components/VideoDetail'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      isSelectedVideo: false,
      selectedVideo: null

    }
  },

  computed: {
    // imgSrc() {
    //   console.log(this.selectedVideo)
    //   if(this.selectedVideo){
    //     return `http://www.youtube.com/embed/ + ${this.selectedVideo.id.videoId} ` 
    //   }
    //   return ''
    // } 

  },
  methods: {
    onSelectedVideo (selectedVideo) {
      this.selectedVideo = selectedVideo
      this.isSelectedVideo = true
    },
    searchVideo(searchInput) {

      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: process.env.VUE_APP_YOUTUBE_API_KEY,
          q : searchInput,
          part: 'snippet',
          type: 'video'
        }
      })
        .then((res) => {
          this.videos = res.data.items
          // if(this.videos.length === 0){

          //   this.videos.push(res.data.items)
          // }
          // else {
          //   this.videos = []
          //   this.videos.push(res.data.items) 
          // }
          
          
        })
        .catch((error) => {
          console.log(error)
        }) 

    }
  },
  // isSelectedVideo() {
  //   return Object.keys(this.selectedVideo).length
  // },
  created() {
    this.searchVideo('ssafy')
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
