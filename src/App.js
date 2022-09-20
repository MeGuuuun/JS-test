
import './App.css';
// import
import TableOfContent from './components/TableOfContent.js';
import Subject from './components/Subject.js';
import Content from './components/Content';
import {useState} from 'react'; // useState import 하기 

function App() {

  const [mode, setMode] = useState("welcome"); //페이지에 처음 접속 했을 때 상태를 welcome으로 설정 
  const [welcome, setWelcome] = useState({title:"welcome", desc:"Hello react"})
  
  //useState 사용 시 [변수명, set변수명] !대괄호 사용 필수 
   const [title,setTitle] = useState("WEB")
   const [subTitle,setSubTitle] = useState("make subTitle with ..")
   const [contents, setContens] = useState([
      {id:0, title:'HTML',desc:"HTML is ,,,"},
      {id:1, title:'CSS',desc:"CSS is ,,,"},
      {id:2, title:'JAVA',desc:"JAVA is ,,,"},
      {id:3, title:'JS',desc:"JS is ,,,"},
   ])

   const [selectedItem, setSelectedItem] = useState(0)

   var _title, _desc = null;

   /// === : type과 value 모두 비교 
   if(mode === 'welcome') { //mode가 welcome 일 때, content의 title과 desc을 아래와 같이 설정 
     _title = welcome.title
     _desc = welcome.desc
   } else if(mode === 'read') { //mode가 read일 때, content의 title과 desc를 아래와 같이 설정.
     _title = contents[selectedItem].title
     _desc = contents[selectedItem].desc
   }

   //페이지가 바뀌면 setMode를 read로 설정 
   const onChangePage = function() {
     setMode('read')
   }

   //클릭이 되면 setMode를 welcome으로 설정 
   const onClick = function() {
     setMode("welcome");
   }


  return (
    <div className="App">
      <header className="App-header">
        <Subject title = {title} subTitle = {subTitle} setMode = {setMode} onClick = {onClick}></Subject>

        <TableOfContent setSelectedItem = {setSelectedItem} onChangePage = {onChangePage} data = {contents}></TableOfContent>

        <Content title = {_title}
          desc = {_desc} >
        </Content>


        
      </header>
    </div>
  );
}

export default App;
