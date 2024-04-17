// homeController.js
"use strict";

/**
 * Listing 10.2 (p. 159)
 * 컨트롤러 동작에 의한 뷰 렌더링
 */
exports.respondWithName1; // @TODO: 사용자 정의 EJS 뷰를 사용한 응답

/**
 * Listing 10.3 (p. 160)
 * 뷰로의 라우트 매개변수 전달
 */
exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render('index', {
        name: paramsName, //paramsName 은 name에 저장 name은 인덱스 page에서 쓸 수 있는것
        people: {
            first: {
                name: "Mary",
                city: "Jeongju"
            },
            second: {
                name: "Goeun",
                city: "cheongju"
            }
        }
    });
}; // @TODO: 요청 매개변수로 지역 변수 할당. 그다음 렌더링된 뷰로 지역 변수 전달.

// 중간고사때 이거 써야한다. exports.getHome;