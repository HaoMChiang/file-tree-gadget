
function App() {
  return (
    <div>
      <Folder name='Desktop'>
        <File name='cat.png' />
        <File name='dog.jpeg' />
      </Folder>
      <Folder name='Applications' />
    </div>
  );
}

const Folder = (props) => {
  return (
    <div>
      {props.name}
      <div style={{marginLeft: '17px'}}>
        {props.children}
      </div>
    </div>
  );
}

const File = (props) => {
  return (
    <div>
      {props.name}
    </div>
  );
}

export default App;
