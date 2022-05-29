import React from 'react';

import DrawerContext from '../../contexts/Drawer';
import GraduateAssociatedContent from './content/GraduatesAssociated';
import GraduateUnAssociatedContent from './content/GraduateUnAssociated';
import GodfatherProfileContent from './content/Profile';

const GodfatherMenuRenderContent = (): JSX.Element => {
  const { currentContent } = React.useContext(DrawerContext);

  const geUserInfoFromStorage = (): any => {
    const dataGodfather = localStorage.getItem('userInfoGodfather');
    const dataGraduate = localStorage.getItem('userInfoGraduate');

    if (dataGodfather) return JSON.parse(dataGodfather);
    if (dataGraduate) return JSON.parse(dataGraduate);

    return {};
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
