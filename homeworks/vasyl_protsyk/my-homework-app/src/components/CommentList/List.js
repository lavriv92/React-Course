import React from 'react';
import './List.css'

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    deleteComment = id => {
        this.props.onCommentDelete(id);
    };
    
    getListItems = () => {
      return this.props.comments.map((item) =>
          <li key={item.id}>
              <span>{item.text}</span>
              <span>/</span>
              <span>{item.author}</span><br/>
              <span className="remove" onClick={() => { this.deleteComment(item.id) }}>Delete this comment!</span>
          </li>
      );
    };
    
    render() {
        return (
            <div className="List">
                <ul>
                    {this.getListItems()}
                </ul>
            </div>
        );
    }
}

export default List;
