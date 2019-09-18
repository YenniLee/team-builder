import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props);
    const[member, setMember] = useState({name: '', email: '', role: ''});

    const changeHandler = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: '' });
    }

    return (
        <form>
            <label htmlFor='name'>Name: </label>
            <input 
                type='text'
                name='name'
                value={member.name}
                onChange={changeHandler}
            />
            
            <label htmlFor='name'>Email: </label>
            <input 
                type='text'
                name='email'
                value={member.email}
                onChange={changeHandler}
            />
            
            <label htmlFor='name'>Role: </label>
            <input 
                type='text'
                name='name'
                value={member.role}
                onChange={changeHandler}
            />
        </form>

    )

}


export default MemberForm;