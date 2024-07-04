import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import theme from "../../../utils/theme";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DropzoneStyle from "./DropzoneStyle";

function Dropzone({acceptedFiles, setAcceptedFiles, error}) {
    const [onDragEnter, setOnDragEnter] = useState(false);
    const {getRootProps, getInputProps} = useDropzone({
        maxFiles: 1,
        accept: {
            'text/html': ['.tsv'],
        },
        onDrop: (files, rejectedFiles) => {
            if (rejectedFiles.length > 0) {
                setOnDragEnter(false);
            } else {
                setAcceptedFiles([files[0]]);
                setOnDragEnter(false);
            }
        },
        onDragEnter: () => {
            setOnDragEnter(true);
        },
        onDragLeave: () => {
            setOnDragEnter(false);
        }
    });

    const removeSolution = (index) => {
        const updatedFiles = acceptedFiles.filter((file, i) => i !== index);
        setAcceptedFiles(updatedFiles);
    };

    const convertBytesToMegabytes = (bytes) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    const files = acceptedFiles.map((file, index) => (
        <li className="dropzoneFile" key={file.path}>
            <FolderOutlinedIcon style={{ color: theme.colors.green700, height: '46', width: '46'}}></FolderOutlinedIcon>
            <div>
                <p className="dropzoneFileFileName">{file.path}</p>
                <p className="dropzoneFileFileSize">{convertBytesToMegabytes(file.size)} MB</p>
            </div>
            <CancelOutlinedIcon className="dropzoneFileRemove" style={{ color: theme.colors.green700}} onClick={() => removeSolution(index)}></CancelOutlinedIcon>
        </li>
    ));

    return (
        <DropzoneStyle width="100%">
            <section className="container" id="dropzoneWrapper">
                <div {...getRootProps()} className={`dropzoneArea ${onDragEnter ? 'onDragEnter' : ''} ${error ? 'onError' : ''}`}>
                    <input {...getInputProps()} />
                    <DownloadForOfflineOutlinedIcon style={{ color: theme.colors.green700, width: '50px', height: '50px' }}></DownloadForOfflineOutlinedIcon>
                    <p className="dropzoneText1">Drag & Drop or <span style={{ color: theme.colors.green700}}>Choose file</span> to upload</p>
                    <p className="dropzoneText2">Supported formats: <span style={{ color: theme.colors.green700}}>.tsv</span></p>
                </div>
                {acceptedFiles.length > 0 && (
                    <aside className="dropzoneFilesWrapper">
                        <ul className="dropzoneFiles">{files}</ul>
                    </aside>
                )}
            </section>
        </DropzoneStyle>
    );
}

export default Dropzone;