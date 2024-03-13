import React, { useState } from 'react'
// import ReactPlayer from 'react-player';

export const AddSong = () => {
    // const audiourl='https://streamingv2.shoutcast.com/70sdisco'
    //song upload
    const [selectedSong,setSelectedSong]=useState(null);
    let uploadedSong=null
    const handleFile1 =() =>{
        console.log("select song");
        const songData = new FormData();
        songData.append("song",selectedSong);

        fetch("http://localhost:8080/file/songuplaod",{
            method: 'POST',
            body: songData,
            dataType:"jsonp"
        })
        .then(response => response.text())
        .then(text => {
            uploadedSong = text
            console.log(text);
        })
    }

    //image upload
    const [selectedImage, setSelectedImage] = useState(null);
    let uploadedImage=null

    const handleFile = () => {
        console.log("hello world")
        const formData = new FormData();
        formData.append("file", selectedImage);
        fetch("http://localhost:8080/file/upload", {
            method: 'POST',
            body: formData,
            dataType: "jsonp"
        })
            .then(response => response.text())
            .then(text => {
                uploadedImage=text
                console.log(text)
                alert("imageuploded")
            })
    }


    //add detils
    const [file, setFile] = useState({
        songname: "",
        languge: "",
        artistname:"",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFile({ ...file, [name]: value })
        console.log(name, value);
    }

    const Addfiles = () =>{
        const files = {
            songName: file.songname,
            language: file.languge,
            artistName:file.artistname,
            image:uploadedImage,
            song:uploadedSong
        }
        console.log("===Files====", JSON.stringify(files));
        fetch("http://localhost:8080/file/addfile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(files)
        })
        .then(response => {
            if (response.ok) {
                return(
                     response.json()      
                );   
            } else {
                throw new Error(`Server returned status: ${response.status}`);
            }
        })
    }

    return (
        <div>
          
            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>RemoveImage</button>
                    <button onClick={() => { handleFile() }}>UploadImage</button>
                </div>
            )}
            {selectedSong && (
                <div>
                    <audio controls>
                        <source src={URL.createObjectURL(selectedSong)} type='audio/mpeg' />
                    </audio>
                    <button onClick={() => setSelectedSong(null)}>RemoveSong</button>
                    <button onClick={() => { handleFile1() }}>UploadSong</button>
                </div>
            )}
            <br />
            <br />
           
           <center>
                <form className='bg-info'>
                    <input type="text" name='songname' value={file.songname} onChange={handleChange} placeholder='enter a song name' />
                    <input type="text" name='languge' value={file.languge} onChange={handleChange} placeholder='enter a language' />
                    <input type="text" name='artistname' value={file.artistname} onChange={handleChange} placeholder='enter a artist name' />
                    <input type="file" name="image"  onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }} /><br /><br />
                    <input type="file" accept='audio/*' name="song"  onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedSong(event.target.files[0]);
                    }} /><br /><br />
                    <button onClick={() => {Addfiles()}}>Add</button>
                    {/* <ReactPlayer url={audiourl} playing controls /> */}
                </form>
           </center>
        </div>
    )
}
