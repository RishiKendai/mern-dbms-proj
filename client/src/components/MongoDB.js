import React from 'react';
import '../Styles/mongoDB.css';

import mongoLogo from './images/MongoDB-logo.png';
import documentModel from './images/mongodb-document-model.png';
import shell from './images/general-actions-develop.png';
import scalable from './images/atlas-auto-scale.png';
import cloud from './images/general-features.png';
import community from './images/general-features-expertise.png';
import insert from './images/insert.png';
import update from './images/Update.png';
import find from './images/find.png';
import deleteDoc from './images/Delete.png';
import mongooseJS from './images/mongoosejs-logo.png';
import roboMongo from './images/robomongo.png';
import mongoAtlas from './images/mongo-atlas.png';

function MongoDB() {
  return (
    <div className="mongo-page container-fluid ">
      <div className="content-section">
        <img src={mongoLogo} alt="mongoDB logo" className="mongo-logo"></img>
        <p>
          <span>
            Founded in 2007 by Dwight Merriman, Eliot Horowitz and Kevin Ryan –
            the team behind DoubleClick.
          </span>
        </p>
        <p>
          At the Internet advertising company DoubleClick (now owned by Google),
          and licensed under the Server Side Public License. MongoDB is
          developed by MongoDB Inc.
        </p>
        <h4>What is MongoDB</h4>
        <ul>
          <li>MongoDB is a source-available</li>
          <li>cross-platform</li>
          <li>document-oriented database program.</li>
          <li>Classified as a NoSQL database program</li>
          <li>MongoDB uses JSON-like</li>
          <li>documents with optional schemas.</li>
        </ul>
        <h4>Why MongoDB</h4>
        {/* Document Model */}
        <div className="feature-div">
          <span className="img-span">
            <img src={documentModel} alt="document" className="side-img"></img>
          </span>
          <span>
            <h5>Document Model</h5>
            <p>
              The document data model is a powerful way to store and retrieve
              data in any modern programming language, allowing developers to
              move quickly.
            </p>
          </span>
        </div>
        {/* Cloud */}
        <div className="feature-div">
          <span className="img-span">
            <img src={cloud} alt="Cloud" className="side-img"></img>
          </span>
          <span>
            <h5>Deployment Options</h5>
            <p>
              MongoDB is available in any major public cloud (such as AWS,
              Azure, and Google Cloud) through MongoDB Atlas, in large data
              centers through the Enterprise Advanced edition, or free through
              the open-source Community edition.
            </p>
          </span>
        </div>
        {/* Shell */}
        <div className="feature-div">
          <span className="img-span">
            <img src={shell} alt="shell" className="side-img"></img>
          </span>
          <span>
            <h5>Get Started Quickly</h5>
            <p>
              MongoDB is available in any major public cloud (such as AWS,
              Azure, and Google Cloud) through MongoDB Atlas, in large data
              centers through the Enterprise Advanced edition, or free through
              the open-source Community edition.
            </p>
          </span>
        </div>
        {/* Scalable */}
        <div className="feature-div">
          <span className="img-span">
            <img src={scalable} alt="shell" className="side-img"></img>
          </span>
          <span>
            <h5>Fully Scalable</h5>
            <p>
              MongoDB’s horizontal, scale-out architecture can support huge
              volumes of both data and traffic.
            </p>
          </span>
        </div>
        {/* Community */}
        <div className="feature-div">
          <span className="img-span">
            <img src={community} alt="shell" className="side-img"></img>
          </span>
          <span>
            <h5>Find Community</h5>
            <p>
              MongoDB has developed a large and mature platform ecosystem. It
              has a worldwide community of developers and consultants, making it
              easy to get help. It also has an enterprise-grade support
              offering.
            </p>
          </span>
        </div>
        <div>
          <h4>CRUD Operations</h4>
          {/* Create */}
          <div className="crud-div">
            <img src={insert} alt="create_crud" className="crud-img"></img>
            <h5>Create Documemnts</h5>
          </div>
          {/* Update */}
          <div className="crud-div">
            <img src={update} alt="create_crud" className="crud-img"></img>
            <h5>Update Documemnts</h5>
          </div>
          {/* Read */}
          <div className="crud-div">
            <img src={find} alt="create_crud" className="crud-img"></img>
            <h5>Read Documemnts</h5>
          </div>
          {/* Delete */}
          <div className="crud-div">
            <img src={deleteDoc} alt="create_crud" className="crud-img"></img>
            <h5>Delete Documemnts</h5>
          </div>

          <div>
            <h4>Things about MongoDB</h4>
            <div className="grid-mongo-things">
              {/* Mongoose */}
              <div className="mongo-things-div">
                <div>
                  <img
                    src={mongooseJS}
                    alt="mongoose"
                    className="mongo-things-imgs"
                  ></img>
                </div>
                <p>
                  Mongoose is a JavaScript object-oriented programming library
                  that creates a connection between MongoDB and the Express web
                  application framework
                </p>
              </div>
              {/* Mongo Robo 3T */}
              <div className="mongo-things-div">
                <div>
                  <img src={roboMongo} alt="mongoose" height={120}></img>
                </div>
                <p>
                  Robo 3T is a lightweight, open-source, shell centric,
                  cross-platform graphical user interface tool for managing
                  MongoDB workloads.
                </p>
              </div>
              {/* Mongo Atlas */}
              <div className="mongo-things-div">
                <div>
                  <img src={mongoAtlas} alt="mongoose" height={150}></img>
                </div>
                <p>
                  The Easiest Way to Deploy, Operate, and Scale MongoDB in the
                  Cloud in Just a Few Clicks.Run anywhere in the world with
                  Atlas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MongoDB;
