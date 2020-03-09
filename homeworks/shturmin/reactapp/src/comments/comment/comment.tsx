import * as React from 'react';
import Media from 'react-bootstrap/Media';
import './comment.css';

type Props = {
  comment: any
};
type State = {

};

export class Comment extends React.Component<Props, State> {
  render() {
    return (
	    <Media className="post-comment">
		    <img
			    width={64}
			    height={64}
			    className="mr-3"
			    src="/img/ava.png"
			    alt="Generic placeholder"
		    />
		    <Media.Body>
			    <h5>
						{this.props.comment.header}
			    </h5>
			    <p>
						{this.props.comment.body}
			    </p>
					<div>
						<a href={"/#"}>Author: {this.props.comment.author} </a>
					</div>
		    </Media.Body>
	    </Media>
    );
  };
};
