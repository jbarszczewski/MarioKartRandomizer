import styled from 'styled-components';

export const Item = styled.div`
width: ${props => props.primary ? '200px' : '100px'};
height:  ${props => props.primary ? '200px' : '100px'};
border: 5px solid black;
border-radius: 10px;
text-align: center;
font-size: 1em;
vertical-align: middle;
`;

export const ScoreItem = Item.extend`
font-size: 8em;
line-height: ${props => props.primary ? '200px' : '100px'};
`;
