import { useEffect, useState } from "react";
import { db } from '../firebase-config'
import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";


function AddNotes() {

    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [viewnotes, setViewnotes] = useState([]);

    useEffect(() => {
        getViewnotes();
    }, [])

    const addNotes = async () => {
        const docRef = await addDoc(collection(db, "rmad_notes"), {
            title: title,
            notes: notes,
            current_date: date,
        }).then(res => {
            alert("Note is Added Succesfully !")
        }).catch(err => {
            alert("Failed Attempt !")
        });
    }

        const getViewnotes = async () => {
            const querySnapshot = await getDocs(collection(db, "rmad_notes"));
            setViewnotes(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
        }
       
        return (
            <div>

                <div className="container">
                    <div className="row">

                        <h2 style={{ color: "green", marginTop: 20 }}>Please Enter Your Notes Here To Save.....</h2>
                        <br></br>

                        <div className="col-6">
                            <div className="mb-3">
                                <br></br>
                                <label for="exampleFormControlInput1" className="form-label">Title of the Note:</label>
                                <input type="text" className="form-control" value={title} onChange={(e) => {
                                    setTitle(e.target.value)
                                }} id="exampleFormControlInput1" placeholder="Enter Your Note Title Here!"></input>
                            </div>

                            <div className="mb-3">
                                <br></br>
                                <label for="exampleFormControlTextarea1" className="form-label" >Your Note:</label>
                                <textarea className="form-control" value={notes} onChange={(e) => {
                                    setNotes(e.target.value)
                                }} rows="3" placeholder="Type Your Note Here!"></textarea>
                            </div>

                            <br></br>
                            <p>Date of the note added: {date}</p>

                            <br></br>
                            <button type="button" className="btn btn-success" onClick={addNotes}>Save Note</button>
                        </div>

                        <div className="col-6">

                            <table className="table mt-5">
                                <tbody>
                                    {viewnotes.map(viewnote => {
                                        return (
                                            <tr>

                                                <div className="card w-100">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{viewnote.title}</h5>
                                                        <p className="card-text">{viewnote.notes}</p>
                                                        <p className="card-text">Date of the note added: {viewnote.current_date}</p>
                                                        <button type="button" className="btn btn-danger">Delete</button>
                                                    </div>
                                                </div>

                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>

                        </div>


                    </div>

                </div>
            </div>
        );
    }




    export default AddNotes;