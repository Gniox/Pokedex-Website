import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0px;
  }
`;

interface Props {
  name: string;
  url: string;
  key: string;
}

function formatName(name: string) {
  const splitName = name.split('-');
  const formattedName = 'Generation ' + splitName[splitName.length - 1];

  return formattedName;
}

const GenerationCounterItem: React.FC<Props> = ({ name, url }) => {
  return <StyledListItem>{formatName(name)}</StyledListItem>;
};

export default GenerationCounterItem;
