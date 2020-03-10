import React, { Component } from 'react';
import Form from './Form';

class PageForm extends Component {

  render() {
    return (
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 col-xl-6">
            <h1 className="mb-5">It's form component</h1>
            <Form className="text-left" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageForm;