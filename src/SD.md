Second DAY
==========

componet => html을 반환하는 함수

JSX => react에 특화된 개념 중 하나, javascript 안의 html로 설명됨.

<pre>
<code>
```
ReactDOM.render(
  <React.StrictMode>
    <App /><Potato />,
  </React.StrictMode>,
  document.getElementById('root')
);
```
</code>
</pre>

위 코드는 react application이 하나의 componet 만을 rendering 해야하는데 두 개의 component(app, potato)를 rendering 하기 때문에 오류가 남.

> 그 해결책으로, App.js에 Potato를 import 하기로 함.





