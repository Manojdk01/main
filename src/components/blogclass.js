import React from 'react';
import { FiUsers } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GITHUB_GET_USER } from '../config';
class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blog : {
        name : "Dummy Name",
        bio : "Dummy content"
      },
      repoList : []
    }
    console.log("Blog Component - constructor with props : ", this.props.name, " from parent and state : ", this.state, " from this component");
  }

  async componentDidMount() {
    console.log("Blog Component - componentDidMount", this.props.name);
    const response = await fetch (GITHUB_GET_USER + this.props.name);
    const blog_user_data = await response.json();
  
    const repo_data = await fetch (GITHUB_GET_USER + this.props.name + "/repos");
    const repo_list_data = await repo_data.json();

    this.setState({
      blog : blog_user_data,
      repoList : repo_list_data
    });
  }

  componentDidUpdate() {
    console.log("Blog Component - componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("Blog Component - componentWillUnmount")
  }
  render() {
    const { blog, repoList } = this.state;
    console.log("Blog Component - render");
    return (
      <div className="flex flex-col gap-5"> 
        <div className="flex gap-5 card-container mob:flex-col mob:items-center">
          <div className="flex justify-center ">
            {/* <img className="rounded-md w-[230px] mob:hidden md:hidden sm:hidden xsm:hidden border-none align-middle" src={blog.avatar_url} alt={blog.name} /> */}
          </div>
        </div>
        
      </div>
    )
  }
}

export default Blog;