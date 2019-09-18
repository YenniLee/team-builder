import React from 'react';
import styled from 'styled-components';

const StyledMembers = styled.div`
    text-align: center;
    width: 400px;
`;


const Members = props => {
    return (
        <StyledMembers className='member-list'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </StyledMembers>
    )
};

export default Members;