import React from 'react';
import '../Styles/dbmsHome.css';

import { useNavigate } from 'react-router-dom';

function DbmsHome() {
  const navigate = useNavigate();
  return (
    <div className="dbms-home container-fluid">
      <div className="div-1 ">
        <img
          src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
          alt="MongoDB logo"
          className="mongodb-logo"
        ></img>
        <h3>Team MongoDB</h3>
        <div className="buttons">
          <button
            className="button btn-info"
            onClick={() => navigate('/21mca-myproj-dbms-mongoDB')}
          >
            <h4>Database</h4>
            <p>By Sankeertha</p>
          </button>
          <button
            className="button btn-info"
            onClick={() => navigate('/21mca-myproj-dbms-technical-admin')}
          >
            <h4>Technical Quiz</h4>
            <p>By Praveen Kumar</p>
          </button>
          <button
            className="button btn-info"
            onClick={() =>
              (window.location.href =
                'https://youtube.com/embed/_sd8HsGGUI4?start=1&end=230&fs=1')
            }
          >
            <h4>Techincal Video</h4>
            <p>By Saranya</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DbmsHome;
