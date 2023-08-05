// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const File = ({ name }) => {
    const getFileIcon = () => {
        const ext = name.split(".").pop().toLowerCase();
        if (ext === "jpg" || ext === "png" || ext === "gif") {
          return "fas fa-file-image"; // Font Awesome class for image icon
        } else if (ext === "mp4" || ext === "avi" || ext === "mov") {
          return "fas fa-file-video"; // Font Awesome class for video icon
        } else {
          return "fas fa-file-lines"; // Font Awesome class for default file icon
        }
      };
    
      return (
        <div style={{ marginLeft: "14px" }}>
          <i className={getFileIcon()}></i> {name}
        </div>
      );
};
  
const Folder = ({ name, children }) => {
    const { useState } = React;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ marginLeft: "14px" }}>
        <div onClick={toggleOpen}>
        {isOpen ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>} {name} 
        </div>
        {isOpen && children.map((child, index) => <TreeNode key={index} node={child} />)}
        </div>
    );
};
  
const TreeNode = ({ node }) => {
    if (typeof node === "string") {
        return <File name={node} />;
    } else if (typeof node === "object" && node !== null) {
        const folderName = Object.keys(node)[0];
        const folderContents = node[folderName];
        return (
        <Folder name={folderName} children={folderContents} />
        );
    } else {
        return null;
    }
};
  

const jsonTree = [
    {
        "Documents": [
        "Document1.jpg",
        "Document2.jpg",
        "Document3.jpg",
        ],
    },
    {
        "Desktop": [
        "Screenshot1.jpg",
        "videopal.mp4",
        ],
    },
    {
        "Downloads": [
        {
            "Drivers": [
            "Printerdriver.dmg",
            "cameradriver.dmg",
            ],
        },
        {
            "Applications": [
            "Webstorm.dmg",
            "Pycharm.dmg",
            "FileZila.dmg",
            "Mattermost.dmg",
            ],
        },
        "chromedriver.dmg",
        ],
    },
];

const App = () => {
    return (
        <div>
        {jsonTree.map((node, index) => (
            <TreeNode key={index} node={node} />
        ))}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));