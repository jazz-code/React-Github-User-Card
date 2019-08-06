import React from "react";
import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      // data: "login"
    };
  }

  //   componentDidMount() {
  //     this.userData();
  //   }

  //   userData = () => {
  //     // let data = avatar_url;
  //     axios
  //       .get(`https://api.github.com/users/jazz-code`)
  //       .then(res => res.data)
  //       .then(data => this.setState({ user: data }));
  //   };
  render() {
    console.log("User", this.state.user);
    return (
      //   <Card>
      //     <Image src="" wrapped ui={false} />
      //     <Card.Content>
      //       <Card.Header>{this.props.user}</Card.Header>
      //       <Card.Meta>
      //         <span className="date">Joined in 2015</span>
      //       </Card.Meta>
      //       <Card.Description>
      //         Matthew is a musician living in Nashville.
      //       </Card.Description>
      //     </Card.Content>
      //     <Card.Content extra>
      //       <a>
      //         <Icon name="user" />
      //         22 Friends
      //       </a>
      //     </Card.Content>
      //   </Card>
      <div>
        <h1>{this.props.name}</h1>
        <img width="300" src={this.props.avatar} />
        {this.props.followers.map(people => {
          return <p>{people.login}</p>;
        })}
      </div>
    );
  }
}

export default UserData;
