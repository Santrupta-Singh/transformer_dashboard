import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Navbar from './navbar';

const membersData = {
    members: [
        { id: 1, name: 'john', Email: 'johndoe@email', Role: 'admin', Phoneno: '998617361876' },
        { id: 2, name: 'harry', Email: 'johndoe@email', Role: 'subhead', Phoneno: '998617361876' },
        { id: 3, name: 'jake', Email: 'johndoe@email', Role: 'head', Phoneno: '998617361876' },
        { id: 4, name: 'jane', Email: 'johndoe@email', Role: 'subadmin', Phoneno: '998617361876' },
    ],
};

const Teampage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    const handleDelete = (member) => {
        setModalOpen(true);
        setSelectedMember(member);
    };

    const handleCancel = () => {
        setModalOpen(false);
        setSelectedMember(null);
    };

    const handleConfirmDelete = () => {
        // Handle the delete action here (remove the member from the array or make an API call)
        console.log(`Deleting member with id ${selectedMember.id}`);
        setModalOpen(false);
        setSelectedMember(null);
    };

    return (
        <div>
            <Navbar />
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Are you sure you want to delete this member?</p>
                        <button onClick={handleConfirmDelete}>Yes</button>
                        <button onClick={handleCancel}>No</button>
                    </div>
                </div>
            )}

            <div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: '#182237',
                        borderRadius: '8px',
                    }}
                >
                    <div>
                        <strong>Name</strong>
                    </div>
                    <div>
                        <strong>Email</strong>
                    </div>
                    <div>
                        <strong>Role</strong>
                    </div>
                    <div>
                        <strong>Phone</strong>
                    </div>
                    <div>
                        <strong>Action</strong>
                    </div>
                </div>
                {membersData.members.map((member, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '10px',
                            margin: '10px',
                            backgroundColor: '#182237',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <div>{member.name}</div>
                        <div>{member.Email}</div>
                        <div>{member.Role}</div>
                        <div>{member.Phoneno}</div>
                        <div>
                            <FaTrash
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleDelete(member)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teampage;
