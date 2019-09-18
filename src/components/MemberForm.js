import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
`;
const StyledInput = styled.input`
    height: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid blue;
`;

const StyledButton = styled.button`
    height: 30px;
    width: 160px;
    margin-top: 20px;
    align-self: center;
    font-weight: bold;
    color: #fff;
    background: dodgerblue;
`;



const MemberForm = props => {
    console.log(props);
    const[member, setMember] = useState({name: '', email: '', role: ''});

    const changeHandler = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        const newMember = {...member, id: Date.now()
        }
        props.addNewMember(newMember);
        setMember({name: '', email: '', role: ''})
    }

    return (
        <StyledForm onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <StyledInput 
                id='name'
                type='text'
                name='name'
                value={member.name}
                onChange={changeHandler}
            />
            
            <label htmlFor='email'>Email: </label>
            <StyledInput 
                id='email'
                type='text'
                name='email'
                value={member.email}
                onChange={changeHandler}
            />
            
            <label htmlFor='role'>Role: </label>
            <StyledInput 
                id='role'
                type='text'
                name='role'
                value={member.role}
                onChange={changeHandler}
            />
            <StyledButton type='submit'>Add Member</StyledButton>
        </StyledForm>
    )
}


export default MemberForm;