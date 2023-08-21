import {useEffect} from 'react';

// use 로 시작 되는 것 : hook (훅) - 함수형 컴포넌트에서 클래스형 컴포넌트의 기능을 지원하도록 적용
    // 컴포넌트의 상태를 제어 할 수 있도록 리엑트 16버전부터 지원된다.
    // useState : 값이 수정되면 다시 랜더링 -> const [name , setName] = useState("");

    // useEffect : 값(배열)이 수정/변경 되면 콜백함수를 호출 -> useEffect (콜백함수 , 배열);

// 리액트 컴포넌트 생명주기 : 생성(마운트) --> 수정(랜더링) --> 삭제(언마운트)

export default function Event () {

    useEffect(
        //함수
        () => {
            return () => {
                console.log("Event 컴포넌트 언마운트")
            };
        }
        , []
    );

    return <div>현재 카운트는 짝수입니다.</div>

}