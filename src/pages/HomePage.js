import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';
import DevInfoForm from '../components/DevInfoForm';
import MainContent from '../components/MainContent';
import classNames from 'classnames';

const HomePage = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);

    const onAddDeveloper = () => {
        setIsFormOpen(!isFormOpen);
    }

    return(
      <>
      {isFormOpen && (
        <div className="form-content">
          <DevInfoForm formClose={onAddDeveloper} closeButton></DevInfoForm>
        </div>
      )}
      <div className={classNames("form-display", {
        "display1": isFormOpen,
        "display2": isFormOpen,

      })}>
        <Header isFormOpen={isFormOpen} />
        <MainContent onAddDeveloper={onAddDeveloper}>Explore developer profiles</MainContent>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;