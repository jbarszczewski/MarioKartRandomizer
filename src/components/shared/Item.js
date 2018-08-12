import styled from 'styled-components';

const Item = styled.div`
width: ${props => props.primary ? '200px' : '100px'};
height:  ${props => props.primary ? '200px' : '100px'};
border: 5px solid black;
border-radius: 10px;
font-size: 8em;
text-align: center;
vertical-align: middle;
line-height: ${props => props.primary ? '200px' : '100px'};
`;

export default Item;