import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaomapWrite() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=75ce13618a2a3161330793fa9b482a47&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.48535119467572,
            126.90157254106144
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          37.48535119467572,
          126.90157254106144
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            console.log(latlng);
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            //   var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            //   message += "경도는 " + latlng.getLng() + " 입니다";

            //   var resultDiv = document.getElementById("clickLatlng");
            //   resultDiv.innerHTML = message;
          }
        );
      });
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=75ce13618a2a3161330793fa9b482a47"
        ></script>
      </Head>
      <div id="map" style={{ width: "384px", height: "292px" }}></div>
    </>
  );
}
