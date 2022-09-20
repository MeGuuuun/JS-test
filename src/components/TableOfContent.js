const TableOfContent = (props) => {
    var data = props.data; //app.js로 부터 받아온 contents 저장 
    var list = [] //array 
    var i = 0;

    while(i<data.length){
      list.push(
        <li  key= {data[i].id}>
          <a href={"/content/" + data[i].id}
          data-id = {data[i].id}
            onClick = {
              function (e) {
                e.preventDefault() 
                props.setSelectedItem(e.target.dataset.id)
                props.onChangePage()
              }
            }> {data[i].title}
          </a></li>);
      i = i+1;
    }
  
    return ( //return 안에는 항상 최상위 태그가 있어야 함.
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }

  export default TableOfContent
  // export 해야 import 받을 수 있음 