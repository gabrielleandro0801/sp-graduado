import React from 'react';

import DrawerContext from '../../contexts/Drawer';
import GraduateAssociatedContent from './content/GraduatesAssociated';
import GraduateUnAssociatedContent from './content/GraduateUnAssociated';

const GodfatherMenuRenderContent = (): JSX.Element => {
  const { currentContent } = React.useContext(DrawerContext);

  switch (currentContent) {
    case 0:
      return <GraduateAssociatedContent />;
    case 1:
      return <h1>PROFILE</h1>;
    case 2:
      return <GraduateUnAssociatedContent />;
    default:
      return <h6>Unexpected Error</h6>;
  }
};

export default GodfatherMenuRenderContent;
