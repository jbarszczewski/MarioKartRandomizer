import styled from 'styled-components';

const Item = styled.div`
width: ${props => props.primary ? '100px' : '50px'};
height:  ${props => props.primary ? '100px' : '50px'};
background: grey;
border: 2px solid black;
border-radius: 5px;
`;

export default Item;