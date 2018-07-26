//이 컴포넌트는 우리의 웹어플리케이션에 BrowserRouter를 적용합니다.
//나중에 리덕스를 적용 하게 될 때,
// 여기서 Provider 를 통하여 프로젝트에 리덕스를 연결시켜줍니다.
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;