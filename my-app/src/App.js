import "./App.css";
// import gptLogo from './asset/chatgpt.svg';
// import addBtn from './asset/add-30.png';
// import msgBtn from './asset/message.svg';
// import home from './asset/home.svg';
// import saved from './asset/bookmark.svg';
// import rocket from './asset/rocket.svg';
function App() {
  return (
    <>
    
    {/* -----------------------------------------------------------------------Start SideBAR---------------------------------------------------------- */}
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src="" className="logo" alt="Logo" /><span className="brand" >ChatGPT</span><br /></div>
              <button className="midBtn"><img src="" alt="" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                <button className="query"><img src="" alt="Query" />What is Programming ?</button>
                <button className="query"><img src="" alt="Query" />How to use an API ?</button>
              </div>
            </div>
            <div className="lowerSide">
                <div className="listItems"><img src="" alt="" className="listitemsImg" />Home </div>
                <div className="listItems"> <img src="" alt="" className="listitemsImg" />Saved</div>
                <div className="listItems"><img src="" alt="" className="listitemsImg" />Upgrade to Pro </div>
             </div>
          
         
        </div>
    {/*-------------------------------------------------------------------------End sidebar---------------------------------------------------------- */}
    {/* -------------------------------------------------------------------Start Main ----------------------------------------------------------- */}
       
       <div className="main">
          
          
        </div>
         {/* -------------------------------------------------------------------End Main ----------------------------------------------------------- */}
        
      </div>
    </>
  );
}

export default App;

