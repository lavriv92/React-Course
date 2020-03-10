import React from 'react';
import Counter from './components/Counter';
import CommentsList from './components/CommentsList';
import Form from './components/Form';

class App extends React.Component {

    handleSubmit = (e) => {
        console.log('Form sent');
    };

    render() {
      return <>
          <hr/>
          <Counter/>
          <hr/>
          <Form onSubmit={this.handleSubmit}>
              {(form, onSubmit, onChange, errors) => {
                  return (
                      <>
                          <div>
                              <input name="username" onChange={onChange} value={form.username}/>
                              {errors.username.length ? errors.username.map(err => <div>{err}</div>) : null}
                          </div>
                          <div>
                              <input type="password" name="password" onChange={onChange} value={form.password}/>
                              {errors.password.length ? errors.password.map(err => <div>{err}</div>) : null}
                          </div>
                          <div>
                              <button type="submit">Submit</button>
                          </div>
                      </>
                  );
              }}
          </Form>
          <hr/>
          <CommentsList/>
      </>
    };
}

export default App;
