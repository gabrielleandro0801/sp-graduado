import React from 'react';

import DrawerContext from '../../contexts/Drawer';
import GraduateAssociatedContent from './content/GraduatesAssociated';
import GraduateUnAssociatedContent from './content/GraduateUnAssociated';
import GodfatherProfileContent from './content/Profile';

const GodfatherMenuRenderContent = (): JSX.Element => {
  const { currentContent } = React.useContext(DrawerContext);

  const geUserInfoFromStorage = (): any => {
    const data = localStorage.getItem('userInfo');
    return data ? JSON.parse(data) : {};
  };

  switch (currentContent) {
    case 0:
      return <GraduateAssociatedContent />;
    case 1:
      return <GodfatherProfileContent godafatherInfo={{ ...geUserInfoFromStorage() }} />;
    case 2:
      return <GraduateUnAssociatedContent />;
    default:
      return <h6>Unexpected Error</h6>;
  }
};

export default GodfatherMenuRenderContent;
