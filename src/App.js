import {useState} from 'react'

function App() {
  return (
    <div>
      <Folder name='Desktop'>
        <Folder name='music'>
          <File name='all_star.mp4' />
          <File name='express_file.mp4' />
        </Folder>
        <File name='cat.png' />
        <File name='dog.jpeg' />
      </Folder>
      <Folder name='Applications' />
    </div>
  );
}

const Folder = (props) => {
  
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    setIsOpen(!isOpen) ;
  }
  
  return (
    <div>
      <span onClick={handleClick}>
        <i className="green folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{marginLeft: '17px'}}>
        {isOpen ? children : null}
      </div>
    </div>
  );
}

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'music',
    png: 'file image',
    jpeg: 'file image outline'
  };

  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
}

export default App;
