import React from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { MyComponent } from '@myworkspace/design-system-react';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to frontend!</h1>
      </header>
      <main>
        <MyComponent first="David" last="Rock" />
      </main>
    </div>
  );
}

export default App;
