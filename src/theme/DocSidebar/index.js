import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import SearchInput from '../SearchBar';

export default function DocSidebarWrapper(props) {
  return (
    <div className="sidebarContainer">
      <div className="navbarSearchContainer">
        <SearchInput className="navbarSearch" />
      </div>
      <DocSidebar {...props} style={{paddingTop: 0}} />
    </div>
  );
}
