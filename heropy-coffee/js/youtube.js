// Youtube IFrame API => 비동기 로드
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: 'Tdwetb0Mvyc', // 최초 재생 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생
      loop: true, // 반복 재생
      playlist: 'Tdwetb0Mvyc' // 반복 재생 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }
  })
}
