import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Navbar from './navbar';
import './css/modal.css';

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
    const [addTeamOpen, setAddTeamOpen] = useState(false);
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        role: '',
        phoneno: '',
    });

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

    const handleAddTeam = () => {
        setAddTeamOpen(true);
    };

    const handleCancelAddTeam = () => {
        setAddTeamOpen(false);
        setNewMember({
            name: '',
            email: '',
            role: '',
            phoneno: '',
        });
    };

    const handleConfirmAddTeam = () => {
        // Handle adding the new team member (e.g., update the state or make an API call)
        console.log('Adding new team member:', newMember);
        setAddTeamOpen(false);
        setNewMember({
            name: '',
            email: '',
            role: '',
            phoneno: '',
        });
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


            {addTeamOpen && (
                <div className="modal-overlay">
                    <div className="larger-modal">
                        <p>Add a new team member</p>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newMember.name}
                                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                            />
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Email"
                                value={newMember.email}
                                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                            />
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Role"
                                value={newMember.role}
                                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                            />
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Phone"
                                value={newMember.phoneno}
                                onChange={(e) => setNewMember({ ...newMember, phoneno: e.target.value })}
                            />
                        </div>
                        <div className="button-wrapper">
                            <button onClick={handleConfirmAddTeam}>Add</button>
                            <button onClick={handleCancelAddTeam}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className='add-button' >
                <button onClick={handleAddTeam}>Add Team</button>

                {/* ... (existing code) */}
            </div>

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
