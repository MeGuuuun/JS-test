// function - !use capital letter
// create function with error
// 애로우 다음에 { return () }를 쓰지 않고 바로 ()를 써서 return 생략 가능 
const Content = (props) => (
    <article>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  )

  export default Content