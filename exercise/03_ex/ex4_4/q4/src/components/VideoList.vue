<template>
  <div class="list-group">
    <VideoListItem v-for="video in videos" :key="video.id.videoId" :video=video @selected-video="pushSelectedVideo"/>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {

  name: 'VideoList',
  components:{
    VideoListItem,
  },
  props: {
    videos: Array
  },
  methods: {
    pushSelectedVideo(selectedVideo) {
      this.$emit('selected-video', selectedVideo)
    }
  }
}
</script>

<style>

</style>