window.onload = function () {
  mainrollimg();
  eventrollimg();
};

function seeMore(){
window.location.href="/lastPage";
}
function megaOrder(){
//window.location.href="/orderpage";
}
function payCard(){
window.location.href="/payCard";
}
function mainPage(){
window.location.href="/main";
}
// 이미지 롤링을 처리하는 함수
function mainrollimg() {
  // 이미지 목록 요소들을 가져옴
  let eImgList = document.getElementsByClassName("eImg-list");

  // 현재 이미지의 인덱스를 표시하는 입력 요소를 가져옴
  let eIndex = document.getElementById("eIndex");

  // 이미지 목록이 비어있지 않은 경우에만 실행
  if (eImgList.length > 0) {
    // 2초마다 실행되는 타이머 설정
    setInterval(function () {
      // 현재 인덱스의 값을 가져옴
      let eIndexValue = Number(eIndex.value);

      // 현재 인덱스가 유효한 범위 내에 있는 경우
      if (eIndexValue >= 0 && eIndexValue < eImgList.length) {
        // 현재 인덱스의 이미지 파일명을 가져옴
        let eImageName = eImgList[eIndexValue].value;

        // 다음 이미지로 인덱스를 증가시킴
        eIndex.value = String(eIndexValue + 1);

        // 순수 JavaScript로 이미지 소스 변경
        // 주의: 해당 요소의 ID가 'roll'이며, 이미지가 표시되는 img 요소여야 함
        document.getElementById("roll").src = eImageName;
      } else {
        // 인덱스가 유효 범위를 벗어나면 첫 번째 이미지로 되돌림
        eIndexValue = 0;
        eIndex.value = 0;
      }
    }, 2000); // 2초(2000밀리초) 간격으로 실행
  }
}

// 이미지 롤링을 처리하는 함수
function eventrollimg() {
  // 이미지 목록 요소들을 가져옴
  let bImgList = document.getElementsByClassName("bImg-list");

  // 현재 이미지의 인덱스를 표시하는 입력 요소를 가져옴
  let bIndex = document.getElementById("bIndex");

  // 이미지 목록이 비어있지 않은 경우에만 실행
  if (bImgList.length > 0) {
    // 2초마다 실행되는 타이머 설정
    setInterval(function () {
      // 현재 인덱스의 값을 가져옴
      let bIndexValue = Number(bIndex.value);

      // 현재 인덱스가 유효한 범위 내에 있는 경우
      if (bIndexValue >= 0 && bIndexValue < bImgList.length) {
        // 현재 인덱스의 이미지 파일명을 가져옴
        let bImageName = bImgList[bIndexValue].value;

        // 다음 이미지로 인덱스를 증가시킴
        bIndex.value = String(bIndexValue + 1);

        // 배경 이미지를 변경
        // 주의: 해당 요소의 ID가 'secimg'여야 함
        document.getElementById("secimg").style.backgroundImage =
          "url('" + bImageName + "')";
      } else {
        // 인덱스가 유효 범위를 벗어나면 첫 번째 이미지로 되돌림
        bIndexValue = 0;
        bIndex.value = 0;
      }
    }, 2000); // 2초(2000밀리초) 간격으로 실행
  }
}
