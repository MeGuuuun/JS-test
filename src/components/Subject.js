// props 사용 시 대괄호 사용 
function Subject(props) {
    return (
      <header>
        <h1>
          <a href = '/pure.html' onClick = {
            function(e) { // e event 
              e.preventDefault(); // prevent default event <a>
              props.setMode("read") // flag //subject의 버튼이 눌리는 이벤트가 발생하면 setMode를 read로 반환 
            }
          }> {props.title} </a>
        </h1>

        {props.subTitle}
        
        {/* html 버튼 태그로 버튼 생성 후 props로 전달 받은 onClick -> setMode('welcome') 으로 모드 변경 됨 */}
        <button onClick= {props.onClick}> OK </button>
      </header>
    )
  }

  export default Subject