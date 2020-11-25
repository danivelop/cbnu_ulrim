/* External dependencies */
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './PetitionPage.module.scss';
import PetitionList from 'components/PetitionList';
import Navigation from 'components/Global/Navigation';

const cx = classNames.bind(styles);

function PetitionPage() {
  const [downState, setDownState] = useState(false);
  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setDownState(false);
      } else {
        setDownState(true);
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    rootMargin: '100px 100px',
  });

  useEffect(() => {
    observer.observe(document.querySelector<any>('.fake'));
  }, []);

  return (
    <div className={cx('main-layout')}>
      <div className="fake" />
      {downState ? (
        <Navigation className="down" />
      ) : (
        <Navigation className="" />
      )}
      <Switch>
        <Route path="/petition" component={PetitionList} />
      </Switch>
    </div>
  );
}

export default PetitionPage;
