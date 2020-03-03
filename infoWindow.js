function createContent(statusList){
    var content1 = '<div class="overlay_info2">';
          content1 += '    <a href="https://place.map.kakao.com/17600274" target="_blank"><strong>'
    content1 += '나의 현재 위치 : ' + statusList[0]
    content1 += '</strong></a>';
    content1 += '    <div class="desc">';
    content1 += '        <img src="https://user-images.githubusercontent.com/56578913/75620968-09915280-5bd2-11ea-9351-221214a819a5.png" width="60px" height="60px" alt="">';
    content1 += '        <span class="address">'
    content1 += statusList[1]
    content1 += '</span>';
          content1 += '    </div>';
          content1 += '</div>';

      return content1;
  }

  export default createContent;